import {ID, STORAGE_KEY, TABLE_MENU} from '../../utils/constants.js';
import {createInputElement, createTable} from '../../utils/domUtil.js';
import {getLocalStorage, setLocalStorage} from '../../utils/localStorage.js';
import {isValidChargeInput} from '../../utils/validation.js';
import Component from '../core/Component.js';

export default class ChargeContainer extends Component {
  init() {
    this.$state = {
      coins: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_COIN, {}),
      amount: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_AMOUNT, 0)
    };
  }

  mounted() {
    this.$state = {
      coins: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_COIN, {}),
      amount: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_AMOUNT, 0)
    };
    this.$target.querySelector(`#vending-machine-table-container`).innerHTML = this.printChargeTable();
    if (this.$state.amount) {
      this.printCoinQuantity(this.$state.coins);
    }
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

  setEvent() {
    this.addEvent('submit', `#vending-machine-charge-form`, (event) => {
      event.preventDefault();
      event.stopPropagation();

      const amountValue = Number.parseInt(this.$target.querySelector(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`).value, 10);

      if (isValidChargeInput(amountValue)) {
        this.charge(amountValue);
        setLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_COIN, this.$state.coins);
        setLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_AMOUNT, amountValue);

        this.setState({coins: this.$state.coins, amount: this.$state.amount + amountValue});
        this.setEvent();
      }
    });
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

  printCoinQuantity(coins) {
    this.$target.querySelector(`#${ID.VENDING_MACHINE_COIN_500_QUANTITY}`).innerText = `${
      coins['500'] ? coins['500'] : '0'
    }개`;
    this.$target.querySelector(`#${ID.VENDING_MACHINE_COIN_100_QUANTITY}`).innerText = `${
      coins['100'] ? coins['100'] : '0'
    }개`;
    this.$target.querySelector(`#${ID.VENDING_MACHINE_COIN_50_QUANTITY}`).innerText = `${
      coins['50'] ? coins['50'] : '0'
    }개`;
    this.$target.querySelector(`#${ID.VENDING_MACHINE_COIN_10_QUANTITY}`).innerText = `${
      coins['10'] ? coins['10'] : '0'
    }개`;
  }

  charge(amount) {
    while (amount > 0) {
      // eslint-disable-next-line no-undef
      const pickedCoin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);
      const restCharge = amount - pickedCoin;
      if (restCharge >= 0) {
        if (this.$state.coins[pickedCoin]) {
          this.$state.coins[pickedCoin] = this.$state.coins[pickedCoin] + 1;
        } else {
          this.$state.coins[pickedCoin] = 1;
        }
        amount = restCharge;
      }
    }
  }
}
