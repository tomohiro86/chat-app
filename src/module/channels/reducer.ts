import { ADD_ALL_CHANNEL, ADD_CHANNEL, DELETE_CHANNEL, ChannelsAction } from './type';
import { ChannelIF } from 'utils/interface';

interface State {
  payload: ChannelIF[];
}

const initialState = {
  payload: [],
};

export const channelsReducer = (state: State = initialState, action: ChannelsAction) => {
  switch (action.type) {
    case ADD_ALL_CHANNEL:
      return {
        ...state,
        payload: action.payload,
      };
    case ADD_CHANNEL:
      return {
        ...state,
        payload: [...state.payload, action.payload],
      };
    case DELETE_CHANNEL:
      return {
        ...state,
        payload: state.payload.filter((channel) => channel.id !== action.id),
      };
    default:
      return state;
  }
};
