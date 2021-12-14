import { COIN_MENU } from '../../data/selector.js';

export default class CoinMenu {
  constructor() {
    this.$main = document.createElement('main');
    this.template = this.coinMenuTemplate();
    this.closeMenu();
  }

  closeMenu() {
    this.$main.style.display = 'none';
  }

  showMenu() {
    this.$main.style.display = 'block';
  }

  coinMenuTemplate() {
    this.$main.insertAdjacentHTML('beforeend', `${this.inputTemplate()}${this.coinTableTemplate()}`);
  }
  
  inputTemplate() {
    return `<h3>자판기 동전 충전하기</h3>
      <form>
        <input type="number" step="10" id="${COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_INPUT}" placeholder="자판기가 보유할 금액">
        <button id="${COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_BUTTON}">충전하기</button>
        <p>보유 금액:<span id="${COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_AMOUNT}"></sapn></p>
      </form>`;
  }

  coinTableTemplate() {
    return `<h3>자판기가 보유한 동전</h3>
      <table style="border-collapse: collapse;" width=200 border="1">
      <thead style="text-align: center;">
        <tr>
          <td>동전</td>
          <td>개수</td>
        </tr>
      </thead>
      <tbody style="text-align: center;">
        <tr>
          <td>500원</td>
          <td id="${COIN_MENU.TABLE_SELECTOR.COIN_500}"></td>
        </tr>
        <tr>
          <td>100원</td>
          <td id="${COIN_MENU.TABLE_SELECTOR.COIN_100}"></td>
        </tr>
        <tr>
          <td>50원</td>
          <td id="${COIN_MENU.TABLE_SELECTOR.COIN_50}"></td>
        </tr>
        <tr>
          <td>10원</td>
          <td id="${COIN_MENU.TABLE_SELECTOR.COIN_10}"></td>
        </tr>
      </tbody>
      </table>`;
  }
}
