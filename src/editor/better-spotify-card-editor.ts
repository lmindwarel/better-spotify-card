import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { HomeAssistant, BetterSpotifyCardConfig } from '../types/ha';

const SCHEMA = [
  {
    name: 'entity',
    required: true,
    selector: {
      entity: {
        filter: {
          domain: 'media_player',
        },
      },
    },
  },
  {
    name: 'default_tab',
    selector: {
      select: {
        mode: 'dropdown',
        options: [
          { value: 'liked', label: 'Titres likés' },
          { value: 'playlists', label: 'Playlists' },
          { value: 'search', label: 'Recherche' },
          { value: 'devices', label: 'Appareils' },
        ],
      },
    },
  },
  {
    name: 'default_device',
    selector: {
      text: {},
    },
  },
];

export const loadHaForm = async (): Promise<void> => {
  if (customElements.get('ha-form')) {
    return;
  }
  try {
    const helpers = (window as any).loadCardHelpers ? await (window as any).loadCardHelpers() : null;
    if (helpers) {
      const card = await helpers.createCardElement({ type: 'button' });
      if (card && card.constructor.getConfigElement) {
        await card.constructor.getConfigElement();
      }
    }
  } catch (err) {
    // ignore
  }

  if (customElements.get('ha-form')) {
    return;
  }

  // Fallback: trigger standard card editors to register ha-form
  const cardTypes = ['hui-entities-card', 'hui-button-card', 'hui-markdown-card'];
  for (const cardType of cardTypes) {
    const el = customElements.get(cardType) as any;
    if (el && el.getConfigElement) {
      try {
        await el.getConfigElement();
        if (customElements.get('ha-form')) break;
      } catch (e) {
        // ignore
      }
    }
  }
};

@customElement('better-spotify-card-editor')
export class BetterSpotifyCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: BetterSpotifyCardConfig;

  public setConfig(config: BetterSpotifyCardConfig): void {
    this._config = { ...config };
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config) return;
    const value = ev.detail.value;
    const newConfig: BetterSpotifyCardConfig = {
      ...this._config,
      ...value,
    };
    if (newConfig.default_device === '') {
      delete newConfig.default_device;
    }
    this._config = newConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: newConfig },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _computeLabel = (schema: any): string => {
    switch (schema.name) {
      case 'entity':
        return 'Lecteur Spotify (Entité media_player)';
      case 'default_tab':
        return 'Onglet affiché par défaut';
      case 'default_device':
        return 'Appareil Spotify par défaut (optionnel)';
      default:
        return schema.name;
    }
  };

  private _computeHelper = (schema: any): string => {
    switch (schema.name) {
      case 'entity':
        return 'Sélectionnez le compte Spotify ou SpotifyPlus à contrôler';
      case 'default_tab':
        return 'Onglet affiché lors de l’ouverture de la popup';
      case 'default_device':
        return 'Nom ou ID de l’enceinte/PC cible si aucun lecteur n’est actif';
      default:
        return '';
    }
  };

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    if (customElements.get('ha-form')) {
      return html`
        <div class="card-config">
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${SCHEMA}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
      `;
    }

    return html`
      <div class="card-config">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.entity || ''}
          .includeDomains=${['media_player']}
          label="Lecteur Spotify (Requis)"
          allow-custom-entity
          @value-changed=${(ev: CustomEvent) => {
            this._valueChanged({
              detail: { value: { ...this._config, entity: ev.detail.value } },
            } as CustomEvent);
          }}
        ></ha-entity-picker>
      </div>
    `;
  }

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 8px 0;
    }
  `;
}
