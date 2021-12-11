import Message from '../constants/message.js';

export default {
  validateChargeInputExist: charge => (charge ? true : alert(Message.chargeInputIsRequired)),
};
