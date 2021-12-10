import { createTable, createTr, createTd } from "./DOM/createTable.js";
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
  COIN_QUANTITY,
} from "../constant/HTMLConstant.js";
import {
  TITLE,
  NAME,
  PRICE,
  QUANTITIY,
  COIN,
  COUNT,
  BUTTON,
  CHARGE,
} from "../constant/textConstant.js";

export default class View {
  constructor() {
    this.app = document.getElementById("app");
    const title = createH1(TITLE.VENDING_MACHINE);
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
    this.app.append(title);
    this.app.append(this.menu);
    this.form = createDiv();
    this.app.append(this.form);
    this.displayProductAdd();
  }

  displayProductAdd(product) {
    this.productAddMenu.addEventListener("click", (event) => {
      event.preventDefault();
      if (!this.addProductForm) {
        this.addProductForm = createDiv();
        this.title = createH3(TITLE.ADD_PRODCUT);
        this.productNameInput = createInput(ADD_PRODUCT.NAME_INPUT, NAME);
        this.productPriceInput = createInput(
          ADD_PRODUCT.PRICE_INPUT,
          PRICE,
          "number"
        );
        this.productQuantityInput = createInput(
          ADD_PRODUCT.QUANTITY_INPUT,
          QUANTITIY,
          "number"
        );
        this.productAddButton = createButton(ADD_PRODUCT.BUTTON, BUTTON.ADD);
        const presentTitle = createH3(TITLE.NOW_PRODUCT);
        this.productTable = createTable([NAME, PRICE, QUANTITIY]);

        this.addProductForm.append(
          this.title,
          this.productNameInput,
          this.productPriceInput,
          this.productQuantityInput,
          this.productAddButton,
          presentTitle,
          this.productTable
        );
      }
      if (this.form.children.length !== 0) {
        this.form.removeChild(this.form.lastChild);
      }
      this.form.append(this.addProductForm);
      if (product) this.displayProductAddChange(product);
    });
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
    while (this.productTable.children.length > 1) {
      this.productTable.removeChild(this.productTable.lastChild);
    }

    product.forEach((value) => {
      const tr = createTr(ADD_PRODUCT.PRODUCT_ITEM);
      const productManageName = createTd(ADD_PRODUCT.PRODUCT_NAME, value.name);
      const productManagePrice = createTd(
        ADD_PRODUCT.PRODUCT_PRICE,
        value.price
      );
      const productManageQuantity = createTd(
        ADD_PRODUCT.PRODUCT_QUANTITY,
        value.quantity
      );
      tr.append(productManageName, productManagePrice, productManageQuantity);
      this.productTable.append(tr);
    });
  }

  // 잔돈 충전
  displayChargeCoin(coin, sum) {
    this.vendingMachineManageMenu.addEventListener("click", (event) => {
      event.preventDefault();
      if (!this.chargeCoinForm) {
        this.chargeCoinForm = createDiv();
        const title = createH3(TITLE.CHARGE_COIN);
        this.vendingMachineChargeInput = createInput(
          CHARGE_COIN.INPUT,
          CHARGE.INPUT_VALUE,
          "number"
        );
        this.vendingMachineChargeButton = createButton(
          CHARGE_COIN.BUTTON,
          BUTTON.CHARGE
        );
        this.vendingMachinePresentAmount = createDiv(
          CHARGE_COIN.DIV,
          CHARGE.SUM
        );
        this.vendingMachinechargeAmount = createSpan(
          CHARGE_COIN.AMOUNT,
          `${sum > 0 ? sum : ""}`
        );
        this.vendingMachinePresentAmount.append(
          this.vendingMachinechargeAmount
        );
        const coinTitle = createH3(TITLE.NOW_COIN);
        this.coinTable = this.createCoinTable([...COIN_QUANTITY]);

        this.chargeCoinForm.append(
          title,
          this.vendingMachineChargeInput,
          this.vendingMachineChargeButton,
          this.vendingMachinePresentAmount,
          coinTitle,
          this.coinTable
        );
      }
      if (this.form.children.length !== 0) {
        this.form.removeChild(this.form.lastChild);
      }
      this.form.append(this.chargeCoinForm);
      if (
        coin &&
        coin.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        ) > 0
      )
        this.displayChargeCoinChange(coin);
    });
  }

  bindChargeCoin(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === CHARGE_COIN.BUTTON) {
        const presentMoney = handler(this.vendingMachineChargeInput.value);
        this.vendingMachineChargeInput.value = "";
        if (presentMoney) {
          this.vendingMachinechargeAmount.innerHTML = presentMoney;
        }
      }
    });
  }

  displayChargeCoinChange(coins) {
    coins.forEach((value, index) => {
      getElement(COIN_QUANTITY[index]).innerHTML = `${value}개`;
    });
  }

  createCoinTable(className) {
    const coinTable = createTable([COIN, COUNT]);
    const coins = [500, 100, 50, 10];
    className.forEach((value, index) => {
      const tr = createTr();
      tr.append(createTd(coins[index], `${coins[index]}원`), createTd(value));
      coinTable.append(tr);
    });
    return coinTable;
  }
}
