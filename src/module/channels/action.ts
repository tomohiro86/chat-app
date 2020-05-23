import { ADD_ALL_CHANNEL, ADD_CHANNEL, DELETE_CHANNEL, ChannelsAction } from './type';
import { ChannelIF } from 'utils/interface';

export const addAllChannel = (payload: ChannelIF[]): ChannelsAction => ({
  type: ADD_ALL_CHANNEL as typeof ADD_ALL_CHANNEL,
  payload,
});

export const addChannel = (payload: ChannelIF): ChannelsAction => ({
  type: ADD_CHANNEL as typeof ADD_CHANNEL,
  payload,
});

export const deleteChannel = (id: string): ChannelsAction => ({
  type: DELETE_CHANNEL as typeof DELETE_CHANNEL,
  id,
});
