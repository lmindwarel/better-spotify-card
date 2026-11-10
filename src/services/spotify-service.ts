import { HomeAssistant } from '../types/ha';
import { SpotifyConnectDevice, SpotifyPage, SpotifyPlaylist, SpotifyTrack } from '../types/spotify';

export class SpotifyService {
  /**
   * Request SpotifyPlus / Home Assistant to refresh playback state from Spotify Web API
   */
  public static async refreshPlaybackState(
    hass: HomeAssistant,
    entityId: string
  ): Promise<void> {
    try {
      await hass.callService('spotifyplus', 'trigger_scan_interval', {
        entity_id: entityId,
      });
    } catch (e) {
      try {
        await hass.callService('homeassistant', 'update_entity', {
          entity_id: entityId,
        });
      } catch (err) {
        // ignore
      }
    }
  }

  /**
   * Helper to call a SpotifyPlus query service with response data via Home Assistant WebSocket
   */
  private static async callSpotifyPlusWS(
    hass: HomeAssistant,
    service: string,
    entityId: string,
    serviceData: Record<string, any> = {}
  ): Promise<any> {
    try {
      const response = await hass.callWS<any>({
        type: 'call_service',
        domain: 'spotifyplus',
        service,
        service_data: {
          entity_id: entityId,
          ...serviceData,
        },
        return_response: true,
      });
      return response?.response;
    } catch (err) {
      console.warn(`[BetterSpotifyCard] spotifyplus.${service} call failed:`, err);
      throw err;
    }
  }

  /**
   * Get available Spotify Connect devices
   */
  public static async getConnectDevices(
    hass: HomeAssistant,
    entityId: string
  ): Promise<SpotifyConnectDevice[]> {
    try {
      const res = await this.callSpotifyPlusWS(hass, 'get_spotify_connect_devices', entityId, {
        refresh: true,
      });

      const rawDevices = res?.result?.devices || res?.result || [];
      if (Array.isArray(rawDevices)) {
        return rawDevices.map((d: any) => ({
          id: d.id || d.device_id || d.name,
          name: d.name || 'Appareil Spotify',
          type: d.type || 'Speaker',
          is_active: Boolean(d.is_active),
          is_private_session: d.is_private_session,
          is_restricted: d.is_restricted,
          volume_percent: d.volume_percent,
          supports_volume: d.supports_volume,
        }));
      }
    } catch (e) {
      console.warn('[BetterSpotifyCard] Falling back to entity source_list for connect devices');
    }

    // Fallback using standard HA entity source_list
    const entity = hass.states[entityId];
    if (entity?.attributes?.source_list) {
      const currentSource = entity.attributes.source;
      return entity.attributes.source_list.map((name: string) => ({
        id: name,
        name: name,
        type: 'Speaker',
        is_active: name === currentSource,
      }));
    }

    return [];
  }

  /**
   * Transfer playback to a Spotify Connect device
   */
  public static async transferPlayback(
    hass: HomeAssistant,
    entityId: string,
    deviceId: string
  ): Promise<void> {
    try {
      await hass.callService('spotifyplus', 'player_transfer_playback', {
        entity_id: entityId,
        device_id: deviceId,
        play: true,
      });
      return;
    } catch (e) {
      // Fallback to select_source
      await hass.callService('media_player', 'select_source', {
        entity_id: entityId,
        source: deviceId,
      });
    }
  }

  /**
   * Get user playlist favorites
   */
  public static async getPlaylists(
    hass: HomeAssistant,
    entityId: string,
    limit = 200
  ): Promise<SpotifyPlaylist[]> {
    try {
      const res = await this.callSpotifyPlusWS(hass, 'get_playlist_favorites', entityId, {
        limit: 50,
        limit_total: limit,
        sort_result: true,
      });

      const items = res?.result?.items || [];
      return items.map((p: any) => ({
        id: p.id || p.uri,
        name: p.name || 'Sans titre',
        uri: p.uri,
        description: p.description,
        images: p.images || [],
        tracks_total: p.tracks?.total,
        owner_name: p.owner?.display_name,
      }));
    } catch (err) {
      console.error('[BetterSpotifyCard] Erreur getPlaylists:', err);
      return [];
    }
  }

