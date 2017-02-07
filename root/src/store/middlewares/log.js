import _ from 'lodash';

const log = _.curry(
  ({ dispatch, getState }, next, action) => {
    // ie不支持startsWith
    // if (!action.type.startsWith('LOG')) {
    if (!(action.type.lastIndexOf('LOG', 0) === 0)) {
      dispatch({
        type: 'LOG_PUSH',
        action,
      });
    }
    next(action);
  }
);

export default log;
