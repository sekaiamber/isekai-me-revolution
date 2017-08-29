const defaultMessage = {
  lastKey: '',
  messages: [],
};

function dumpMessages(state, messages) {
  const msgs = messages.concat(state.messages).unique2(val => val._key).sort((a, b) => b.createAt - a.createAt);
  return {
    ...state,
    messages: msgs,
    lastKey: msgs[msgs.length - 1]._key,
  };
}

function updateMessage(state, message) {
  const messages = state.messages.slice();
  for (let i = 0; i < messages.length; i += 1) {
    if (messages[i]._key === message._key) {
      messages[i] = {
        ...message,
      };
      break;
    }
  }
  const r = {
    ...state,
    messages,
  };
  return r;
}

function messageReducer(state = defaultMessage, action) {
  switch (action.type) {
    case 'MESSAGE_DUMP':
      return dumpMessages(state, action.messages);
    case 'MESSAGE_UPDATE':
      return updateMessage(state, action.message);
    default:
      return state;
  }
}

export default messageReducer;
