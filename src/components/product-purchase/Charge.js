import { ELEMENT_ID } from '../../constants/index.js';
import { $tag } from '../../utils/index.js';
import { parseNumber } from '../../utils/inputParser.js';
import Button from '../base/Button.js';
import Component from '../base/Component.js';
import Input from '../base/Input.js';
import Label from '../base/Label.js';

const inputProp = {
  id: ELEMENT_ID.PRODUCT_PURCHASE_CHARGE_INPUT,
  placeholder: '투입할 금액',
  type: 'number',
};

const submitProp = {
  id: ELEMENT_ID.PRODUCT_PURCHASE_CHARGE_BUTTON,
};

class Charge extends Component {
  $title;

  $input;

  $submit;

  onSubmit;

  constructor() {
    super($tag('div'));

    this.$title = new Label('h3', '금액 투입');
    this.$input = new Input(inputProp);
    this.$submit = new Button('투입하기', submitProp);
    this.setEvent();
    this.children = [this.$title, this.$input, this.$submit];
  }

  resetInputs() {
    this.$input.resetValue();
  }

  setEvent() {
    this.$submit.setOnClick(() => {
      this.onSubmit?.({ amount: parseNumber(this.$input.value) });
    });
  }
}

export default Charge;
