import { addChargedCoinOfConsumer } from '../../../library/storage/consumerCoin.js';
import isValidCoinToCharge from '../../../machine/utils/charge/isValidCoinToCharge.js';
import { ERROR_INVALID_CHARGE_COIN } from '../../chargeForm/const.js';
import ChargeForm from '../../chargeForm/index.js';
import { DICT_PROPS_INPUT, DICT_PROPS_BUTTON, ID_FORM } from './const.js';

class ConsumerChargeForm extends ChargeForm {
  constructor() {
    super(ID_FORM);

    this.initInput(DICT_PROPS_INPUT);
    this.initButton(DICT_PROPS_BUTTON);
  }

  onButtonClick() {
    const coin = Number(this.input.value);

    if (!isValidCoinToCharge(coin)) {
      alert(ERROR_INVALID_CHARGE_COIN);
      return;
    }
    addChargedCoinOfConsumer(coin);
  }
}

export default ConsumerChargeForm;
