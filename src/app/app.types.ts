export interface IChannelsResponse {
  total: string;
  channelDetails: IChannel[];
}

export interface IChannel {
  name: string;
  introduce: string;
  picture: IPicture;
  genres: IGenre[];
}

export interface IPicture {
  hcsSlaveAddrs: string[];
  extensionFields: string[];
  backgrounds: string[];
  channelPics: string[];
  channelBlackWhites: string[];
  others: string[];
}

export interface IGenre {
  genreID: string;
  genreType: string;
  genreName: string;
}
