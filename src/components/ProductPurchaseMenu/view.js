import { $ } from '../../utils/dom.js';
import { ID, CLASS } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import { STORAGE_KEY } from '../../constants/storageKey.js';
import { Container } from '../Element/domElement.js';
import {
  moneyAddForm,
  userMoneySpan,
  productTable,
  coinTable,
  createProductRow,
} from './element.js';
import { vendingMachine } from '../vendingMachine.js';
import {
  alertChargeErrorMessage,
  alertReturnErrorMessage,
  canReturn,
  isValidCharge,
} from '../../utils/validator.js';
import { getLocalStorage } from '../store.js';

export default function ProductPurchaseMenuView() {
  this.productPurchaseMenu = () => {
    const container = Container(ID.PRODUCT_PURCHASE_VIEW);
    const form = moneyAddForm(this.onClickAddMoneyButton);
    const moneySpan = userMoneySpan();
    const productPurchaseTable = productTable(
      this.onClickPurchaseProductButton
    );
    const returnCoinTable = coinTable(this.onClickReturnCoinButton);

    container.append(
      ...form,
      ...moneySpan,
      ...productPurchaseTable,
      ...returnCoinTable
    );

    return container;
  };

  this.onClickAddMoneyButton = (e) => {
    e.preventDefault();
    const addMoneyInput = $(`#${ID.CHARGE_INPUT}`);

    if (!isValidCharge(addMoneyInput.value)) {
      alertChargeErrorMessage(addMoneyInput.value);
      return;
    }

    vendingMachine.addInsertMoney(parseInt(addMoneyInput.value));
    this.renderInsertMoney();
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

  this.renderInsertMoney = () => {
    const moneySpan = $(`#${ID.CHARGE_AMOUNT}`);

    moneySpan.innerHTML = `${vendingMachine.insertMoney}${MACHINE.WON}`;
  };

  this.renderProduct = (product) => {
    const table = $(`#${ID.PRODUCT_PURCHASE_TABLE}`);
    const productRow = createProductRow(
      product,
      CLASS.PRODUCT_PURCHASE_ITEM,
      CLASS.PRODUCT_PURCHASE,
      this.onClickPurchaseProductButton
    );

    table.append(productRow);
  };

  this.renderProductQuantity = (name, quantityData) => {
    const product = vendingMachine.products.find(
      (product) => product.name === name
    );

    quantityData.innerHTML = product.quantity;
    quantityData.dataset.productQuantity = product.quantity;
  };

  this.renderReturnCoin = (counts) => {
    counts.forEach((count, index) => {
      const coinData = $(`#${ID.RETURN_COIN[index]}`);

      coinData.innerHTML = `${count}${MACHINE.COUNT}`;
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

  this.initProducts = (products) => {
    const productArray = products.map((product) => [
      product.name,
      product.price,
      product.quantity,
    ]);

    productArray.forEach((product) => {
      this.renderProduct(product);
    });
  };

  this.initProductTable = () => {
    if (getLocalStorage(STORAGE_KEY.PRODUCT)) {
      vendingMachine.products = getLocalStorage(STORAGE_KEY.PRODUCT);
    }
    this.initProducts(vendingMachine.products);
  };

  this.render = () => {
    const container = $(`#${ID.MENU_VIEW}`);

    container.append(this.productPurchaseMenu());
    this.initInsertMoney();
    this.initProductTable();
  };
}
