import { LitElement, html, TemplateResult, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant, BetterSpotifyCardConfig } from './types/ha';
import { SpotifyConnectDevice, SpotifyPlaylist, SpotifyTrack } from './types/spotify';
import { SpotifyService } from './services/spotify-service';
import { cardStyles } from './styles/card-styles';
import { icons } from './utils/icons';
import { formatDuration, formatSeconds } from './utils/format';

export class BetterSpotifyCard extends LitElement {
  public static styles = cardStyles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: BetterSpotifyCardConfig;

  @state() private popupOpen = false;
  @state() private activeTab: 'playlists' | 'liked' | 'search' | 'devices' = 'liked';

  @state() private playlists: SpotifyPlaylist[] = [];
  @state() private likedTracks: SpotifyTrack[] = [];
  @state() private searchResults: SpotifyTrack[] = [];
  @state() private devices: SpotifyConnectDevice[] = [];

  @state() private loadingPlaylists = false;
  @state() private loadingLiked = false;
  @state() private loadingSearch = false;
  @state() private loadingDevices = false;

  @state() private searchQuery = '';
  @state() private currentPosition = 0;

  private searchDebounceTimer?: number;
  private positionTickerInterval?: number;
  private boundKeydownHandler?: (e: KeyboardEvent) => void;

  public setConfig(config: BetterSpotifyCardConfig): void {
    if (!config.entity) {
      throw new Error('Veuillez spécifier une entité Spotify (ex: media_player.spotify_antoine_delaroue)');
    }
    this.config = {
      default_tab: 'liked',
      ...config,
    };
    if (this.config.default_tab) {
      this.activeTab = this.config.default_tab;
    }
  }

  public getCardSize(): number {
    return 2;
  }

  public static getStubConfig(): Record<string, any> {
    return {
      entity: 'media_player.spotifyplus_account',
      title: 'Spotify',
      default_tab: 'liked',
    };
  }

