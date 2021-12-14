import $ from '../util/domSelector.js';
import { HEADER, CHANGE_CHARGE } from '../constants/selector.js';
import { COIN, NUMBER } from '../constants/constants.js';
import InputChange from '../components/inputChange.js';
import VendingmachineCoin from '../components/vendingmachineCoin.js';
import coinGenerator from '../util/coinGenerator.js';
import { setLocalStorage, getLocalStorage } from '../store.js';

export default class ChangeCharge {
  constructor() {
    this.initialize();
  }

  initialize() {
    $(`#${HEADER.CONTENT_CONTAINER}`).innerHTML = '';
    this.render();
  }

  mounted() {
    new InputChange();
    new VendingmachineCoin();
  }

  getStore() {
    return (
      getLocalStorage('coins') || {
        [COIN.NUMBER.COIN_500]: NUMBER.ZERO,
        [COIN.NUMBER.COIN_100]: NUMBER.ZERO,
        [COIN.NUMBER.COIN_50]: NUMBER.ZERO,
        [COIN.NUMBER.COIN_10]: NUMBER.ZERO,
      }
    );
  }

  setStore(coinObject) {
    setLocalStorage('coins', coinObject);
    this.setCoin(coinObject);
  }

  setCoin(coinObject) {
    $(`#${CHANGE_CHARGE.ID.CHARGE_AMOUNT}`).innerHTML = this.getSumOfCoin(coinObject);
    $(`#${CHANGE_CHARGE.ID.COIN_500_QUANTITY}`).innerHTML = `${coinObject[COIN.NUMBER.COIN_500]}개`;
    $(`#${CHANGE_CHARGE.ID.COIN_100_QUANTITY}`).innerHTML = `${coinObject[COIN.NUMBER.COIN_100]}개`;
    $(`#${CHANGE_CHARGE.ID.COIN_50_QUANTITY}`).innerHTML = `${coinObject[COIN.NUMBER.COIN_50]}개`;
    $(`#${CHANGE_CHARGE.ID.COIN_10_QUANTITY}`).innerHTML = `${coinObject[COIN.NUMBER.COIN_10]}개`;
  }

  getSumOfCoin(coinObject) {
    let sum = NUMBER.ZERO;
    Object.keys(coinObject).forEach(key => {
      sum += key * coinObject[key];
    });
    return sum;
  }

  setEvent() {
    $(`#${CHANGE_CHARGE.ID.CHARGE_BUTTON}`).addEventListener('click', () => {
      const chargeValue = $(`#${CHANGE_CHARGE.ID.CHARGE_INPUT}`).value;
      const coinObject = coinGenerator(this.getStore(), Number(chargeValue));

      this.setStore(coinObject);
    });
  }

  render() {
    this.mounted();
    this.setEvent();
  }
}
