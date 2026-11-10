export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: {
    friendly_name?: string;
    media_title?: string;
    media_artist?: string;
    media_album_name?: string;
    entity_picture?: string;
    entity_picture_local?: string;
    media_duration?: number;
    media_position?: number;
    media_position_updated_at?: string;
    volume_level?: number;
    is_volume_muted?: boolean;
    source?: string;
    source_list?: string[];
    shuffle?: boolean;
    repeat?: string;
    sp_user_display_name?: string;
    sp_device_name?: string;
    [key: string]: any;
  };
  context: {
    id: string;
    parent_id: string | null;
    user_id: string | null;
  };
  last_changed: string;
  last_updated: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService: (
    domain: string,
    service: string,
    serviceData?: Record<string, any>,
    target?: Record<string, any>,
    returnResponse?: boolean
  ) => Promise<any>;
  callWS: <T = any>(msg: Record<string, any>) => Promise<T>;
  connection: any;
  themes: any;
  selectedTheme: any;
  language: string;
}

export interface LovelaceCardConfig {
  type: string;
  [key: string]: any;
}

export interface BetterSpotifyCardConfig extends LovelaceCardConfig {
  entity: string;
  title?: string;
  default_device?: string;
  hide_volume?: boolean;
  hide_connect?: boolean;
  default_tab?: 'playlists' | 'liked' | 'search' | 'devices';
  compact_view?: boolean;
}
