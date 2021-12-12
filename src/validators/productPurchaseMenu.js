import Message from '../constants/message.js';

export default {
  validateChargeExist: charge => (charge ? true : alert(Message.purchaseChargeInputIsRequired)),
  validateChargeCanDivide10: charge =>
    charge % 10 === 0 ? true : alert(Message.purchaseChargeHaveToDivide10),
  validateChargePlusInteger: charge =>
    charge > 0 ? true : alert(Message.purchaseChargeHaveToPlusInteger),

  validateSubtractPricePlus: subtractPrice =>
    subtractPrice > 0 ? true : alert(Message.purchaseChargePriceHaveToUnderCharge),

  validatePossibleReturn: charge => (charge ? true : alert(Message.returnMustHaveCharge)),
};
