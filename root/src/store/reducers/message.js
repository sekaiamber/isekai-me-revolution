const defaultMessage = {
  lastKey: '',
  messages: [],
};

function dumpMessage(state, messages) {
  const msgs = messages.concat(state.messages).unique2(val => val._key).sort((a, b) => b.createAt - a.createAt);
  return {
    ...state,
    messages: msgs,
    lastKey: msgs[msgs.length - 1]._key,
  };
}

function messageReducer(state = defaultMessage, action) {
  switch (action.type) {
    case 'MESSAGE_DUMP':
      return dumpMessage(state, action.messages);
    default:
      return state;
  }
}

export default messageReducer;
