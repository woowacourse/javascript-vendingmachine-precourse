import { COIN_LIST, CUSTOM_EVENT_NAME, ID, INITIAL_COIN_LIST, SELECTOR } from '../constants.js';
import { on, qs } from '../utils/index.js';
import View from './View.js';

export default class ChargingChangeView extends View {
  constructor(element = qs(SELECTOR.VENDING_MACHINE_MANAGE_VIEW)) {
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

    this.vendingMachineChargeInput = qs(SELECTOR.COIN_CHARGE_INPUT);
    this.vendingMachineChargeButton = qs(SELECTOR.COIN_CHARGE_BUTTON);

    this.bindEvents();
    super.show();
  }

  bindEvents() {
    on(
      this.vendingMachineChargeButton,
      'click',
      () => this.handleVendingMachineChargeButton(),
    );
  }

  handleVendingMachineChargeButton() {
    const inputChanges = this.vendingMachineChargeInput.value;
    if (inputChanges < 0) {
      alert('올바른 액수를 입력해주세요.');
      return;
    }
    const changes = this.handleCalculationChanges(
      inputChanges,
      INITIAL_COIN_LIST,
    );
    this.emit(CUSTOM_EVENT_NAME.CHARGE_CHANGES, { changes });
  };

  handleCalculationChanges(inputChanges, changes) {
    while (inputChanges !== 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList(
        Object.values(COIN_LIST),
      );
      if (inputChanges - randomCoin >= 0) {
        changes[String(randomCoin)] += 1;
        inputChanges -= randomCoin;
      }
    }
    return changes;
  }
}

class Template {
  getInitialElements() {
    return `<h3>자판기 동전 충전하기</h3>
      <div>
        <input id="${ID.COIN_CHARGE_INPUT}" type="number" placeholder="자판기가 보유할 금액" />
        <button id="${ID.COIN_CHARGE_BUTTON}">충전하기</button>
      </div>
      <br />
    `;
  }

  getCoinList([data, total]) {
    return `<span>보유 금액: ${
      total === undefined ? '' : total
    }</span>
      <h3>자판기가 보유한 동전</h3>
      <table>
        <thead id="${ID.VENDING_MACHINE_CHARGE_AMOUNT}">
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>500</td>
            <td id="${ID.COIN_500}">${data[COIN_LIST.FIVE_HUNDRED]}개</td>
          </tr>
          <tr>
            <td>100</td>
            <td id="${ID.COIN_100}">${data[COIN_LIST.ONE_HUNDRED]}개</td>
          </tr>
          <tr>
            <td>50</td>
            <td id="${ID.COIN_50}">${data[COIN_LIST.FIFTY]}개</td>
          </tr>
          <tr>
            <td>10</td>
            <td id="${ID.COIN_10}">${data[COIN_LIST.TEN]}개</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
