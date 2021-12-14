import Coin from '../Coin/Coin.js';
import CoinInputCheck from '../VendingMachineManage/CoinInputCheck.js';
import Product from '../Product/Product.js';

export default class ProductPurcahseTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.productPurchaseScreen = document.createElement('div');
    this.app.append(this.productPurchaseScreen);
    this.product = new Product();
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
    this.connectEvent();
  }

  connectEvent() {
    document.getElementById('charge-button').onclick =
      this.submitChargeInput.bind(this);
    const purchaseButton = document.getElementsByClassName('purchase-button');
    if (purchaseButton != null) {
      this.connectPurchaseEvent(purchaseButton);
    }
    document.getElementById('coin-return-button').onclick =
      this.coinReturn.bind(this);
  }

  connectPurchaseEvent(purchaseButton) {
    for (let i = 0; i < purchaseButton.length; i += 1) {
      purchaseButton[i].addEventListener('click', (e) =>
        this.purchaseProduct(e, i)
      );
    }
  }

  makeSpendMoneyTemplate() {
    this.spendMoneyTitle = document.createElement('h2');
    this.spendMoneyTitle.innerText = '금액 투입';
    this.spendMoneyForm = document.createElement('form');
    this.spendMoneyForm.innerHTML =
      '<input type="text" placeholder="투입할 금액" id="charge-input" /><button type="submit" id="charge-button">투입하기</button>';
    this.spendMoneyParagraph = document.createElement('p');
    this.spendMoneyParagraph.id = 'charge-amount';
    this.spendMoneyParagraph.textContent = '투입한 금액: ';
    this.spendMoney.append(
      this.spendMoneyTitle,
      this.spendMoneyForm,
      this.spendMoneyParagraph
    );
  }

  submitChargeInput(e) {
    e.preventDefault();
    const inputCharge = document.getElementById('charge-input').value;
    if (CoinInputCheck(inputCharge)) {
      this.chargeInsert(Number(inputCharge));
    }
  }

  chargeInsert(inputCharge) {
    const totalChageCost = this.product.additionalInputCharge(inputCharge);
    this.spendMoneyParagraph.textContent = `투입한 금액: ${totalChageCost}`;
  }

  makeProductStatusTemplate() {
    this.productStatusTitle = document.createElement('h2');
    this.productStatusTitle.innerText = '구매할 수 있는 상품 현황';
    this.productStatusTable = document.createElement('table');
    this.productStatusDiv.append(
      this.productStatusTitle,
      this.productStatusTable
    );
    this.makeProductStatusTableElement();
    this.makeProductStatusTable();
  }

  makeProductStatusTableElement() {
    this.productStatusTableHead = document.createElement('thead');
    this.productStatusTableHead.innerHTML =
      '<tr><th>상품명</th><th>가격</th><th>수량</th><th>구매</th></tr>';
    this.productStatusTableBody = document.createElement('tbody');
    this.productStatusTable.append(
      this.productStatusTableHead,
      this.productStatusTableBody
    );
  }

  makeProductStatusTable() {
    this.productStatusTableBody.innerHTML = '';
    const productStatus = this.product.getProduct();
    productStatus.forEach((product) => {
      const productClass = document.createElement('tr');
      productClass.className = 'product-purchase-item';
      productClass.innerHTML = `<td class="product-purchase-name">${product.name}</td><td class="product-purchase-price">${product.price}</td><td class="product-purchase-quantity">${product.quantity}</td><td><button type="button" class="purchase-button">구입하기</button></td>`;
      this.productStatusTableBody.append(productClass);
    });
  }

  makeCoinReturnTemplate() {
    this.coinReturnTitle = document.createElement('h2');
    this.coinReturnTitle.innerText = '잔돈';
    this.coinReturnButton = document.createElement('button');
    this.coinReturnButton.id = 'coin-return-button';
    this.coinReturnButton.innerText = '반환하기';
    this.coinReturnTable = document.createElement('table');
    this.coinReturnDiv.append(
      this.coinReturnTitle,
      this.coinReturnButton,
      this.coinReturnTable
    );
    this.makeCoinReturnTableElement();
  }

  makeCoinReturnTableElement() {
    this.coinReturnTableHead = document.createElement('thead');
    this.coinReturnTableHead.innerHTML = '<tr><th>동전</th><th>개수</th></tr>';
    this.coinReturnTableBody = document.createElement('tbody');
    this.coinReturnTable.append(
      this.coinReturnTableHead,
      this.coinReturnTableBody
    );
    this.makeCoinReturnTableBody();
  }

  makeCoinReturnTableBody() {
    this.coinReturnTableBody.innerHTML = '';
    const coin500Class = document.createElement('tr');
    coin500Class.innerHTML = '<td>500원</td><td id="coin-500-quantity"></td>';
    const coin100Class = document.createElement('tr');
    coin100Class.innerHTML = '<td>100원</td><td id="coin-100-quantity"></td>';
    const coin50Class = document.createElement('tr');
    coin50Class.innerHTML = '<td>50원</td><td id="coin-50-quantity"></td>';
    const coin10Class = document.createElement('tr');
    coin10Class.innerHTML = '<td>10원</td><td id="coin-10-quantity"></td>';
    this.coinReturnTableBody.append(
      coin500Class,
      coin100Class,
      coin50Class,
      coin10Class
    );
  }

  purchaseProduct(e, index) {
    this.product.purchaseProduct(index);
    this.update();
  }

  coinReturn(e) {
    e.preventDefault();
    const chargeCost = this.product.getChargeCost();
    const returnCoinList = this.coin.returnCoin(chargeCost);
    this.coin.getCoinList().forEach((coinValue) => {
      document.getElementById(
        `coin-${coinValue}-quantity`
      ).innerHTML = `${returnCoinList[coinValue]}개`;
    });
    this.product.setChargeCost(returnCoinList['charge']);
    this.chargeInsert(0);
  }

  update() {
    this.chargeInsert(0);
    this.makeProductStatusTable();
    this.connectEvent();
  }

  updateScreen() {
    this.update();
    return this.productPurchaseScreen;
  }
}