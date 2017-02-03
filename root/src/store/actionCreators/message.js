function addMessage(payload) {
  return {
    type: 'MESSAGE_ADD',
    payload,
  };
}

export default {
  addMessage,
};
