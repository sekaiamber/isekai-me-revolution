import { combineReducers } from 'redux';

import messageReducer from './reducers/message';
import logReducer from './reducers/log';

export default combineReducers({
  message: messageReducer,
  log: logReducer,
});
