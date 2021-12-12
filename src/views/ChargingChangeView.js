import { COIN_LIST } from '../constants.js';
import { on, qs } from '../utils/index.js';
import View from './View.js';

export default class ChargingChangeView extends View {
  constructor(element = qs('#vending-machine-manage-view')) {
    super(element);
    this.template = new Template();

    this.initializeElements();
  }

  initializeElements() {
    this.element.innerHTML = this.template.getInitialElements();
  }

  show(data) {
    this.initializeElements();
    this.element.innerHTML += this.template.getCoinList(data);

    this.vendingMachineChargeInput = qs('#vending-machine-charge-input');
    this.vendingMachineChargeButton = qs('#vending-machine-charge-button');

    this.bindEvents();
  }

  bindEvents() {
    on(this.vendingMachineChargeButton, 'click', () => {
      let inputChanges = this.vendingMachineChargeInput.value;
      let changes = {
        total: inputChanges,
        coins: {
          500: 0,
          100: 0,
          50: 0,
          10: 0,
        },
      };
      while (inputChanges !== 0) {
        const randomCoin = MissionUtils.Random.pickNumberInList(
          Object.values(COIN_LIST),
        );
        if (inputChanges - randomCoin >= 0) {
          changes.coins[String(randomCoin)] += 1;
          inputChanges -= randomCoin;
        }
      }
      this.emit('@chargeChanges', { changes });
    });
  }
}

class Template {
  getInitialElements() {
    return `<h3>자판기 동전 충전하기</h3>
      <div>
        <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" />
        <button id="vending-machine-charge-button">충전하기</button>
      </div>
      <br />
    `;
  }

  getCoinList(data) {
    return `<span>보유 금액: ${
      data.total === undefined ? '' : data.total
    }</span>
      <h3>자판기가 보유한 동전</h3>
      <table>
        <thead id="vending-machine-charge-amount">
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>500</td>
            <td id="vending-machine-coin-500-quantity">${data.coins['500']}</td>
          </tr>
          <tr>
            <td>100</td>
            <td id="vending-machine-coin-100-quantity">${data.coins['100']}</td>
          </tr>
          <tr>
            <td>50</td>
            <td id="vending-machine-coin-50-quantity">${data.coins['50']}</td>
          </tr>
          <tr>
            <td>10</td>
            <td id="vending-machine-coin-10-quantity">${data.coins['10']}</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
