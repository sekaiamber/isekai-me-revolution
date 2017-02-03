const defaultMessage = {
  currentPage: 1,
  pageCount: 1,
  messages: [],
};

function addMessage(state, message) {
  return {
    ...state,
    messages: state.messages.splice(0, 0, message),
  };
}

function messageReducer(state = defaultMessage, action) {
  switch (action.type) {
    case 'MESSAGE_ADD':
      return addMessage(state, action.message);
    default:
      return state;
  }
}

export default messageReducer;