  public connectedCallback(): void {
    super.connectedCallback();
    this.boundKeydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && this.popupOpen) {
        this.closePopup();
      }
    };
    window.addEventListener('keydown', this.boundKeydownHandler);
    this.startPositionTicker();
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.boundKeydownHandler) {
      window.removeEventListener('keydown', this.boundKeydownHandler);
    }
    this.stopPositionTicker();
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);

    // If popup opens or active tab changes, fetch required tab data
    if (changedProps.has('popupOpen') || changedProps.has('activeTab')) {
      if (this.popupOpen) {
        this.loadCurrentTabData();
      }
    }
  }

  private startPositionTicker(): void {
    this.stopPositionTicker();
    this.positionTickerInterval = window.setInterval(() => {
      this.updateTrackPosition();
    }, 1000);
  }

  private stopPositionTicker(): void {
    if (this.positionTickerInterval) {
      clearInterval(this.positionTickerInterval);
      this.positionTickerInterval = undefined;
    }
  }

  private updateTrackPosition(): void {
    if (!this.hass || !this.config?.entity) return;
    const entity = this.hass.states[this.config.entity];
    if (!entity || entity.state !== 'playing') {
      if (entity?.attributes?.media_position !== undefined) {
        this.currentPosition = entity.attributes.media_position;
      }
      return;
    }

    const pos = entity.attributes.media_position ?? 0;
    const updatedAt = entity.attributes.media_position_updated_at;
    if (updatedAt) {
      const elapsed = (Date.now() - new Date(updatedAt).getTime()) / 1000;
      this.currentPosition = Math.max(0, pos + elapsed);
    } else {
      this.currentPosition = pos;
    }
  }

  private openPopup(initialTab?: 'playlists' | 'liked' | 'search' | 'devices'): void {
    if (initialTab) {
      this.activeTab = initialTab;
    }
    this.popupOpen = true;
    this.loadCurrentTabData();
    // Also refresh devices list in background
    this.fetchDevices();
  }

  private closePopup(): void {
    this.popupOpen = false;
  }

  private setTab(tab: 'playlists' | 'liked' | 'search' | 'devices'): void {
    this.activeTab = tab;
    this.loadCurrentTabData();
  }

  private loadCurrentTabData(): void {
    if (!this.hass || !this.config?.entity) return;
    switch (this.activeTab) {
      case 'liked':
        if (this.likedTracks.length === 0) this.fetchLikedTracks();
        break;
      case 'playlists':
        if (this.playlists.length === 0) this.fetchPlaylists();
        break;
      case 'devices':
        this.fetchDevices();
        break;
      case 'search':
        // Wait for search input
        break;
    }
  }

  private async fetchLikedTracks(): Promise<void> {
    if (this.loadingLiked) return;
    this.loadingLiked = true;
    try {
      this.likedTracks = await SpotifyService.getLikedTracks(this.hass, this.config.entity, 50);
    } catch (e) {
      console.error(e);
    } finally {
      this.loadingLiked = false;
    }
  }

  private async fetchPlaylists(): Promise<void> {
    if (this.loadingPlaylists) return;
    this.loadingPlaylists = true;
    try {
      this.playlists = await SpotifyService.getPlaylists(this.hass, this.config.entity, 50);
    } catch (e) {
      console.error(e);
    } finally {
      this.loadingPlaylists = false;
    }
  }

  private async fetchDevices(): Promise<void> {
    if (this.loadingDevices) return;
    this.loadingDevices = true;
    try {
      this.devices = await SpotifyService.getConnectDevices(this.hass, this.config.entity);
    } catch (e) {
      console.error(e);
    } finally {
      this.loadingDevices = false;
    }
  }

  private handleSearchInput(e: InputEvent): void {
    const input = e.target as HTMLInputElement;
    this.searchQuery = input.value;

    if (this.searchDebounceTimer) {
      clearTimeout(this.searchDebounceTimer);
    }

    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      this.loadingSearch = false;
      return;
    }

    this.loadingSearch = true;
    this.searchDebounceTimer = window.setTimeout(async () => {
      try {
        this.searchResults = await SpotifyService.searchTracks(
          this.hass,
          this.config.entity,
          this.searchQuery,
          25
        );
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingSearch = false;
      }
    }, 350);
  }

  private clearSearch(): void {
    this.searchQuery = '';
    this.searchResults = [];
    this.loadingSearch = false;
  }

  /* Actions */
  private async handlePlayPause(e?: Event): Promise<void> {
    e?.stopPropagation();
    await SpotifyService.togglePlayPause(this.hass, this.config.entity);
  }

  private async handleNext(e?: Event): Promise<void> {
    e?.stopPropagation();
    await SpotifyService.skipNext(this.hass, this.config.entity);
  }

  private async handlePrevious(e?: Event): Promise<void> {
    e?.stopPropagation();
    await SpotifyService.skipPrevious(this.hass, this.config.entity);
  }

  private async handleSeek(e: Event): Promise<void> {
    const target = e.target as HTMLInputElement;
    const newPos = parseFloat(target.value);
    this.currentPosition = newPos;
    await SpotifyService.seek(this.hass, this.config.entity, newPos);
  }

  private async handleVolume(e: Event): Promise<void> {
    const target = e.target as HTMLInputElement;
    const vol = parseFloat(target.value);
    await SpotifyService.setVolume(this.hass, this.config.entity, vol);
  }

  private async handleVolumeStep(deltaPercent: number, e?: Event): Promise<void> {
    e?.stopPropagation();
    const entity = this.hass.states[this.config.entity];
    if (!entity) return;
    const currentVol = Math.round((entity.attributes.volume_level ?? 0.5) * 100);
    const newVol = Math.max(0, Math.min(100, currentVol + deltaPercent));
    await SpotifyService.setVolume(this.hass, this.config.entity, newVol);
  }

  private async handleSelectDevice(device: SpotifyConnectDevice): Promise<void> {
    await SpotifyService.transferPlayback(this.hass, this.config.entity, device.id);
    await this.fetchDevices();
  }

  private async handlePlayPlaylist(playlist: SpotifyPlaylist): Promise<void> {
    await SpotifyService.playContext(this.hass, this.config.entity, playlist.uri, 0);
  }

  private async handlePlayLikedTrack(index: number): Promise<void> {
    await SpotifyService.playLikedTracks(this.hass, this.config.entity, this.likedTracks, index);
  }

  private async handlePlaySearchTrack(index: number): Promise<void> {
    const sliced = this.searchResults.slice(index);
    const uris = sliced.map((t) => t.uri);
    await SpotifyService.playTracks(this.hass, this.config.entity, uris);
  }

  /* ======================================================== */
  /* RENDER METHODS                                           */
  /* ======================================================== */

  protected render(): TemplateResult {
    if (!this.hass || !this.config?.entity) {
      return html`<div class="mini-card">Entité Spotify non configurée</div>`;
    }

    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      return html`<div class="mini-card">Entité introuvable : ${this.config.entity}</div>`;
    }

    return html`
      ${this.renderMiniCard(entity)}
      ${this.popupOpen ? this.renderBubblePopup(entity) : ''}
    `;
  }

  /**
   * Mini Player (Dashboard Card)
   */
  private renderMiniCard(entity: any): TemplateResult {
    const isPlaying = entity.state === 'playing';
    const title = entity.attributes.media_title || 'Aucune lecture';
    const artist = entity.attributes.media_artist || entity.attributes.sp_user_display_name || 'Spotify';
    const picture = entity.attributes.entity_picture;
    const deviceName = entity.attributes.source || entity.attributes.sp_device_name;
    const duration = entity.attributes.media_duration || 0;
    const progressPercent = duration > 0 ? Math.min(100, (this.currentPosition / duration) * 100) : 0;

    return html`
      <div class="mini-card" @click=${() => this.openPopup()}>
        <div class="mini-main-row">
          ${picture
            ? html`<img class="mini-cover" src=${picture} alt="Album cover" />`
            : html`<div class="mini-cover">${icons.musicNote}</div>`}

          <div class="mini-info">
            <div class="mini-title">${title}</div>
            <div class="mini-artist">${artist}</div>
            ${deviceName
              ? html`
                  <div class="mini-device-badge">
                    ${icons.speaker}
                    <span>${deviceName}</span>
                  </div>
                `
              : ''}
          </div>

          <div class="mini-controls">
            <button class="btn-icon" title="Précédent" @click=${(e: Event) => this.handlePrevious(e)}>
              ${icons.skipPrevious}
            </button>
            <button
              class="btn-icon btn-play-mini"
              title=${isPlaying ? 'Pause' : 'Lecture'}
              @click=${(e: Event) => this.handlePlayPause(e)}
            >
              ${isPlaying ? icons.pause : icons.play}
            </button>
            <button class="btn-icon" title="Suivant" @click=${(e: Event) => this.handleNext(e)}>
              ${icons.skipNext}
            </button>
          </div>
        </div>

        <div class="mini-progress-bar">
          <div class="mini-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
      </div>
    `;
  }

  /**
   * Bubble-Card Style Popup
   */
  private renderBubblePopup(entity: any): TemplateResult {
    const deviceName = entity.attributes.source || entity.attributes.sp_device_name || 'Spotify Connect';

    return html`
      <div class="bubble-backdrop" @click=${() => this.closePopup()}>
        <div class="bubble-sheet" @click=${(e: Event) => e.stopPropagation()}>
          <!-- Header -->
          <div class="sheet-header">
            <div class="sheet-header-left">
              <span class="spotify-brand-icon">${icons.spotify}</span>
              <span class="sheet-header-title">Spotify</span>
              <button
                class="sheet-connect-pill"
                title="Changer d'appareil"
                @click=${() => this.setTab('devices')}
              >
                ${icons.speaker}
                <span>${deviceName}</span>
              </button>
            </div>
            <button class="btn-close" title="Fermer" @click=${() => this.closePopup()}>
              ${icons.close}
            </button>
          </div>

          <!-- Menu Tabs (placed at top for natural navigation) -->
          <div class="tab-bar">
            <button
              class="tab-btn ${this.activeTab === 'liked' ? 'active' : ''}"
              @click=${() => this.setTab('liked')}
            >
              ${icons.heart}
              <span>Titres likés</span>
            </button>
            <button
              class="tab-btn ${this.activeTab === 'playlists' ? 'active' : ''}"
              @click=${() => this.setTab('playlists')}
            >
              ${icons.playlist}
              <span>Playlists</span>
            </button>
            <button
              class="tab-btn ${this.activeTab === 'search' ? 'active' : ''}"
              @click=${() => this.setTab('search')}
            >
              ${icons.search}
              <span>Recherche</span>
            </button>
            <button
              class="tab-btn ${this.activeTab === 'devices' ? 'active' : ''}"
              @click=${() => this.setTab('devices')}
            >
              ${icons.connectDevices}
              <span>Appareils</span>
            </button>
          </div>

          <!-- Tab Content Body (middle scrollable area) -->
          <div class="tab-content">
            ${this.renderActiveTabContent(entity)}
          </div>

          <!-- Now Playing Player (docked at the bottom) -->
          ${this.renderNowPlayingSection(entity)}
        </div>
      </div>
    `;
  }

  /**
   * Now Playing widget inside Popup (Docked at bottom)
   */
  private renderNowPlayingSection(entity: any): TemplateResult {
    const isPlaying = entity.state === 'playing';
    const title = entity.attributes.media_title || 'Aucun titre en cours';
    const artist = entity.attributes.media_artist || 'Sélectionnez un morceau ci-dessus';
    const picture = entity.attributes.entity_picture;
    const duration = entity.attributes.media_duration || 0;
    const volumeLevel = Math.round((entity.attributes.volume_level ?? 0.5) * 100);

    return html`
      <div class="now-playing-section">
        <div class="now-playing-top">
          ${picture
            ? html`<img class="now-playing-cover" src=${picture} alt="Cover" />`
            : html`<div class="now-playing-cover list-item-thumb">${icons.musicNote}</div>`}

          <div class="now-playing-meta">
            <div class="now-playing-title">${title}</div>
            <div class="now-playing-artist">${artist}</div>
          </div>
        </div>

        <!-- Single seek timeline -->
        <div class="seek-container">
          <input
            type="range"
            class="seek-slider"
            min="0"
            max=${duration || 100}
            step="1"
            .value=${this.currentPosition}
            @change=${(e: Event) => this.handleSeek(e)}
          />
          <div class="seek-times">
            <span>${formatSeconds(this.currentPosition)}</span>
            <span class="vol-indicator">Vol. ${volumeLevel}%</span>
            <span>${formatSeconds(duration)}</span>
          </div>
        </div>

        <!-- Controls: Vol -, Prev, Play/Pause, Next, Vol + -->
        <div class="player-actions-row">
          <button
            class="btn-vol"
            title="Baisser le volume (-5%)"
            @click=${(e: Event) => this.handleVolumeStep(-5, e)}
          >
            ${icons.volumeLow}
            <span>-</span>
          </button>

          <div class="controls-center-group">
            <button class="btn-icon" title="Précédent" @click=${(e: Event) => this.handlePrevious(e)}>
              ${icons.skipPrevious}
            </button>
            <button
              class="btn-play-large"
              title=${isPlaying ? 'Pause' : 'Lecture'}
              @click=${(e: Event) => this.handlePlayPause(e)}
            >
              ${isPlaying ? icons.pause : icons.play}
            </button>
            <button class="btn-icon" title="Suivant" @click=${(e: Event) => this.handleNext(e)}>
              ${icons.skipNext}
            </button>
          </div>

          <button
            class="btn-vol"
            title="Augmenter le volume (+5%)"
            @click=${(e: Event) => this.handleVolumeStep(5, e)}
          >
            <span>+</span>
            ${icons.volumeHigh}
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Tab Content Router
   */
  private renderActiveTabContent(entity: any): TemplateResult {
    switch (this.activeTab) {
      case 'liked':
        return this.renderLikedTab(entity);
      case 'playlists':
        return this.renderPlaylistsTab(entity);
      case 'search':
        return this.renderSearchTab(entity);
      case 'devices':
        return this.renderDevicesTab(entity);
    }
  }

  /**
   * Tab 1: Liked Songs (Titres likés)
   */
  private renderLikedTab(entity: any): TemplateResult {
    if (this.loadingLiked) {
      return html`
        <div class="state-message">
          <div class="spinner"></div>
          <div>Chargement des titres likés...</div>
        </div>
      `;
    }

    if (this.likedTracks.length === 0) {
      return html`
        <div class="state-message">
          ${icons.heart}
          <div>Aucun titre liké trouvé ou synchronisé.</div>
          <button class="sheet-connect-pill" @click=${() => this.fetchLikedTracks()}>Actualiser</button>
        </div>
      `;
    }

    const currentTrackTitle = entity.attributes.media_title;

    return html`
      <div class="items-list">
        ${this.likedTracks.map((track, index) => {
          const isCurrent = currentTrackTitle && track.name === currentTrackTitle;
          const cover = track.album?.images?.[0]?.url;
          const artistNames = track.artists.map((a) => a.name).join(', ');

          return html`
            <div
              class="list-item"
              @click=${() => this.handlePlayLikedTrack(index)}
              title="Lancer la lecture à partir de ce titre"
            >
              ${cover
                ? html`<img class="list-item-thumb" src=${cover} alt="Cover" />`
                : html`<div class="list-item-thumb">${icons.musicNote}</div>`}

              <div class="list-item-text">
                <div class="list-item-title ${isCurrent ? 'active' : ''}">
                  ${track.name}
                </div>
                <div class="list-item-subtitle">${artistNames}</div>
              </div>

              <div class="list-item-duration">${formatDuration(track.duration_ms)}</div>
            </div>
          `;
        })}
      </div>
    `;
  }

  /**
   * Tab 2: Playlists
   */
  private renderPlaylistsTab(entity: any): TemplateResult {
    if (this.loadingPlaylists) {
      return html`
        <div class="state-message">
          <div class="spinner"></div>
          <div>Chargement des playlists...</div>
        </div>
      `;
    }

    if (this.playlists.length === 0) {
      return html`
        <div class="state-message">
          ${icons.playlist}
          <div>Aucune playlist trouvée.</div>
          <button class="sheet-connect-pill" @click=${() => this.fetchPlaylists()}>Actualiser</button>
        </div>
      `;
    }

    return html`
      <div class="items-list">
        ${this.playlists.map((pl) => {
          const cover = pl.images?.[0]?.url;
          const subtitle = pl.tracks_total ? `${pl.tracks_total} titres` : pl.owner_name || 'Playlist';

          return html`
            <div
              class="list-item"
              @click=${() => this.handlePlayPlaylist(pl)}
              title="Lire la playlist ${pl.name}"
            >
              ${cover
                ? html`<img class="list-item-thumb" src=${cover} alt="Cover" />`
                : html`<div class="list-item-thumb">${icons.playlist}</div>`}

              <div class="list-item-text">
                <div class="list-item-title">${pl.name}</div>
                <div class="list-item-subtitle">${subtitle}</div>
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }

  /**
   * Tab 3: Search
   */
  private renderSearchTab(entity: any): TemplateResult {
    const currentTrackTitle = entity.attributes.media_title;

    return html`
      <div class="search-box-wrapper">
        <span class="search-icon-left">${icons.search}</span>
        <input
          type="text"
          class="search-input"
          placeholder="Rechercher un titre ou un artiste..."
          .value=${this.searchQuery}
          @input=${(e: InputEvent) => this.handleSearchInput(e)}
        />
        ${this.searchQuery
          ? html`
              <button class="search-btn-clear" title="Effacer" @click=${() => this.clearSearch()}>
                ${icons.clear}
              </button>
            `
          : ''}
      </div>

      ${this.loadingSearch
        ? html`
            <div class="state-message">
              <div class="spinner"></div>
              <div>Recherche dans Spotify...</div>
            </div>
          `
        : ''}
      ${!this.loadingSearch && this.searchQuery && this.searchResults.length === 0
        ? html`
            <div class="state-message">
              ${icons.search}
              <div>Aucun morceau trouvé pour "${this.searchQuery}".</div>
            </div>
          `
        : ''}
      ${!this.loadingSearch && !this.searchQuery && this.searchResults.length === 0
        ? html`
            <div class="state-message">
              ${icons.musicNote}
              <div>Tapez un nom de morceau, d'album ou d'artiste.</div>
            </div>
          `
        : ''}

      <div class="items-list">
        ${this.searchResults.map((track, index) => {
          const isCurrent = currentTrackTitle && track.name === currentTrackTitle;
          const cover = track.album?.images?.[0]?.url;
          const artistNames = track.artists.map((a) => a.name).join(', ');

          return html`
            <div
              class="list-item"
              @click=${() => this.handlePlaySearchTrack(index)}
              title="Lire ce titre"
            >
              ${cover
                ? html`<img class="list-item-thumb" src=${cover} alt="Cover" />`
                : html`<div class="list-item-thumb">${icons.musicNote}</div>`}

              <div class="list-item-text">
                <div class="list-item-title ${isCurrent ? 'active' : ''}">
                  ${track.name}
                </div>
                <div class="list-item-subtitle">${artistNames}</div>
              </div>

              <div class="list-item-duration">${formatDuration(track.duration_ms)}</div>
            </div>
          `;
        })}
      </div>
    `;
  }

  /**
   * Tab 4: Connect Devices
   */
  private renderDevicesTab(entity: any): TemplateResult {
    if (this.loadingDevices) {
      return html`
        <div class="state-message">
          <div class="spinner"></div>
          <div>Recherche des appareils Spotify Connect...</div>
        </div>
      `;
    }

    if (this.devices.length === 0) {
      return html`
        <div class="state-message">
          ${icons.speaker}
          <div>Aucun appareil Spotify Connect détecté.</div>
          <button class="sheet-connect-pill" @click=${() => this.fetchDevices()}>Actualiser</button>
        </div>
      `;
    }

    const currentSource = entity.attributes.source || entity.attributes.sp_device_name;

    return html`
      <div class="items-list">
        ${this.devices.map((device) => {
          const isActive = device.is_active || device.name === currentSource;

          return html`
            <div
              class="list-item"
              @click=${() => this.handleSelectDevice(device)}
              title="Diffuser sur ${device.name}"
            >
              <div class="list-item-thumb list-item-thumb-round">
                ${icons.speaker}
              </div>

              <div class="list-item-text">
                <div class="list-item-title ${isActive ? 'active' : ''}">${device.name}</div>
                <div class="list-item-subtitle">${device.type || 'Haut-parleur'}</div>
              </div>

              ${isActive ? html`<div class="list-item-badge">Actif</div>` : ''}
            </div>
          `;
        })}
      </div>
    `;
  }
}

// Register custom element
if (!customElements.get('better-spotify-card')) {
  customElements.define('better-spotify-card', BetterSpotifyCard);
}

// Register with Home Assistant Lovelace Card Picker
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'better-spotify-card',
  name: 'Better Spotify Card',
  description: 'Lecteur Spotify élégant style Android avec popup type Bubble-Card',
  preview: true,
  documentationURL: 'https://github.com/antoine/better-spotify-card',
});

console.info(
  '%c BETTER-SPOTIFY-CARD %c v1.0.0 ',
  'color: white; background: #1DB954; font-weight: 700; border-radius: 3px 0 0 3px;',
  'color: white; background: #282828; font-weight: 700; border-radius: 0 3px 3px 0;'
);
