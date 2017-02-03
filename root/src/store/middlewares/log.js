import _ from 'lodash';

const log = _.curry(
  ({ dispatch, getState }, next, action) => {
    if (!action.type.startsWith('LOG')) {
      dispatch({
        type: 'LOG_PUSH',
        action,
      });
    }
    next(action);
  }
);

export default log;
