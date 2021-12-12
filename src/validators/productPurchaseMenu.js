import Message from '../constants/message.js';

export default {
  // 보유할 금액 관련 검증 함수
  validateChargeExist: charge => (charge ? true : alert(Message.purchaseChargeInputIsRequired)),
  validateChargeCanDivide10: charge =>
    charge % 10 === 0 ? true : alert(Message.purchaseChargeHaveToDivide10),
  validateChargePlusInteger: charge =>
    charge > 0 ? true : alert(Message.purchaseChargeHaveToPlusInteger),

  // 투입한 금액에서 상품 가격을 뺀 금액 검증 함수
  validateSubtractPricePlus: subtractPrice =>
    subtractPrice > 0 ? true : alert(Message.purchaseChargePriceHaveToUnderCharge),

  // 반환 관련 검증 함수
  validatePossibleReturn: charge => (charge ? true : alert(Message.returnMustHaveCharge)),
};
