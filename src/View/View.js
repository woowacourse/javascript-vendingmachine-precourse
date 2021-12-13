import {
  createTable,
  createTr,
  createTd,
  createCoinTable,
} from "./DOM/createTable.js";
import { createH1, createH3 } from "./DOM/createTitle.js";
import createInput from "./DOM/createInput.js";
import createButton from "./DOM/createButton.js";
import createDiv from "./DOM/createDiv.js";
import createSpan from "./DOM/createSpan.js";
import getElement from "./DOM/getElement.js";
import {
  VANDING_MACHINE_MENU,
  ADD_PRODUCT,
  CHARGE_COIN,
  PURCHASE,
} from "../constant/HTMLConstant.js";
import { TITLE, TEXT, BUTTON } from "../constant/textConstant.js";
import {
  resetTable,
  getMoneySum,
  printValue,
  printCount,
} from "../Controller/common.js";
import { style, tableStyle } from "./style.js";

export default class View {
  constructor() {
    this.menu = createDiv();
    this.productAddMenu = createButton(
      VANDING_MACHINE_MENU.PRODUCT_ADD,
      BUTTON.MANAGE
    );
    this.vendingMachineManageMenu = createButton(
      VANDING_MACHINE_MENU.MANAGE,
      BUTTON.CHARGE_COIN
    );
    this.productPurchaseMenu = createButton(
      VANDING_MACHINE_MENU.PURCHASE,
      BUTTON.BUY
    );
    this.menu.append(
      this.productAddMenu,
      this.vendingMachineManageMenu,
      this.productPurchaseMenu
    );
    this.form = createDiv();
    document
      .getElementById("app")
      .append(createH1(TITLE.VENDING_MACHINE), this.menu, this.form);
    style();
  }

  resetForm(nowForm) {
    if (this.form.children.length !== 0) {
      this.form.removeChild(this.form.lastChild);
    }
    this.form.append(nowForm);
    style();
  }

  // 상품 추가
  displayProductAdd(product) {
    this.productAddMenu.addEventListener("click", () => {
      if (!this.addProductForm) {
        this.addProductForm = createDiv();
        this.productTable = createTable(TEXT.PRODUCT);
        this.addProductForm.append(
          createH3(TITLE.ADD_PRODCUT),
          this.createAddProductForm(),
          createH3(TITLE.NOW_PRODUCT),
          this.productTable
        );
      }
      this.resetForm(this.addProductForm);
      if (product) this.displayProductAddChange(product);
    });
  }

  displayProductAddChange(product) {
    if (this.productTable) {
      resetTable(this.productTable);
      product.forEach((value) => {
        const tr = createTr(ADD_PRODUCT.PRODUCT_ITEM);
        tr.append(
          createTd(ADD_PRODUCT.PRODUCT_NAME, value.name),
          createTd(ADD_PRODUCT.PRODUCT_PRICE, value.price),
          createTd(ADD_PRODUCT.PRODUCT_QUANTITY, value.quantity)
        );
        this.productTable.append(tr);
      });
    }
    tableStyle();
  }

  createAddProductForm() {
    const inputForm = createDiv();
    this.productNameInput = createInput(ADD_PRODUCT.NAME, TEXT.NAME, "string");
    this.productPriceInput = createInput(ADD_PRODUCT.PRICE, TEXT.PRICE);
    this.productQuantityInput = createInput(
      ADD_PRODUCT.QUANTITY,
      TEXT.QUANTITIY
    );
    inputForm.append(
      this.productNameInput,
      this.productPriceInput,
      this.productQuantityInput,
      createButton(ADD_PRODUCT.BUTTON, BUTTON.ADD)
    );
    return inputForm;
  }

  bindProductAdd(handler) {
    this.form.addEventListener("click", (event) => {
      if (event.target.id === ADD_PRODUCT.BUTTON) {
        handler(
          this.productNameInput.value,
          this.productPriceInput.value,
          this.productQuantityInput.value
        );
        this.productNameInput.value = "";
        this.productPriceInput.value = "";
        this.productQuantityInput.value = "";
      }
    });
  }

  // 잔돈 충전
  displayChargeCoin(coin) {
    this.vendingMachineManageMenu.addEventListener("click", () => {
      if (!this.chargeCoinForm) {
        this.createChargeCoinForm(getMoneySum(coin));
      }
      this.resetForm(this.chargeCoinForm);
      this.displayChargeCoinChange(coin, getMoneySum(coin));
    });
  }

  displayChargeCoinChange(coins, sum) {
    if (getElement(CHARGE_COIN.QUANTITY[0])) {
      coins.forEach((value, index) => {
        getElement(CHARGE_COIN.QUANTITY[index]).textContent = printCount(value);
      });
      this.chargeAmount.textContent = printValue(sum);
    }
    tableStyle();
  }

