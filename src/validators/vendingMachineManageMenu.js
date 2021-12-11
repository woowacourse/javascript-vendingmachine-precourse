import Message from '../constants/message.js';

export default {
  validateChargeInputExist: charge => (charge ? true : alert(Message.chargeInputIsRequired)),
  validateChargeInputDivideByTen: charge =>
    charge % 10 === 0 ? true : alert(Message.chargeInputHaveToDividedByTen),
  validateChargeInputOverZero: charge =>
    charge > 0 ? true : alert(Message.chargeInputHaveToPlusInteger),
};
