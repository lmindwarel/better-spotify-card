export interface SpotifyImage {
  url: string;
  height?: number;
  width?: number;
}

export interface SpotifyArtist {
  id?: string;
  name: string;
  uri?: string;
}

export interface SpotifyAlbum {
  id?: string;
  name: string;
  uri?: string;
  images?: SpotifyImage[];
}

export interface SpotifyTrack {
  id: string;
  name: string;
  uri: string;
  duration_ms: number;
  artists: SpotifyArtist[];
  album?: SpotifyAlbum;
  is_playable?: boolean;
}

export interface SpotifyPlaylist {
  id: string;
  name: string;
  uri: string;
  description?: string;
  images?: SpotifyImage[];
  tracks_total?: number;
  owner_name?: string;
}

export interface SpotifyConnectDevice {
  id: string;
  name: string;
  type: string;
  is_active: boolean;
  is_private_session?: boolean;
  is_restricted?: boolean;
  volume_percent?: number;
  supports_volume?: boolean;
}

export interface SpotifyPage<T> {
  items: T[];
  total: number;
  offset: number;
  limit: number;
}
