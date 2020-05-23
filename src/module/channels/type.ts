import { ChannelIF } from 'utils/interface';
export const ADD_ALL_CHANNEL = 'ADD_ALL_CHANNEL';
export const ADD_CHANNEL = 'ADD_CHANNEL';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';

interface AddAllChannel {
  type: typeof ADD_ALL_CHANNEL;
  payload: ChannelIF[];
}

interface AddChannel {
  type: typeof ADD_CHANNEL;
  payload: ChannelIF;
}

interface DeleteChannel {
  type: typeof DELETE_CHANNEL;
  id: string;
}

export type ChannelsAction = AddAllChannel | AddChannel | DeleteChannel;
