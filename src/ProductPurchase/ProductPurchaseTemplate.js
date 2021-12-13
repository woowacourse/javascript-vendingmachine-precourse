import Coin from '../Coin/Coin.js';
import CoinInputCheck from '../VendingMachineManage/CoinInputCheck.js';
import Product from '../Product/Product.js';

export default class ProductPurcahseTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.productPurchaseScreen = document.createElement('div');
    this.app.append(this.productPurchaseScreen);
    this.product = new Product();
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.spendMoney = document.createElement('div');
    this.productStatusDiv = document.createElement('div');
    this.smallChange = document.createElement('div');
    this.productPurchaseScreen.append(
      this.spendMoney,
      this.productStatusDiv,
      this.smallChange
    );
    this.makeSpendMoneyTemplate();
    this.makeProductStatusTemplate();
    this.connectEvent();
  }

  connectEvent() {
    document.getElementById('charge-button').onclick =
      this.submitChargeInput.bind(this);
    const purchaseButton = document.getElementsByClassName('purchase-button');
    if (purchaseButton != null) {
      this.connectPurchaseEvent(purchaseButton);
    }
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

  purchaseProduct(e, index) {
    this.product.purchaseProduct(index);
    this.update();
  }

  update() {
    this.chargeInsert(0);
    this.makeProductStatusTable();
    this.connectEvent();
  }

  template() {
    return this.productPurchaseScreen;
  }

  updateScreen() {
    this.update();
    return this.productPurchaseScreen;
  }
}
