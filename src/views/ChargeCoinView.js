import View from './View.js';
import { ELEMENT_ID, COINS, CHARGE, EVENT_TYPE, ELEMENT_SID } from '../utils/constants.js';
import { $ } from '../utils/dom.js';
import ChargeCoinModel from '../models/ChargeCoinModel.js';
const ChargeCoinView = { ...View };

ChargeCoinView.setup = function (element) {
  this.init(element);
  this.bindClick();
  return this;
};

ChargeCoinView.render = function () {
  this.element.innerHTML = this.template();
};

ChargeCoinView.template = function () {
  return `
    <h4>자판기 동전 충전하기</h4>
    <div>
      <input id=${ELEMENT_ID.CHARGE_INPUT} placeholder="자판기가 보유할 금액" type='number'/>
      <button id=${ELEMENT_ID.CHARGE_BUTTON}>충전하기</button>
    </div>
    <span id=${ELEMENT_ID.CHARGE_AMOUNT}>보유 금액:${ChargeCoinModel.total()}</span>
    <h4>자판기가 보유한 동전</h4>
    <table>
    <thead> 
      <tr>
        <th>${CHARGE.COIN}</th>
        <th>${CHARGE.COUNT}</th>
      <tr/>
    </thead>
    <tbody>
      ${COINS.map(
        (coin) =>
          `<tr>
          <td>${coin}${CHARGE.WON}</td>
          <td id=${ELEMENT_ID.COIN_QUANTITY(coin)}>${ChargeCoinModel.list()[coin]}</td>
        </tr>`,
      ).join('')}
    </tbody>
  </table>
  `;
};

ChargeCoinView.bindClick = function () {
  this.element.addEventListener('click', (e) => {
    if (e.target.id === ELEMENT_ID.CHARGE_BUTTON) {
      e.preventDefault();
      this.onClickChargeCoins();
    }
  });
};

ChargeCoinView.onClickChargeCoins = function () {
  this.emit(EVENT_TYPE.CHARGE_COIN, { money: $(ELEMENT_SID.CHARGE_INPUT).value });
};

export default ChargeCoinView;
