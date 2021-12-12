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
  LEFT_COIN,
} from "../constant/HTMLConstant.js";
import {
  TITLE,
  NAME,
  PRICE,
  QUANTITIY,
  COIN,
  COUNT,
  BUY,
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
    if (this.productTable) {
      while (this.productTable.children.length > 1) {
        this.productTable.removeChild(this.productTable.lastChild);
      }

      product.forEach((value) => {
        const tr = createTr(ADD_PRODUCT.PRODUCT_ITEM);
        const productManageName = createTd(
          ADD_PRODUCT.PRODUCT_NAME,
          value.name
        );
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
  }

  // 잔돈 충전
  displayChargeCoin(coin) {
    this.vendingMachineManageMenu.addEventListener("click", (event) => {
      event.preventDefault();
      let sum = 0;
      const coins = [500, 100, 50, 10];
      coin.forEach((c, i) => {
        sum += c * coins[i];
      });
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
        this.coinTable = this.createCoinTable(COIN_QUANTITY);

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
        this.displayChargeCoinChange(coin, sum);
    });
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
    if (getElement(COIN_QUANTITY[0])) {
      coins.forEach((value, index) => {
        getElement(COIN_QUANTITY[index]).innerHTML = `${value}개`;
      });
      this.vendingMachinechargeAmount.innerHTML = sum;
    }
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

  // 상품 구매
  displayProductPurchase(product, coin, money) {
    this.productPurchaseMenu.addEventListener("click", (event) => {
      event.preventDefault();
      if (!this.productPurchaseForm) {
        this.productPurchaseForm = createDiv();
        const title = createH3("금액 투입");
        this.chargeInput = createInput("charge-input", "투입할 금액", "number");
        this.chargeButton = createButton(
          "charge-button",
          "투입하기",
          "charge-button"
        );
        this.chargeInputSum = createDiv("charge-input-sum", "투입한 금액: ");
        this.chargeAmount = createSpan(
          "charge-amount",
          `${+money > 0 ? money : ""}`
        );
        this.chargeInputSum.append(this.chargeAmount);

        const nowProductTitle = createH3("구매할 수 있는 상품 현황");

        this.avaiableProductTable = createTable([NAME, PRICE, QUANTITIY, BUY]);

        const leftMoneyTitle = createH3("잔돈");
        this.returnButton = createButton("coin-return-button", "반환하기");
        this.leftOverTable = this.createCoinTable(LEFT_COIN);

        this.productPurchaseForm.append(
          title,
          this.chargeInput,
          this.chargeButton,
          this.chargeInputSum,
          nowProductTitle,
          this.avaiableProductTable,
          leftMoneyTitle,
          this.returnButton,
          this.leftOverTable
        );
      }
      if (this.form.children.length !== 0) {
        this.form.removeChild(this.form.lastChild);
      }
      this.form.append(this.productPurchaseForm);
      this.displayAvailableProduct(product);
    });
  }

  displayAvailableProduct(product) {
    if (this.avaiableProductTable) {
      while (this.avaiableProductTable.children.length > 1) {
        this.avaiableProductTable.removeChild(
          this.avaiableProductTable.lastChild
        );
      }
      product.forEach((value) => {
        const tr = createTr("product-purchase-item");
        const tdName = createTd("product-purchase-name", value.name);
        const tdPrice = createTd("product-purchase-price", value.price);
        const tdQuantity = createTd(
          "product-purchase-quantity",
          value.quantity
        );
        const tdButton = createButton(
          "purchase-button",
          "구매하기",
          "purchase-button"
        );
        tdName.setAttribute("data-product-name", value.name);
        tdPrice.setAttribute("data-product-price", value.price);
        tdQuantity.setAttribute("data-product-quantity", value.quantity);
        tr.append(tdName, tdPrice, tdQuantity, tdButton);
        this.avaiableProductTable.append(tr);
      });
    }
  }

  bindMoneyAdd(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === "charge-button") {
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
      if (event.target.id === "purchase-button") {
        handler(event.target.parentElement.firstChild.dataset);
      }
    });
  }

  displayMoneyChange(money) {
    this.chargeAmount.innerHTML = money;
  }

  bindReturnCoin(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === "coin-return-button") {
        handler();
      }
    });
  }

  displayReturnCoin(coins) {
    coins.forEach((value, index) => {
      getElement(LEFT_COIN[index]).innerHTML = `${value}개`;
    });
  }
}
