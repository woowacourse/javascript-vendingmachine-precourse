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

export default class View {
  constructor() {
    this.app = document.getElementById("app");
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
    this.app.append(createH1(TITLE.VENDING_MACHINE), this.menu);
    this.form = createDiv();
    this.app.append(this.form);
  }

  resetForm(nowForm) {
    if (this.form.children.length !== 0) {
      this.form.removeChild(this.form.lastChild);
    }
    this.form.append(nowForm);
  }

  // 상품 추가
  displayProductAdd(product) {
    this.productAddMenu.addEventListener("click", (event) => {
      event.preventDefault();
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

  createAddProductForm() {
    const inputForm = createDiv();
    this.productNameInput = createInput(ADD_PRODUCT.NAME, TEXT.NAME, "string");
    this.productPriceInput = createInput(ADD_PRODUCT.PRICE, TEXT.PRICE);
    this.productQuantityInput = createInput(
      ADD_PRODUCT.QUANTITY,
      TEXT.QUANTITIY
    );
    this.productAddButton = createButton(ADD_PRODUCT.BUTTON, BUTTON.ADD);
    inputForm.append(
      this.productNameInput,
      this.productPriceInput,
      this.productQuantityInput,
      this.productAddButton
    );
    return inputForm;
  }

  bindProductAdd(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
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
  }

  // 잔돈 충전
  displayChargeCoin(coin) {
    this.vendingMachineManageMenu.addEventListener("click", (event) => {
      event.preventDefault();
      if (!this.chargeCoinForm) {
        this.createChargeCoinForm(getMoneySum(coin));
      }
      this.resetForm(this.chargeCoinForm);
      this.displayChargeCoinChange(coin, getMoneySum(coin));
    });
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
    this.vendingMachineChargeInput = createInput(
      CHARGE_COIN.INPUT,
      TEXT.COIN_WILL
    );
    const chargeDiv = createDiv(TEXT.COIN_DONE, TEXT.COIN_DONE);
    this.vendingMachinechargeAmount = createSpan(
      CHARGE_COIN.AMOUNT,
      printValue(sum)
    );
    chargeDiv.append(this.vendingMachinechargeAmount);
    div.append(
      this.vendingMachineChargeInput,
      createButton(CHARGE_COIN.BUTTON, BUTTON.CHARGE),
      chargeDiv
    );
    return div;
  }

  bindChargeCoin(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === CHARGE_COIN.BUTTON) {
        handler(this.vendingMachineChargeInput.value);
        this.vendingMachineChargeInput.value = "";
      }
    });
  }

  displayChargeCoinChange(coins, sum) {
    if (getElement(CHARGE_COIN.QUANTITY[0])) {
      coins.forEach((value, index) => {
        getElement(CHARGE_COIN.QUANTITY[index]).textContent = printCount(value);
      });
      this.vendingMachinechargeAmount.textContent = printValue(sum);
    }
  }

  // 상품 구매
  displayProductPurchase(product, money) {
    this.productPurchaseMenu.addEventListener("click", () => {
      if (!this.productPurchaseForm) {
        this.productPurchaseForm = createDiv();
        this.avaiableProductTable = createTable([...TEXT.PRODUCT, TEXT.BUY]);
        this.leftOverTable = createCoinTable(PURCHASE.LEFT_COIN);
        this.productPurchaseForm.append(
          createH3(TITLE.ADD_MONEY),
          this.createBillForm(money),
          createH3(TITLE.AVAILABLE_PRODUCT),
          this.avaiableProductTable,
          createH3(TITLE.LEFTOVER),
          createButton(PURCHASE.RETURN, BUTTON.RETURN),
          this.leftOverTable
        );
      }
      this.resetForm(this.productPurchaseForm);
      this.displayAvailableProduct(product);
    });
  }

  createBillForm(money) {
    const div = createDiv();
    this.chargeInput = createInput(PURCHASE.INPUT, TEXT.PURCHASE_WILL);
    this.chargeButton = createButton(PURCHASE.ADD, BUTTON.BILL);
    this.chargeDiv = createDiv(TEXT.PURCHASE_DONE, TEXT.PURCHASE_DONE);
    this.chargeAmount = createSpan(PURCHASE.AMOUNT, printValue(money));
    this.chargeDiv.append(this.chargeAmount);
    div.append(this.chargeInput, this.chargeButton, this.chargeDiv);
    return div;
  }

  displayAvailableProduct(product) {
    if (this.avaiableProductTable) {
      resetTable(this.avaiableProductTable);
      product.forEach((value) => {
        const tr = createTr(PURCHASE.ITEM);
        const tdName = createTd(PURCHASE.NAME, value.name);
        const tdPrice = createTd(PURCHASE.PRICE, value.price);
        const tdQuantity = createTd(PURCHASE.QUANTITY, value.quantity);
        const tdButton = createButton(PURCHASE.PURCHASE, BUTTON.PURCHASE);
        tdName.setAttribute(PURCHASE.DATASET_NAME, value.name);
        tdPrice.setAttribute(PURCHASE.DATASET_PRICE, value.price);
        tdQuantity.setAttribute(PURCHASE.DATASET_QUANTITY, value.quantity);
        tr.append(tdName, tdPrice, tdQuantity, tdButton);
        this.avaiableProductTable.append(tr);
      });
    }
  }

  bindMoneyAdd(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === PURCHASE.ADD) {
        const presentMoney = handler(this.chargeInput.value);
        if (presentMoney) {
          this.displayMoneyChange(presentMoney);
        }
        this.chargeInput.value = "";
      }
    });
  }

  bindPurchaseProduct(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === PURCHASE.PURCHASE) {
        handler(event.target.parentElement.firstChild.dataset);
      }
    });
  }

  displayMoneyChange(money) {
    this.chargeAmount.textContent = printValue(money);
  }

  bindReturnCoin(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === PURCHASE.RETURN) {
        handler();
      }
    });
  }

  displayReturnCoin(coins) {
    coins.forEach((value, index) => {
      getElement(PURCHASE.LEFT_COIN[index]).textContent = printCount(value);
    });
  }
}
