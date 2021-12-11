import Message from '../constants/message.js';

export default {
  checkExistProductName: name => (name ? true : alert(Message.productNameIsRequired)),
};
