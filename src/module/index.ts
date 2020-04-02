import { combineReducers } from 'redux';
import { loginReducer } from 'module/login/reducer';
import { loaderReducer } from './loader/reducer';

export default combineReducers({
  login: loginReducer,
  loader: loaderReducer,
});
