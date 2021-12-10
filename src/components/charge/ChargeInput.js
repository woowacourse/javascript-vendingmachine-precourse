import { $ } from '../../utils/selector.js';
import { ID } from '../../constants/index.js';
import { getRandomCoinArray } from '../../utils/makeCoinArray.js';
import { chargeInputTemplate } from '../../utils/template/chargeTemplate.js';
import { isValidChargeInput } from '../../utils/valid.js';

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
    const amount = Number(this.$chargeInput.value);
    if (!isValidChargeInput(amount)) {
      return;
    }

    const coinArray = getRandomCoinArray(amount);
    console.log(coinArray);
  }
}

export default ChargeInput;
