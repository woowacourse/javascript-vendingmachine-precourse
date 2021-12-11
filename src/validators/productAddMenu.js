import Message from '../constants/message.js';

export default {
  validateProductNameExist: name => (name ? true : alert(Message.productNameIsRequired)),

  validateProductPriceIsOver100: price =>
    price >= 100 ? true : alert(Message.productPriceMinimumIs100),
  validateProductPriceCanDivide10: price =>
    price % 10 === 0 ? true : alert(Message.productPriceHaveToDivide10),

  validateProductQuantityExist: quantity =>
    quantity ? true : alert(Message.productQuantityIsRequired),
  validateProductQuantityPlusInteger: quantity =>
    quantity > 0 ? true : alert(Message.productQuantityHaveToPlusInteger),
};
