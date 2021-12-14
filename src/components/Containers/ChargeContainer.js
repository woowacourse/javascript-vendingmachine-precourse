import {
  COIN_ARRAY,
  ID,
  NUM_10,
  NUM_100,
  NUM_50,
  NUM_500,
  STORAGE_KEY,
  TABLE_HEADER,
  TABLE_MENU,
  ZERO
} from '../../utils/constants.js';
import {createInputElement, createTable} from '../../utils/domUtil.js';
import {getLocalStorage, setLocalStorage} from '../../utils/localStorage.js';
import {isValidChargeInput} from '../../utils/validation.js';
import Component from '../core/Component.js';

export default class ChargeContainer extends Component {
  init() {
    this.$state = {
      coins: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_COIN, {}),
      amount: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_AMOUNT, ZERO)
    };
  }

  mounted() {
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
      <div id=${ID.VENDING_MACHINE_TABLE_CONTAINER}></div>
    </div>
    `;
  }

  setEvent() {
    this.addEvent('submit', `#${ID.VENDING_MACHINE_CHARGE_FORM}`, (event) => {
      event.preventDefault();
      event.stopPropagation();

      const amountValue = Number.parseInt(this.$target.querySelector(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`).value, 10);

      if (isValidChargeInput(amountValue)) {
        this.charge(amountValue);
        this.setState({amount: this.$state.amount + amountValue});
        this.saveChargedResultInStroage();
      }
    });
  }

  printChargeForm() {
    return `
        <form id=${ID.VENDING_MACHINE_CHARGE_FORM}>
          ${createInputElement('text', ID.VENDING_MACHINE_CHARGE_INPUT, '자판기가 보유할 금액')}
          <button id=${ID.VENDING_MACHINE_CHARGE_BUTTON}>충전하기</button>
        </form>
    `;
  }

  printChargeTable() {
    return createTable(TABLE_MENU.VENDING_MACHINE_CHARGE, TABLE_HEADER.CHARGE);
  }

  printCoinQuantity(coins) {
    this.$target.querySelector(`#${ID.VENDING_MACHINE_COIN_500_QUANTITY}`).innerText = `${
      coins[NUM_500] ? coins[NUM_500] : ZERO
    }개`;
    this.$target.querySelector(`#${ID.VENDING_MACHINE_COIN_100_QUANTITY}`).innerText = `${
      coins[NUM_100] ? coins[NUM_100] : ZERO
    }개`;
    this.$target.querySelector(`#${ID.VENDING_MACHINE_COIN_50_QUANTITY}`).innerText = `${
      coins[NUM_50] ? coins[NUM_50] : ZERO
    }개`;
    this.$target.querySelector(`#${ID.VENDING_MACHINE_COIN_10_QUANTITY}`).innerText = `${
      coins[NUM_10] ? coins[NUM_10] : ZERO
    }개`;
  }

  charge(amount) {
    while (amount > ZERO) {
      // eslint-disable-next-line no-undef
      const pickedCoin = MissionUtils.Random.pickNumberInList(COIN_ARRAY);
      const restCharge = amount - pickedCoin;
      if (restCharge >= ZERO) {
        if (this.$state.coins[pickedCoin]) {
          this.$state.coins[pickedCoin] = this.$state.coins[pickedCoin] + 1;
        } else {
          this.$state.coins[pickedCoin] = 1;
        }
        amount = restCharge;
      }
    }
  }

  saveChargedResultInStroage() {
    setLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_COIN, this.$state.coins);
    setLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_AMOUNT, this.$state.amount);
  }
}
