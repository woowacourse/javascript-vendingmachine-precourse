import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement, coinToMoney } from '../../utils.js';
import Observer from '../../abstracts/observer.js';

class VendingMachineManageFormView extends Observer {
  static template = () => {
    const { FORM, CHARGE_INPUT, CHARGE_BUTTON, CHARGE_AMOUNT } = ELEMENT_IDS.VENDING_MACHINE_MANAGE;
    return `
      <div class="component">
        <h2>자판기 동전 충전하기</h2>
        <div class="row">
          <form id="${FORM}">
            <input type="number" placeholder="자판기가 보유할 금액" id="${CHARGE_INPUT}">
            <button type="button" id="${CHARGE_BUTTON}">추가하기</button>
          </form>
          <div>
            보유 금액:<span id="${CHARGE_AMOUNT}"></span>원
          </div>
        </div>
      </div>
    `;
  };

  constructor($container) {
    super(ELEMENT_IDS.VENDING_MACHINE_MANAGE.FORM);
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(VendingMachineManageFormView.template());
    this.$container.appendChild(this.$view);
    this.bindingElements();
    this.registerObserver();
    this.render();
    return this;
  }

  unmount() {
    this.mounted = false;
    this.$chargeInput = null;
    this.$chargeButton = null;
    this.$chargeAmount = null;
    this.unregisterObserver();
    this.$container.removeChild(this.$view);
    this.$view = null;
  }

  bindingElements() {
    const { CHARGE_INPUT, CHARGE_BUTTON, CHARGE_AMOUNT } = ELEMENT_IDS.VENDING_MACHINE_MANAGE;
    this.$chargeInput = document.querySelector(`#${CHARGE_INPUT}`);
    this.$chargeButton = document.querySelector(`#${CHARGE_BUTTON}`);
    this.$chargeAmount = document.querySelector(`#${CHARGE_AMOUNT}`);
  }

  render() {
    this.renderMoney();
  }

  renderMoney() {
    const { assetCoins } = this.model;
    this.$chargeAmount.innerHTML = coinToMoney(assetCoins);
  }

  notify() {
    if (this.$view === null) {
      return;
    }
    this.renderMoney();
  }
}

export default VendingMachineManageFormView;
