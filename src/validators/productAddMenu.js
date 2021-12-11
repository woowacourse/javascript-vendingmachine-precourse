import Message from '../constants/message.js';

export default {
  validateExistProductName: name => (name ? true : alert(Message.productNameIsRequired)),

  validateProductPriceIsOver100: price =>
    price > 100 ? true : alert(Message.productPriceMinimumIs100),
  validateProductPriceCanDivide10: price =>
    price % 10 === 0 ? true : alert(Message.productPriceHaveToDivide10),
};
