import Observer from '../../abstracts/observer.js';
import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';

class VendingMachineManageTableView extends Observer {
  static template = `
    <div class="component">
      <h2>자판기가 보유한 동전</h2>
      <div class="row">
        <table id="${ELEMENT_IDS.VENDING_MACHINE_MANAGE_TABLE}">
          <thead>
            <tr>
              <th>동전</th>
              <th>개수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td id="${ELEMENT_IDS.VENDING_MACHINE_COIN_500_QUANTITY}"></td>
            </tr>
            <tr>
              <td>100원</td>
              <td id="${ELEMENT_IDS.VENDING_MACHINE_COIN_100_QUANTITY}"></td>
            </tr>
            <tr>
              <td>50원</td>
              <td id="${ELEMENT_IDS.VENDING_MACHINE_COIN_50_QUANTITY}"></td>
            </tr>
            <tr>
              <td>10원</td>
              <td id="${ELEMENT_IDS.VENDING_MACHINE_COIN_10_QUANTITY}"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  constructor($container) {
    super(ELEMENT_IDS.PRODUCT_ADD_TABLE);
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(VendingMachineManageTableView.template);
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
    const {
      VENDING_MACHINE_COIN_500_QUANTITY,
      VENDING_MACHINE_COIN_100_QUANTITY,
      VENDING_MACHINE_COIN_50_QUANTITY,
      VENDING_MACHINE_COIN_10_QUANTITY,
    } = ELEMENT_IDS;
    this.$c500 = document.querySelector(`#${VENDING_MACHINE_COIN_500_QUANTITY}`);
    this.$c100 = document.querySelector(`#${VENDING_MACHINE_COIN_100_QUANTITY}`);
    this.$c50 = document.querySelector(`#${VENDING_MACHINE_COIN_50_QUANTITY}`);
    this.$c10 = document.querySelector(`#${VENDING_MACHINE_COIN_10_QUANTITY}`);
  }

  render() {
    this.renderCoins();
  }

  renderCoins() {
    const { assetCoins } = this.model;
    this.$c500.innerHTML = `${assetCoins[500]}개`;
    this.$c100.innerHTML = `${assetCoins[100]}개`;
    this.$c50.innerHTML = `${assetCoins[50]}개`;
    this.$c10.innerHTML = `${assetCoins[10]}개`;
  }

  notify() {
    if (this.$view === null) {
      return;
    }
    this.renderCoins();
  }
}

export default VendingMachineManageTableView;
