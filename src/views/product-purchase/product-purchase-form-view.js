import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';
import Observer from '../../abstracts/observer.js';

class ProductPurchaseFormView extends Observer {
  static template = () => {
    const { FORM, CHARGE_INPUT, CHARGE_BUTTON, CHARGE_AMOUNT } = ELEMENT_IDS.PRODUCT_PURCHASE;
    return `
      <div class="component">
        <h2>금액 투입</h2>
        <div class="row">
          <form id="${FORM}">
            <input type="number" placeholder="투입할 금액" id="${CHARGE_INPUT}">
            <button type="button" id="${CHARGE_BUTTON}">투입하기</button>
          </form>
          <div>
            투입한 금액:<span id="${CHARGE_AMOUNT}"></span>원
          </div>
        </div>
      </div>
    `;
  };

  constructor($container) {
    super(ELEMENT_IDS.PRODUCT_PURCHASE.FORM);
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(ProductPurchaseFormView.template());
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
    const { CHARGE_INPUT, CHARGE_BUTTON, CHARGE_AMOUNT } = ELEMENT_IDS.PRODUCT_PURCHASE;
    this.$chargeInput = document.querySelector(`#${CHARGE_INPUT}`);
    this.$chargeButton = document.querySelector(`#${CHARGE_BUTTON}`);
    this.$chargeAmount = document.querySelector(`#${CHARGE_AMOUNT}`);
  }

  render() {
    this.renderCharge();
  }

  renderCharge() {
    const { chargeMoney } = this.model;
    this.$chargeAmount.innerHTML = chargeMoney;
  }

  notify() {
    if (this.$view === null) {
      return;
    }
    this.renderCharge();
  }
}

export default ProductPurchaseFormView;
