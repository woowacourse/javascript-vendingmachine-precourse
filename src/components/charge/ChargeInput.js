import { ID } from '../../constants/index.js';
import { $ } from '../../utils/selector.js';
import { chargeInputTemplate } from '../../utils/template/chargeTemplate.js';

class ChargeInput {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = chargeInputTemplate();
  }

  selectDom() {
    this.$chargeInput = $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`);
    this.$chargeButton = $(`#${ID.VENDING_MACHINE_CHARGE_BUTTON}`);
  }

  addEvent() {
    this.$chargeButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    console.log(this.$chargeInput.value);
  }
}

export default ChargeInput;
