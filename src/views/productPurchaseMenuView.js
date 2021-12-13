import { ID, CLASS } from '../constants/selector.js';
import {
  Container,
  SubTitle,
  Span,
  SpanWithId,
  ButtonWithId,
} from '../components/elements.js';
import {
  createAddMoneyForm,
  createProductPurchaseTable,
  createProductPurchaseRow,
  createCoinTable,
} from '../components/productPurchaseMenu.js';
import { vendingMachine } from '../components/vendingMachine.js';
import {
  alertChargeErrorMessage,
  isValidCharge,
} from '../components/validator.js';
import { PRODUCT_PURCHASE_TABLE } from '../constants/table.js';

export default function ProductPurchaseMenuView() {
  this.productPurchaseMenu = () => {
    const container = Container('product-purchase-view');
    const addMoneySubTitle = SubTitle('금액 투입');
    const productSubTitle = SubTitle('구매할 수 있는 상품 현황');
    const changeSubTitle = SubTitle('잔돈');
    const addMoneyForm = createAddMoneyForm(this.onClickAddMoneyButton);
    const insertSpan = Span('투입한 금액: ');
    const moneySpan = SpanWithId('', ID.CHARGE_AMOUNT);
    const productPurchaseTable = createProductPurchaseTable();
    const coinTable = createCoinTable();
    const returnButton = ButtonWithId(
      '반환하기',
      ID.COIN_RETURN_BUTTON,
      this.onClickReturnCoinButton
    );

    container.append(
      addMoneySubTitle,
      addMoneyForm,
      insertSpan,
      moneySpan,
      productSubTitle,
      productPurchaseTable,
      changeSubTitle,
      returnButton,
      coinTable
    );

    return container;
  };

  this.onClickAddMoneyButton = (e) => {
    e.preventDefault();
    const addMoneyInput = document.querySelector(`#${ID.CHARGE_INPUT}`);

    if (!isValidCharge(addMoneyInput.value)) {
      alertChargeErrorMessage(addMoneyInput.value);
      return;
    }

    vendingMachine.addInsertMoney(parseInt(addMoneyInput.value));
    this.renderInsertMoney();
  };

  this.renderProductQuantity = (name, quantityData) => {
    const product = vendingMachine.products.find(
      (product) => product.name === name
    );

    quantityData.innerHTML = product.quantity;
    quantityData.dataset.productQuantity = product.quantity;
  };

  this.onClickPurchaseProductButton = (e) => {
    e.preventDefault();
    const tableRow = e.target.parentElement;
    const productName = tableRow.children[0].dataset.productName;
    const productQuantity = tableRow.children[2];

    vendingMachine.purchaseProduct(productName);
    this.renderInsertMoney();
    this.renderProductQuantity(productName, productQuantity);
  };

  this.onClickReturnCoinButton = (e) => {
    e.preventDefault();
    const returnCoinCount = vendingMachine.returnCoin();

    this.renderInsertMoney();
    this.renderReturnCoin(returnCoinCount);
  };

  this.renderReturnCoin = (counts) => {
    counts.forEach((count, index) => {
      const coinData = document.querySelector(`#${ID.RETURN_COIN[index]}`);

      coinData.innerHTML = `${count}개`;
    });
  };

  this.renderInsertMoney = () => {
    const moneySpan = document.querySelector(`#${ID.CHARGE_AMOUNT}`);

    moneySpan.innerHTML = vendingMachine.insertMoney;
  };

  this.renderProductPurchase = (product) => {
    const table = document.querySelector('#product-purchase-table');
    const productRow = createProductPurchaseRow(
      product,
      CLASS.PRODUCT_PURCHASE_ITEM,
      CLASS.PRODUCT_PURCHASE,
      this.onClickPurchaseProductButton
    );

    table.append(productRow);
  };

  this.renderProducts = (products) => {
    const productArray = products.map((product) => [
      product.name,
      product.price,
      product.quantity,
    ]);
    productArray.forEach((product) => {
      this.renderProductPurchase(product);
    });
  };

  this.initInsertMoney = () => {
    if (JSON.parse(localStorage.getItem('insert'))) {
      vendingMachine.insertMoney = JSON.parse(localStorage.getItem('insert'));
    }
    this.renderInsertMoney();
  };

  this.initProductTable = () => {
    if (JSON.parse(localStorage.getItem('product'))) {
      vendingMachine.products = JSON.parse(localStorage.getItem('product'));
    }
    this.renderProducts(vendingMachine.products);
  };

  this.render = () => {
    const container = document.querySelector('#menu-view');

    container.append(this.productPurchaseMenu());
    this.initInsertMoney();
    this.initProductTable();
  };
}
