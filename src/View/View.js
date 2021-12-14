import getElement from "./DOM/getElement.js";
import createDiv from "./DOM/createDiv.js";
import {
  VANDING_MACHINE_MENU,
  ADD_PRODUCT,
  CHARGE_COIN,
  PURCHASE,
} from "../constant/HTMLConstant.js";
import {
  resetTable,
  getMoneySum,
  printValue,
  printCount,
} from "../Controller/common.js";
import { style, tableStyle } from "./style.js";
import {
  initialize,
  makeProductRow,
  makeAvailableRow,
  productAddForm,
  coinChargeForm,
  purchaseForm,
} from "./template/template.js";

export default class View {
  constructor() {
    document.getElementById("app").innerHTML = initialize;
    this.productAddMenu = getElement(VANDING_MACHINE_MENU.PRODUCT_ADD);
    this.vendingMachineManageMenu = getElement(VANDING_MACHINE_MENU.COIN);
    this.productPurchaseMenu = getElement(VANDING_MACHINE_MENU.PURCHASE);
    this.form = getElement("form");
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
      if (!this.productAddForm) {
        this.productAddForm = createDiv();
        this.productAddForm.innerHTML = productAddForm;
      }
      this.resetForm(this.productAddForm);
      this.productTable = document.querySelector("table");
      if (product) this.displayProductAddChange(product);
    });
  }

  displayProductAddChange(product) {
    if (this.productTable) {
      resetTable(this.productTable);
      product.forEach((value) => {
        this.productTable.innerHTML += makeProductRow(value, ADD_PRODUCT);
      });
    }
    tableStyle();
  }

  bindProductAdd(handler) {
    this.form.addEventListener("click", (event) => {
      if (event.target.id === ADD_PRODUCT.BUTTON) {
        const $name = getElement(ADD_PRODUCT.NAME);
        const $price = getElement(ADD_PRODUCT.PRICE);
        const $quantity = getElement(ADD_PRODUCT.QUANTITY);
        handler($name.value, $price.value, $quantity.value);
        $name.value = "";
        $price.value = "";
        $quantity.value = "";
      }
    });
  }

  // 잔돈 충전
  displayChargeCoin(coin) {
    this.vendingMachineManageMenu.addEventListener("click", () => {
      if (!this.chargeCoinForm) {
        this.chargeCoinForm = createDiv();
        this.chargeCoinForm.innerHTML = coinChargeForm(getMoneySum(coin));
      }
      this.resetForm(this.chargeCoinForm);
      this.chargeCoinTable = document.querySelector("table");
      this.displayChargeCoinChange(coin, getMoneySum(coin));
    });
  }

  displayChargeCoinChange(coins, sum) {
    if (getElement(CHARGE_COIN.AMOUNT)) {
      getElement(CHARGE_COIN.AMOUNT).textContent = printValue(sum);
      coins.forEach((coin, index) => {
        getElement(CHARGE_COIN.QUANTITY[index]).textContent = printCount(coin);
      });
    }
    tableStyle();
  }

  bindChargeCoin(handler) {
    this.form.addEventListener("click", (event) => {
      if (event.target.id === CHARGE_COIN.BUTTON) {
        const $input = getElement(CHARGE_COIN.INPUT);
        handler($input.value);
        $input.value = "";
      }
    });
  }

  // 상품 구매
  displayProductPurchase(product, money) {
    this.productPurchaseMenu.addEventListener("click", () => {
      if (!this.purchaseForm) {
        this.purchaseForm = createDiv();
        this.purchaseForm.innerHTML = purchaseForm(money);
      }
      this.resetForm(this.purchaseForm);
      this.moneyAmount = getElement(PURCHASE.AMOUNT);
      this.avaiableProductTable = document.querySelector("table");
      this.displayAvailableProduct(product);
    });
  }

  displayAvailableProduct(product) {
    if (this.avaiableProductTable) {
      resetTable(this.avaiableProductTable);
      product.forEach((value) => {
        this.avaiableProductTable.innerHTML += makeAvailableRow(value);
      });
    }
    tableStyle();
  }

  displayMoneyChange(money) {
    this.moneyAmount.textContent = printValue(money);
  }

  displayReturnCoin(coins) {
    coins.forEach((value, index) => {
      getElement(PURCHASE.LEFT_COIN[index]).textContent = printCount(value);
    });
  }

  bindMoneyAdd(handler) {
    this.form.addEventListener("click", (event) => {
      if (event.target.id === PURCHASE.ADD) {
        const $input = getElement(PURCHASE.INPUT);
        const presentMoney = handler($input.value);
        if (presentMoney) {
          this.displayMoneyChange(presentMoney);
        }
        $input.value = "";
      }
    });
  }

  bindPurchaseProduct(handler) {
    this.form.addEventListener("click", (event) => {
      if (event.target.className === PURCHASE.PURCHASE) {
        handler(event.target.parentElement.parentElement.children[0].dataset);
      }
    });
  }

  bindReturnCoin(handler) {
    this.form.addEventListener("click", (event) => {
      if (event.target.id === PURCHASE.RETURN) {
        handler();
      }
    });
  }
}
