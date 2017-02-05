import wilddog from 'wilddog';

const config = {
  syncURL: 'https://isekai-me.wilddogio.com/',
};
wilddog.initializeApp(config);
const syncRef = wilddog.sync().ref('messages');

function _dumpMessages(dispatch, vals) {
  const messages = Object.keys(vals).map(key => ({
    ...vals[key],
    _key: key,
  }));
  dispatch({
    type: 'MESSAGE_DUMP',
    messages,
  });
}

function addMessage(payload) {
  return (dispatch) => {
    const data = {
      ...payload,
      createAt: new Date().getTime(),
      oo: 0,
      xx: 0,
    };
    syncRef.push(data, (error) => {
      if (error === null) {
        // success
      } else {
        console.error(error);
      }
    });
  };
}

function queryMessage(lastKey, count) {
  return (dispatch) => {
    syncRef.orderByKey().endAt(lastKey).limitToLast(count).once('value', (snapshot) => {
      _dumpMessages(dispatch, snapshot.val());
    });
  };
}

function initMessage() {
  return (dispatch) => {
    syncRef.endAt(0).limitToLast(10).on('child_added', (snapshot) => {
      const message = {};
      message[snapshot.key()] = snapshot.val();
      _dumpMessages(dispatch, message);
    });
  };
}

export default {
  addMessage,
  queryMessage,
  initMessage,
};
