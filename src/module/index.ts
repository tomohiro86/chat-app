import { combineReducers } from 'redux';
import { loginReducer } from 'module/login/reducer';
import { loaderReducer } from './loader/reducer';
import { meReducer } from './me/reducer';
import { channelsReducer } from './channels/reducer';
import { modalReducer } from './modal/reducer';

export default combineReducers({
  login: loginReducer,
  loader: loaderReducer,
  me: meReducer,
  channels: channelsReducer,
  modal: modalReducer,
});
