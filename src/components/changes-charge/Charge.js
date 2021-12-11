import { ELEMENT_ID } from '../../constants/index.js';
import { chargeAmountValidator } from '../../utils/inputValidator.js';
import { handleError } from '../../utils/errorHandler.js';
import { $tag } from '../../utils/index.js';
import { parseNumber } from '../../utils/inputParser.js';
import Button from '../base/Button.js';
import Component from '../base/Component.js';
import Input from '../base/Input.js';
import Label from '../base/Label.js';

const inputProp = {
  id: ELEMENT_ID.CHANGES_CHARGE_CHARGE_INPUT,
  placeholder: '자판기가 보유할 금액',
  type: 'number',
};

const submitProp = {
  id: ELEMENT_ID.CHANGES_CHARGE_CHARGE_BUTTON,
};

class Charge extends Component {
  $title;

  $input;

  $submit;

  onSubmit;

  constructor() {
    super($tag('div'));

    this.$title = new Label('h3', '자판기 동전 추가하기');
    this.$input = new Input(inputProp);
    this.$submit = new Button('충전하기', submitProp);
    this.setEvent();
    this.children = [this.$title, this.$input, this.$submit];
  }

  resetInputs() {
    this.$input.resetValue();
  }

  setEvent() {
    this.$submit.setOnClick(() => {
      const inputAmount = this.$input.value;

      const result = chargeAmountValidator.run(inputAmount);
      if (!result.isSuccess) {
        handleError(result.rejectType);
        return;
      }

      this.onSubmit?.({ amount: parseNumber(inputAmount) });
    });
  }
}

export default Charge;
