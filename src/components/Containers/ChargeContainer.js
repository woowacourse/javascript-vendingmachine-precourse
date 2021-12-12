import {ID, STORAGE_KEY, TABLE_MENU} from '../../utils/constants.js';
import {createInputElement, createTable} from '../../utils/domUtil.js';
import {getLocalStorage} from '../../utils/localStorage.js';
import {} from '../../utils/validation.js';
import Component from '../core/Component.js';

export default class ChargeContainer extends Component {
  init() {
    this.$state = {
      coins: getLocalStorage(STORAGE_KEY.CHARGE_COIN, {}),
      amount: getLocalStorage(STORAGE_KEY.CHARGE_AMOUNT, 0)
    };
  }

  mounted() {
    this.$state = {
      coins: getLocalStorage(STORAGE_KEY.CHARGE_COIN, {}),
      amount: getLocalStorage(STORAGE_KEY.CHARGE_AMOUNT, 0)
    };
  }

  template() {
    return `
    <div>
      <h2>자판기 동전 충전하기</h2>
      ${this.printChargeForm()}
    </div>
    <span>보유 금액: </span>
    <span id=${ID.VENDING_MACHINE_CHARGE_AMOUNT}>${this.$state.amount ? this.$state.amount : ''}</span>
    <div>
      <h2>자판기가 보유한 동전</h2>
      <div id="vending-machine-table-container"></div>
    </div>
    `;
  }

  printChargeForm() {
    return `
        <form id="vending-machine-charge-form">
          ${createInputElement('text', ID.VENDING_MACHINE_CHARGE_INPUT, '자판기가보유할금액')}
          <button id=${ID.VENDING_MACHINE_CHARGE_BUTTON}>충전하기</button>
        </form>
    `;
  }

  printChargeTable() {
    const ths = ['동전', '개수'];

    return createTable(TABLE_MENU.CHARGE, ths);
  }
}
