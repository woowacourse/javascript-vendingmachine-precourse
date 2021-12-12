import { addChargedCoinOfConsumer } from '../../../library/storage/consumerCoin.js';
import ChargeForm from '../../chargeForm/index.js';
import { DICT_PROPS_INPUT, DICT_PROPS_BUTTON, ID_FORM } from './const.js';

class ConsumerChargeForm extends ChargeForm {
  constructor() {
    super(ID_FORM);

    this.initInput(DICT_PROPS_INPUT);
    this.initButton(DICT_PROPS_BUTTON);
  }

  onButtonClick() {
    const input = this.input.value;
    console.log(input);
    addChargedCoinOfConsumer(Number(input));
  }
}

export default ConsumerChargeForm;
