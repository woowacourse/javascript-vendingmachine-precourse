import Message from '../constants/message.js';

export default {
  validateChargeExist: name => (name ? true : alert(Message.purchaseChargeInputIsRequired)),
  validateChargeCanDivide10: price =>
    price % 10 === 0 ? true : alert(Message.purchaseChargeHaveToDivide10),
  validateChargePlusInteger: price =>
    price > 0 ? true : alert(Message.purchaseChargeHaveToPlusInteger),

  validateSubtractPricePlus: subtractPrice =>
    subtractPrice > 0 ? true : alert(Message.purchaseChargePriceHaveToUnderCharge),
};
