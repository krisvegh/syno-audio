export interface IFolderResponse {
  data: IFolderResponseData;
  success: boolean;
}

export interface IFolderResponseData {
  folder_total: number;
  id: string;
  items: IFolder[];
  offset: number;
  total: number;
}

export interface IFolder {
  id: string;
  is_personal: boolean;
  path: string;
  title: string;
  type: string;
  additional?: IFolderAdditional;
}

export interface IFolderAdditional {
  song_audio: IFolderAdditionalSongAudio;
  song_rating: IFolderAdditionalSongRating;
  song_tag: IFolderAdditionalSongTag;
}

export interface IFolderAdditionalSongAudio {
  bitrate: number;
  channel: number;
  codec: string;
  container: string;
  duration: number;
  filesize: number;
  frequency: number;
}

export interface IFolderAdditionalSongRating {
  rating: number;
}

export interface IFolderAdditionalSongTag {
  album: string;
  album_artist: string;
  artist: string;
  comment: string;
  composer: string;
  disc: number;
  genre: string;
  track: number;
  year: number;
}
