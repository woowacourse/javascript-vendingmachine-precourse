import Coin from '../Coin/Coin.js';
import CoinInputCheck from './CoinInputCheck.js';

export default class VendingMachineManageTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.vendingMachineManageScreen = document.createElement('div');
    this.app.append(this.vendingMachineManageScreen);
    this.coin = new Coin();
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.coinCharging = document.createElement('div');
    this.coinTableDiv = document.createElement('div');
    this.vendingMachineManageScreen.append(
      this.coinCharging,
      this.coinTableDiv
    );
    this.makeCoinCharginTemplate();
    this.makeCoinTableTemplate();
  }

  makeCoinCharginTemplate() {
    this.makeCoinCharginElement();
    this.coinCharging.append(
      this.coinChargingTitle,
      this.coinChargingForm,
      this.amountParagraph
    );
    document.getElementById('vending-machine-charge-button').onclick =
      this.submitCoinInput.bind(this);
  }

  makeCoinCharginElement() {
    this.coinChargingTitle = document.createElement('h2');
    this.coinChargingTitle.innerText = '자판기 동전 충전하기';
    this.coinChargingForm = document.createElement('form');
    this.coinChargingForm.innerHTML =
      '<input type="text" placeholder="자판기가 보유할 금액" id="vending-machine-charge-input" /><button type="submit" id="vending-machine-charge-button">충전하기</button>';
    this.amountParagraph = document.createElement('p');
    this.amountParagraph.id = 'vending-machine-charge-amount';
    this.amountParagraph.textContent = '보유금액: ';
  }

  makeCoinTableTemplate() {
    this.coinTableTitle = document.createElement('h2');
    this.coinTableTitle.innerText = '자판기가 보유한 동전';
    this.coinTable = document.createElement('table');
    this.coinTableDiv.append(this.coinTableTitle, this.coinTable);
    this.makeCoinTableElement();
  }

  makeCoinTableElement() {
    this.coinTableHead = document.createElement('thead');
    this.coinTableHead.innerHTML = '<tr><th>동전</th><th>개수</th></tr>';
    this.coinTableBody = document.createElement('tbody');
    this.coinTable.append(this.coinTableHead, this.coinTableBody);
    this.makeCoinTableBody();
  }

  makeCoinTableBody() {
    this.coinTableBody.innerHTML = '';
    this.coin.getCoinList().forEach((coinValue) => {
      const coinClass = document.createElement('tr');
      coinClass.innerHTML = `<td>${coinValue}원</td><td id="vending-machine-coin-${coinValue}-quantity"></td>`;
      this.coinTableBody.append(coinClass);
    });
  }

  submitCoinInput(e) {
    e.preventDefault();
    const inputCoin = document.getElementById(
      'vending-machine-charge-input'
    ).value;
    if (CoinInputCheck(inputCoin)) {
      this.coinInsert(Number(inputCoin));
      this.insertCoinTableData();
    }
  }

  coinInsert(inputCoin) {
    const totalCost = this.coin.additionalInputCoin(inputCoin);
    this.amountParagraph.textContent = `보유금액: ${totalCost}`;
  }

  insertCoinTableData() {
    const currentCoin = this.coin.getCoin();
    this.coin.getCoinList().forEach((coinValue) => {
      document.getElementById(
        `vending-machine-coin-${coinValue}-quantity`
      ).innerHTML = `${currentCoin[coinValue]}개`;
    });
  }

  update() {
    this.coinInsert(0);
    this.insertCoinTableData();
  }

  updateScreen() {
    this.update();
    return this.vendingMachineManageScreen;
  }
}
