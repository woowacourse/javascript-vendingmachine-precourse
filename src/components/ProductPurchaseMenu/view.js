import { ID, CLASS } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import { STORAGE_KEY } from '../../constants/storageKey.js';
import {
  Container,
  SubTitle,
  Span,
  SpanWithId,
  ButtonWithId,
} from '../elements.js';
import {
  createAddMoneyForm,
  createProductPurchaseTable,
  createProductPurchaseRow,
  createCoinTable,
} from './element.js';
import { vendingMachine } from '../vendingMachine.js';
import {
  alertChargeErrorMessage,
  alertReturnErrorMessage,
  canReturn,
  isValidCharge,
} from '../validator.js';

export default function ProductPurchaseMenuView() {
  this.productPurchaseMenu = () => {
    const container = Container(ID.PRODUCT_PURCHASE_VIEW);
    const addMoneySubTitle = SubTitle(MACHINE.SUBTITLE.INSERT_MONEY);
    const productSubTitle = SubTitle(MACHINE.SUBTITLE.PRODUCT_PURCHASE_STATUS);
    const changeSubTitle = SubTitle(MACHINE.SUBTITLE.CHANGE);
    const addMoneyForm = createAddMoneyForm(this.onClickAddMoneyButton);
    const insertSpan = Span(MACHINE.TEXT.USER_MONEY);
    const moneySpan = SpanWithId('', ID.CHARGE_AMOUNT);
    const productPurchaseTable = createProductPurchaseTable();
    const coinTable = createCoinTable();
    const returnButton = ButtonWithId(
      MACHINE.BUTTON.RETURN,
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
    if (!canReturn(vendingMachine.charge, vendingMachine.insertMoney)) {
      alertReturnErrorMessage(
        vendingMachine.charge,
        vendingMachine.insertMoney
      );

      return;
    }

    const returnCoinCount = vendingMachine.returnCoin();

    this.renderInsertMoney();
    this.renderReturnCoin(returnCoinCount);
  };

  this.renderReturnCoin = (counts) => {
    counts.forEach((count, index) => {
      const coinData = document.querySelector(`#${ID.RETURN_COIN[index]}`);

      coinData.innerHTML = `${count}${MACHINE.COUNT}`;
    });
  };

  this.renderInsertMoney = () => {
    const moneySpan = document.querySelector(`#${ID.CHARGE_AMOUNT}`);

    moneySpan.innerHTML = `${vendingMachine.insertMoney}${MACHINE.WON}`;
  };

  this.renderProductPurchase = (product) => {
    const table = document.querySelector(`#${ID.PRODUCT_PURCHASE_TABLE}`);
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
    if (JSON.parse(localStorage.getItem(STORAGE_KEY.INSERT))) {
      vendingMachine.insertMoney = JSON.parse(
        localStorage.getItem(STORAGE_KEY.INSERT)
      );
    }
    this.renderInsertMoney();
  };

  this.initProductTable = () => {
    if (JSON.parse(localStorage.getItem(STORAGE_KEY.PRODUCT))) {
      vendingMachine.products = JSON.parse(
        localStorage.getItem(STORAGE_KEY.PRODUCT)
      );
    }
    this.renderProducts(vendingMachine.products);
  };

  this.render = () => {
    const container = document.querySelector(`#${ID.MENU_VIEW}`);

    container.append(this.productPurchaseMenu());
    this.initInsertMoney();
    this.initProductTable();
  };
}
