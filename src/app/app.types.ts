export interface IChannelsResponse {
  total: string;
  channelDetails: IChannel[];
}

export interface IChannel {
  name: string;
  introduce: string;
  picture: IPicture;
  genres: IGender[];
}

export interface IPicture {
  hcsSlaveAddrs: string[];
  extensionFields: string[];
  backgrounds: string[];
  channelPics: string[];
  channelBlackWhites: string[];
  others: string[];
}

export interface IGender {
  genreID: string;
  genreType: string;
  genreName: string;
}