  /**
   * Get paginated items (tracks) for a specific playlist
   */
  public static async getPlaylistTracks(
    hass: HomeAssistant,
    entityId: string,
    playlistIdOrUri: string,
    limit = 50,
    offset = 0
  ): Promise<SpotifyPage<SpotifyTrack>> {
    try {
      const playlistId = playlistIdOrUri.replace('spotify:playlist:', '').trim();
      const res = await this.callSpotifyPlusWS(hass, 'get_playlist_items', entityId, {
        playlist_id: playlistId,
        limit: Math.min(limit, 50),
        offset,
      });

      const rawItems = res?.result?.items || [];
      const total = res?.result?.total ?? rawItems.length;
      const items = rawItems
        .map((item: any) => {
          const t = item.track || item.item || item;
          if (!t || !t.name) return null;
          return {
            id: t.id || t.uri,
            name: t.name || 'Titre inconnu',
            uri: t.uri,
            duration_ms: t.duration_ms || 0,
            artists: (t.artists || []).map((a: any) => ({
              id: a.id || '',
              name: typeof a === 'string' ? a : (a.name || 'Artiste inconnu'),
              uri: a.uri || '',
            })),
            album: t.album
              ? {
                  id: t.album.id || '',
                  name: t.album.name || '',
                  uri: t.album.uri || '',
                  images: t.album.images || [],
                }
              : undefined,
            is_playable: t.is_playable ?? true,
          } as SpotifyTrack;
        })
        .filter((t: any): t is SpotifyTrack => t !== null);

      return {
        items,
        total,
        offset,
        limit,
      };
    } catch (err) {
      console.error('[BetterSpotifyCard] Erreur getPlaylistTracks:', err);
      return { items: [], total: 0, offset, limit };
    }
  }

  /**
   * Get paginated user track favorites (Liked Songs)
   */
  public static async getLikedTracks(
    hass: HomeAssistant,
    entityId: string,
    limit = 50,
    offset = 0
  ): Promise<SpotifyPage<SpotifyTrack>> {
    try {
      const res = await this.callSpotifyPlusWS(hass, 'get_track_favorites', entityId, {
        limit: Math.min(limit, 50),
        offset,
        sort_result: false,
      });

      const rawItems = res?.result?.items || [];
      const total = res?.result?.total ?? rawItems.length;
      const items = rawItems.map((item: any) => {
        const t = item.track || item.item || item;
        return {
          id: t.id || t.uri,
          name: t.name || 'Titre inconnu',
          uri: t.uri,
          duration_ms: t.duration_ms || 0,
          artists: (t.artists || []).map((a: any) => ({
            id: a.id || '',
            name: typeof a === 'string' ? a : (a.name || 'Artiste inconnu'),
            uri: a.uri || '',
          })),
          album: t.album
            ? {
                id: t.album.id || '',
                name: t.album.name || '',
                uri: t.album.uri || '',
                images: t.album.images || [],
              }
            : undefined,
          is_playable: t.is_playable ?? true,
        };
      });

      return {
        items,
        total,
        offset,
        limit,
      };
    } catch (err) {
      console.error('[BetterSpotifyCard] Erreur getLikedTracks:', err);
      return { items: [], total: 0, offset, limit };
    }
  }

  /**
   * Search tracks in Spotify catalog
   */
  public static async searchTracks(
    hass: HomeAssistant,
    entityId: string,
    criteria: string,
    limit = 20
  ): Promise<SpotifyTrack[]> {
    if (!criteria || criteria.trim().length === 0) return [];
    try {
      const res = await this.callSpotifyPlusWS(hass, 'search_tracks', entityId, {
        criteria: criteria.trim(),
        limit: Math.min(limit, 10),
        limit_total: limit,
      });

      const items = res?.result?.items || [];
      return items.map((t: any) => ({
        id: t.id || t.uri,
        name: t.name || 'Titre inconnu',
        uri: t.uri,
        duration_ms: t.duration_ms || 0,
        artists: (t.artists || []).map((a: any) => ({ id: a.id, name: a.name, uri: a.uri })),
        album: t.album
          ? {
              id: t.album.id,
              name: t.album.name,
              uri: t.album.uri,
              images: t.album.images || [],
            }
          : undefined,
        is_playable: t.is_playable ?? true,
      }));
    } catch (err) {
      console.error('[BetterSpotifyCard] Erreur searchTracks:', err);
      return [];
    }
  }

  /**
   * Start playing a context (playlist, album, etc.) at an optional offset index
   */
  public static async playContext(
    hass: HomeAssistant,
    entityId: string,
    contextUri: string,
    offsetPosition = 0,
    deviceId?: string
  ): Promise<void> {
    try {
      const serviceData: Record<string, any> = {
        entity_id: entityId,
        context_uri: contextUri,
        offset_position: offsetPosition,
      };
      if (deviceId) {
        serviceData.device_id = deviceId;
      }
      await hass.callService('spotifyplus', 'player_media_play_context', serviceData);
      return;
    } catch (e) {
      await hass.callService('media_player', 'play_media', {
        entity_id: entityId,
        media_content_type: 'playlist',
        media_content_id: contextUri,
      });
    }
  }

