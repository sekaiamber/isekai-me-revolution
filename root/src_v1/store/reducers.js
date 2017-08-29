import { combineReducers } from 'redux';

import messageReducer from './reducers/message';
import logReducer from './reducers/log';

export default combineReducers({
  messages: messageReducer,
  log: logReducer,
});
