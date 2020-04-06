import { combineReducers } from 'redux';
import { loginReducer } from 'module/login/reducer';
import { loaderReducer } from './loader/reducer';
import { meReducer } from './me/reducer';
import { modalReducer } from './modal/reducer';

export default combineReducers({
  login: loginReducer,
  loader: loaderReducer,
  me: meReducer,
  modal: modalReducer,
});
