import { ID } from '../../constants/index.js';
import { $ } from '../../utils/selector.js';
import { purchaseInputTemplate } from '../../utils/template/purchaseTemplate.js';
import { isValidChargeInput } from '../../utils/valid.js';

class PurchaseInput {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = purchaseInputTemplate();
  }

  selectDom() {
    this.$chargeInput = $(`#${ID.CHARGE_INPUT}`);
    this.$chargeButton = $(`#${ID.CHARGE_BUTTON}`);
  }

  addEvent() {
    this.$chargeButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    const amount = Number(this.$chargeInput.value);
    if (!isValidChargeInput(amount)) {
      return;
    }
  }
}

export default PurchaseInput;
