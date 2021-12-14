import Observer from '../../abstracts/observer.js';
import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';

class ProductPurchaseChargeView extends Observer {
  // eslint-disable-next-line max-lines-per-function
  static template = () => {
    const {
      CHARGE_TABLE,
      COIN_RETURN_BUTTON,
      COIN_500_QUANTITY,
      COIN_100_QUANTITY,
      COIN_50_QUANTITY,
      COIN_10_QUANTITY,
    } = ELEMENT_IDS.PRODUCT_PURCHASE;
    return `
      <div class="component">
        <h2>잔돈</h2>
        <div class="row">
          <button type="button" id="${COIN_RETURN_BUTTON}">반환하기</button>
          <table id="${CHARGE_TABLE}">
            <thead>
              <tr><th>동전</th><th>개수</th></tr>
            </thead>
            <tbody>
              <tr><td>500원</td><td id="${COIN_500_QUANTITY}"></td></tr>
              <tr><td>100원</td><td id="${COIN_100_QUANTITY}"></td></tr>
              <tr><td>50원</td><td id="${COIN_50_QUANTITY}"></td></tr>
              <tr><td>10원</td><td id="${COIN_10_QUANTITY}"></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  };

  constructor($container) {
    super(ELEMENT_IDS.VENDING_MACHINE_MANAGE.TABLE);
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(ProductPurchaseChargeView.template());
    this.$container.appendChild(this.$view);
    this.bindingElements();
    this.registerObserver();
    this.render();
    return this;
  }

  unmount() {
    this.$c500 = null;
    this.$c100 = null;
    this.$c50 = null;
    this.$c10 = null;
    this.unregisterObserver();
    this.$container.removeChild(this.$view);
    this.$view = null;
  }

  bindingElements() {
    const { COIN_RETURN_BUTTON, COIN_500_QUANTITY, COIN_100_QUANTITY, COIN_50_QUANTITY, COIN_10_QUANTITY } =
      ELEMENT_IDS.PRODUCT_PURCHASE;
    this.$coinReturnButton = document.querySelector(`#${COIN_RETURN_BUTTON}`);
    this.$c500 = document.querySelector(`#${COIN_500_QUANTITY}`);
    this.$c100 = document.querySelector(`#${COIN_100_QUANTITY}`);
    this.$c50 = document.querySelector(`#${COIN_50_QUANTITY}`);
    this.$c10 = document.querySelector(`#${COIN_10_QUANTITY}`);
  }

  render() {
    this.renderCharges();
  }

  // eslint-disable-next-line max-lines-per-function
  renderCharges() {
    const { chargeCoins } = this.model;
    this.$c500.innerHTML = `${chargeCoins[500]}개`;
    this.$c100.innerHTML = `${chargeCoins[100]}개`;
    this.$c50.innerHTML = `${chargeCoins[50]}개`;
    this.$c10.innerHTML = `${chargeCoins[10]}개`;
  }

  notify() {
    if (this.$view === null) {
      return;
    }
    this.renderCharges();
  }
}

export default ProductPurchaseChargeView;