  createChargeCoinForm(sum) {
    this.chargeCoinForm = createDiv();
    this.coinTable = createCoinTable(CHARGE_COIN.QUANTITY);
    this.chargeCoinForm.append(
      createH3(TITLE.CHARGE_COIN),
      this.createCoinInputForm(sum),
      createH3(TITLE.NOW_COIN),
      this.coinTable
    );
  }

  createCoinInputForm(sum) {
    const div = createDiv();
    this.chargeInput = createInput(CHARGE_COIN.INPUT, TEXT.COIN_WILL);
    const chargeDiv = createDiv(TEXT.COIN_DONE, TEXT.COIN_DONE);
    this.chargeAmount = createSpan(CHARGE_COIN.AMOUNT, printValue(sum));
    chargeDiv.append(this.chargeAmount);
    div.append(
      this.chargeInput,
      createButton(CHARGE_COIN.BUTTON, BUTTON.CHARGE),
      chargeDiv
    );
    return div;
  }

  bindChargeCoin(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === CHARGE_COIN.BUTTON) {
        handler(this.chargeInput.value);
        this.chargeInput.value = "";
      }
    });
  }

  // 상품 구매
  displayProductPurchase(product, money) {
    this.productPurchaseMenu.addEventListener("click", () => {
      if (!this.productPurchaseForm) {
        this.productPurchaseForm = createDiv();
        this.avaiableProductTable = createTable([...TEXT.PRODUCT, TEXT.BUY]);
        this.productPurchaseForm.append(
          this.createBillForm(money),
          createH3(TITLE.AVAILABLE_PRODUCT),
          this.avaiableProductTable,
          this.createLeftOverForm()
        );
      }
      this.resetForm(this.productPurchaseForm);
      this.displayAvailableProduct(product);
    });
  }

  displayAvailableProduct(product) {
    if (this.avaiableProductTable) {
      resetTable(this.avaiableProductTable);
      product.forEach((value) => {
        const tr = createTr(PURCHASE.ITEM);
        tr.append(
          this.createNameDataset(value),
          this.createPriceDataset(value),
          this.createQuantityDataset(value),
          this.createPurchaseButton()
        );
        this.avaiableProductTable.append(tr);
      });
    }
    tableStyle();
  }

  displayMoneyChange(money) {
    this.billChargeAmount.textContent = printValue(money);
  }

  displayReturnCoin(coins) {
    coins.forEach((value, index) => {
      getElement(PURCHASE.LEFT_COIN[index]).textContent = printCount(value);
    });
  }

  createBillForm(money) {
    const div = createDiv();
    this.billChargeInput = createInput(PURCHASE.INPUT, TEXT.PURCHASE_WILL);
    this.billChargeDiv = createDiv(TEXT.PURCHASE_DONE, TEXT.PURCHASE_DONE);
    this.billChargeAmount = createSpan(PURCHASE.AMOUNT, printValue(money));
    this.billChargeDiv.append(this.billChargeAmount);
    div.append(
      createH3(TITLE.ADD_MONEY),
      this.billChargeInput,
      createButton(PURCHASE.ADD, BUTTON.BILL),
      this.billChargeDiv
    );
    return div;
  }

  createLeftOverForm() {
    const div = createDiv();
    div.append(
      createH3(TITLE.LEFTOVER),
      createButton(PURCHASE.RETURN, BUTTON.RETURN),
      createCoinTable(PURCHASE.LEFT_COIN)
    );
    return div;
  }

  createNameDataset(value) {
    const tdName = createTd(PURCHASE.NAME, value.name);
    tdName.setAttribute(PURCHASE.DATASET_NAME, value.name);
    return tdName;
  }

  createPriceDataset(value) {
    const tdPrice = createTd(PURCHASE.PRICE, value.price);
    tdPrice.setAttribute(PURCHASE.DATASET_PRICE, value.price);
    return tdPrice;
  }

  createQuantityDataset(value) {
    const tdQuantity = createTd(PURCHASE.QUANTITY, value.quantity);
    tdQuantity.setAttribute(PURCHASE.DATASET_QUANTITY, value.quantity);
    return tdQuantity;
  }

  createPurchaseButton() {
    const td = createTd();
    td.append(createButton(PURCHASE.PURCHASE, BUTTON.PURCHASE));
    return td;
  }

  bindMoneyAdd(handler) {
    this.form.addEventListener("click", (event) => {
      if (event.target.id === PURCHASE.ADD) {
        const presentMoney = handler(this.billChargeInput.value);
        if (presentMoney) {
          this.displayMoneyChange(presentMoney);
        }
        this.billChargeInput.value = "";
      }
    });
  }

  bindPurchaseProduct(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === PURCHASE.PURCHASE) {
        handler(event.target.parentElement.parentElement.firstChild.dataset);
      }
    });
  }

  bindReturnCoin(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === PURCHASE.RETURN) {
        handler();
      }
    });
  }
}
