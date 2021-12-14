import Coin from '../Model/Coin.js';

export default class VendingMachineManageTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.vendingMachineManageScreen = document.createElement('div');
    this.vendingMachineManageScreen.id = 'vending-machine-manage-screen';
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
    const coinChargingTitle = document.createElement('h2');
    coinChargingTitle.innerText = '자판기 동전 충전하기';
    const coinChargingForm = document.createElement('form');
    coinChargingForm.innerHTML =
      '<input type="text" placeholder="자판기가 보유할 금액" id="vending-machine-charge-input" /><button type="submit" id="vending-machine-charge-button">충전하기</button>';
    const amountParagraph = document.createElement('p');
    amountParagraph.innerHTML =
      '보유금액: <span id="vending-machine-charge-amount" />';
    this.coinCharging.append(
      coinChargingTitle,
      coinChargingForm,
      amountParagraph
    );
  }

  makeCoinTableTemplate() {
    const coinTableTitle = document.createElement('h2');
    coinTableTitle.innerText = '자판기가 보유한 동전';
    this.coinTable = document.createElement('table');
    this.coinTableDiv.append(coinTableTitle, this.coinTable);
    this.makeCoinTableElement();
  }

  makeCoinTableElement() {
    const coinTableHead = document.createElement('thead');
    coinTableHead.innerHTML = '<tr><th>동전</th><th>개수</th></tr>';
    this.coinTableBody = document.createElement('tbody');
    this.coinTable.append(coinTableHead, this.coinTableBody);
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
}