  /**
   * Start playing a list of tracks (queues the next tracks)
   */
  public static async playTracks(
    hass: HomeAssistant,
    entityId: string,
    uris: string[],
    deviceId?: string
  ): Promise<void> {
    if (!uris || uris.length === 0) return;
    try {
      // spotifyplus accepts up to 50 items comma-separated
      const uriList = uris.slice(0, 50).join(',');
      const serviceData: Record<string, any> = {
        entity_id: entityId,
        uris: uriList,
        position_ms: 0,
        shuffle: false, // Explicitly keep order so the clicked track plays first
      };
      if (deviceId) {
        serviceData.device_id = deviceId;
      }
      await hass.callService('spotifyplus', 'player_media_play_tracks', serviceData);
      return;
    } catch (e) {
      await hass.callService('media_player', 'play_media', {
        entity_id: entityId,
        media_content_type: 'music',
        media_content_id: uris[0],
      });
    }
  }

  /**
   * Play liked tracks starting from a given index
   */
  public static async playLikedTracks(
    hass: HomeAssistant,
    entityId: string,
    allLikedTracks: SpotifyTrack[],
    startIndex = 0,
    deviceId?: string
  ): Promise<void> {
    // If playing from beginning (startIndex === 0), use native player_media_play_track_favorites to play all favorites
    if (startIndex === 0) {
      try {
        const serviceData: Record<string, any> = {
          entity_id: entityId,
          limit_total: 500,
        };
        if (deviceId) {
          serviceData.device_id = deviceId;
        }
        await hass.callService('spotifyplus', 'player_media_play_track_favorites', serviceData);
        return;
      } catch (err) {
        console.warn('[BetterSpotifyCard] player_media_play_track_favorites failed, falling back:', err);
      }
    }

    if (allLikedTracks && allLikedTracks.length > 0) {
      const sliced = allLikedTracks.slice(startIndex, startIndex + 50);
      const uris = sliced.map((t) => t.uri);
      await this.playTracks(hass, entityId, uris, deviceId);
    } else {
      const serviceData: Record<string, any> = {
        entity_id: entityId,
        limit_total: 500,
      };
      if (deviceId) {
        serviceData.device_id = deviceId;
      }
      await hass.callService('spotifyplus', 'player_media_play_track_favorites', serviceData);
    }
  }

  /**
   * Standard playback controls
   */
  public static async togglePlayPause(hass: HomeAssistant, entityId: string): Promise<void> {
    await hass.callService('media_player', 'media_play_pause', { entity_id: entityId });
  }

  public static async skipNext(hass: HomeAssistant, entityId: string): Promise<void> {
    try {
      await hass.callService('spotifyplus', 'player_media_skip_next', { entity_id: entityId });
    } catch (e) {
      await hass.callService('media_player', 'media_next_track', { entity_id: entityId });
    }
  }

  public static async skipPrevious(hass: HomeAssistant, entityId: string): Promise<void> {
    try {
      await hass.callService('spotifyplus', 'player_media_skip_previous', { entity_id: entityId });
    } catch (e) {
      await hass.callService('media_player', 'media_previous_track', { entity_id: entityId });
    }
  }

  public static async setVolume(
    hass: HomeAssistant,
    entityId: string,
    volumePercent: number
  ): Promise<void> {
    const fraction = Math.max(0, Math.min(100, volumePercent)) / 100;
    await hass.callService('media_player', 'volume_set', {
      entity_id: entityId,
      volume_level: fraction,
    });
  }

  public static async seek(
    hass: HomeAssistant,
    entityId: string,
    positionSeconds: number
  ): Promise<void> {
    await hass.callService('media_player', 'media_seek', {
      entity_id: entityId,
      seek_position: positionSeconds,
    });
  }

  /**
   * Set shuffle mode
   */
  public static async setShuffle(
    hass: HomeAssistant,
    entityId: string,
    shuffle: boolean
  ): Promise<void> {
    try {
      await hass.callService('spotifyplus', 'player_set_shuffle_mode', {
        entity_id: entityId,
        state: shuffle,
      });
    } catch (e) {
      await hass.callService('media_player', 'shuffle_set', {
        entity_id: entityId,
        shuffle,
      });
    }
  }

  /**
   * Toggle shuffle mode
   */
  public static async toggleShuffle(hass: HomeAssistant, entityId: string): Promise<void> {
    const entity = hass.states[entityId];
    const currentShuffle = Boolean(entity?.attributes?.shuffle);
    await this.setShuffle(hass, entityId, !currentShuffle);
  }
}
