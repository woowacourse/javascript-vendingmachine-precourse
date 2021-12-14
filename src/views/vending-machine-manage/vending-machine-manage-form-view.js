import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement, coinToMoney } from '../../utils.js';
import Observer from '../../abstracts/observer.js';

class VendingMachineManageFormView extends Observer {
  static template = `
    <div class="component">
      <h2>자판기 동전 충전하기</h2>
      <div class="row">
        <form id="${ELEMENT_IDS.VENDING_MACHINE_MANAGE_FORM}">
          <input type="number" placeholder="자판기가 보유할 금액" id="${ELEMENT_IDS.VENDING_MACHINE_CHARGE_INPUT}">
          <button type="button" id="${ELEMENT_IDS.VENDING_MACHINE_CHARGE_BUTTON}">추가하기</button>
        </form>
        <div>
          보유 금액:<span id="${ELEMENT_IDS.VENDING_MACHINE_CHARGE_AMOUNT}"></span>원
        </div>
      </div>
    </div>
  `;

  constructor($container) {
    super(ELEMENT_IDS.VENDING_MACHINE_MANAGE_FORM);
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(VendingMachineManageFormView.template);
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
    const { VENDING_MACHINE_CHARGE_INPUT, VENDING_MACHINE_CHARGE_BUTTON, VENDING_MACHINE_CHARGE_AMOUNT } =
      ELEMENT_IDS;
    this.$chargeInput = document.querySelector(`#${VENDING_MACHINE_CHARGE_INPUT}`);
    this.$chargeButton = document.querySelector(`#${VENDING_MACHINE_CHARGE_BUTTON}`);
    this.$chargeAmount = document.querySelector(`#${VENDING_MACHINE_CHARGE_AMOUNT}`);
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
