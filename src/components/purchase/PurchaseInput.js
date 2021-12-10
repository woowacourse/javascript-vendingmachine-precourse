import { $ } from '../../utils/selector.js';
import { ID, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';
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

    this.updateLocalStorage(amount);
  }

  updateLocalStorage(amount) {
    const purchase = getLocalStorage(LOCAL_DB.PURCHASE);
    saveLocalStorage(LOCAL_DB.PURCHASE, Number(purchase + amount));
  }
}

export default PurchaseInput;
