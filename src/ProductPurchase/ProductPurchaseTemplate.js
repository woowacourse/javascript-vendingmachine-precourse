import Coin from '../Model/Coin.js';

export default class ProductPurcahseTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.productPurchaseScreen = document.createElement('div');
    this.productPurchaseScreen.id = 'product-purchase-screen';
    this.app.append(this.productPurchaseScreen);
    this.coin = new Coin();
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.spendMoney = document.createElement('div');
    this.productStatusDiv = document.createElement('div');
    this.coinReturnDiv = document.createElement('div');
    this.productPurchaseScreen.append(
      this.spendMoney,
      this.productStatusDiv,
      this.coinReturnDiv
    );
    this.makeSpendMoneyTemplate();
    this.makeProductStatusTemplate();
    this.makeCoinReturnTemplate();
  }

  makeSpendMoneyTemplate() {
    const spendMoneyTitle = document.createElement('h2');
    spendMoneyTitle.innerText = '금액 투입';
    const spendMoneyForm = document.createElement('form');
    spendMoneyForm.innerHTML =
      '<input type="text" placeholder="투입할 금액" id="charge-input" /><button type="submit" id="charge-button">투입하기</button>';
    const spendMoneyParagraph = document.createElement('p');
    spendMoneyParagraph.innerHTML = '투입한 금액: <span id="charge-amount" />';
    this.spendMoney.append(
      spendMoneyTitle,
      spendMoneyForm,
      spendMoneyParagraph
    );
  }

  makeProductStatusTemplate() {
    const productStatusTitle = document.createElement('h2');
    productStatusTitle.innerText = '구매할 수 있는 상품 현황';
    this.productStatusTable = document.createElement('table');
    this.productStatusDiv.append(productStatusTitle, this.productStatusTable);
    this.makeProductStatusTableElement();
  }

  makeProductStatusTableElement() {
    const productStatusTableHead = document.createElement('thead');
    productStatusTableHead.innerHTML =
      '<tr><th>상품명</th><th>가격</th><th>수량</th><th>구매</th></tr>';
    const productStatusTableBody = document.createElement('tbody');
    productStatusTableBody.id = 'product-status-table-body';
    this.productStatusTable.append(
      productStatusTableHead,
      productStatusTableBody
    );
  }

  makeCoinReturnTemplate() {
    const coinReturnTitle = document.createElement('h2');
    coinReturnTitle.innerText = '잔돈';
    const coinReturnButton = document.createElement('button');
    coinReturnButton.id = 'coin-return-button';
    coinReturnButton.innerText = '반환하기';
    this.coinReturnTable = document.createElement('table');
    this.coinReturnDiv.append(
      coinReturnTitle,
      coinReturnButton,
      this.coinReturnTable
    );
    this.makeCoinReturnTableElement();
  }

  makeCoinReturnTableElement() {
    const coinReturnTableHead = document.createElement('thead');
    coinReturnTableHead.innerHTML = '<tr><th>동전</th><th>개수</th></tr>';
    const coinReturnTableBody = document.createElement('tbody');
    coinReturnTableBody.id = 'coin-return-table-body';
    this.coinReturnTable.append(coinReturnTableHead, coinReturnTableBody);
    this.makeCoinReturnTableBody();
  }

  makeCoinReturnTableBody() {
    const coinReturnTableBody = document.getElementById(
      'coin-return-table-body'
    );
    coinReturnTableBody.innerHTML = '';
    this.coin.getCoinList().forEach((coinValue) => {
      const coinClass = document.createElement('tr');
      coinClass.innerHTML = `<td>${coinValue}원</td><td id="coin-${coinValue}-quantity"></td>`;
      coinReturnTableBody.append(coinClass);
    });
  }
}
