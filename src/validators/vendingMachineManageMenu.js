import MESSAGE from '../constants/message.js';

export default {
  // 자판기 보유할 금액 관련 검증 함수
  validateChargeInputExist: charge => (charge ? true : alert(MESSAGE.chargeInputIsRequired)),
  validateChargeInputDivideByTen: charge =>
    charge % 10 === 0 ? true : alert(MESSAGE.chargeInputHaveToDividedByTen),
  validateChargeInputOverZero: charge =>
    charge > 0 ? true : alert(MESSAGE.chargeInputHaveToPlusInteger),

  // 자판기 현재 보유 금액 관련 검증 함수
  validateChargeOverZero: charge =>
    charge > 0 ? true : alert(MESSAGE.returnMustHaveVendingMachineCoin),
};
