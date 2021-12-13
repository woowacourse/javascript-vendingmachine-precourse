import {
  COMMON_VIEW,
  MANAGE_VIEW,
  CHARGE_VIEW,
  PURCHASE_VIEW,
} from "./utils/viewDOM.js";
import { createElement, hideWithID, showWithID } from "./utils/handleDOM.js";
import { COIN, EMPTY } from "../utils/constants.js";

export default class View {
  constructor() {
    this.init();
  }

  init() {
    this.commonRender();
    this.manageTabRender();
    this.chargeTabRender();
    this.purchaseTabRender();

    this.tab = ["manage-tab", "charge-tab", "purchase-tab"];
    this.buttons = this.getButtons();
    this.inputs = this.getInputs();

    hideWithID("manage-tab");
    hideWithID("charge-tab");
    hideWithID("purchase-tab");
  }

  showSelectedID(tabId) {
    this.tab.map((id) => {
      if (tabId === id) {
        showWithID(id);
      } else {
        hideWithID(id);
      }
    });
  }

  commonRender() {
    const $app = document.getElementById("app");
    $app.innerHTML = COMMON_VIEW;
  }

  manageTabRender() {
    const $manageTab = document.createElement("div");
    const $app = document.getElementById("app");

    $manageTab.id = "manage-tab";
    $manageTab.innerHTML = MANAGE_VIEW;
    $app.after($manageTab);
  }

  chargeTabRender() {
    const $chargeTab = document.createElement("div");
    const $app = document.getElementById("app");

    $chargeTab.id = "charge-tab";
    $chargeTab.innerHTML = CHARGE_VIEW;
    $app.after($chargeTab);
  }

  purchaseTabRender() {
    const $purchaseTab = document.createElement("div");
    const $app = document.getElementById("app");

    $purchaseTab.id = "purchase-tab";
    $purchaseTab.innerHTML = PURCHASE_VIEW;
    $app.after($purchaseTab);
  }

  getButtons() {
    return {
      $manageTabBtn: document.getElementById("product-add-menu"),
      $chargeTabBtn: document.getElementById("vending-machine-manage-menu"),
      $purchaseTabBtn: document.getElementById("product-purchase-menu"),
      $addProductBtn: document.getElementById("product-add-button"),
      $chargeBtn: document.getElementById("vending-machine-charge-button"),
      $payBtn: document.getElementById("charge-button"),
      $coinReturnBtn: document.getElementById("coin-return-button"),
    };
  }

  getInputs() {
    return {
      $addName: document.getElementById("product-name-input"),
      $addPrice: document.getElementById("product-price-input"),
      $addQuantity: document.getElementById("product-quantity-input"),
      $chargeCoin: document.getElementById("vending-machine-charge-input"),
      $buyMoney: document.getElementById("charge-input"),
    };
  }

  renderManageTab(productList) {
    const $tablePosition = document.getElementById("product-manage-item-first");
    $tablePosition.innerHTML = "<th>상품명</th><th>가격</th><th>수량</th>";

    productList.map((product) => {
      const $proudct = createElement(
        "tr",
        `
      <td class="product-manage-name">${product.name}</td>
        <td class="product-manage-price">${product.price}</td>
        <td class="product-manage-quantity">${product.quantity}</td>
      `,
        EMPTY,
        "product-manage-item"
      );
      $tablePosition.appendChild($proudct);
    });
  }

  renderChargeTab(ownChange) {
    const $amount = document.getElementById("vending-machine-charge-amount");
    let sum = 0;
    ownChange.map((coin, idx) => {
      const $product = document.getElementById(
        `vending-machine-coin-${COIN[idx]}-quantity`
      );
      $product.innerHTML = `${coin}원`;
      sum += coin * COIN[idx];
    });

    $amount.innerHTML = sum;
  }

  renderUserMoney(userMoney) {
    const $amount = document.getElementById("charge-amount");
    $amount.innerHTML = userMoney;
  }

  // 상품 구매 탭에서의 동적 렌더링
  renderProductTable(productList) {
    const $tablePosition = document.getElementById("product-purchase");
    $tablePosition.innerHTML =
      "<th>상품명</th><th>가격</th><th>수량</th><th>구매</th>";

    productList.map((product, idx) => {
      const $product = createElement(
        "tr",
        `
	      <td data-product-name="${product.name}" class="product-purchase-name">${product.name}</td>
	      <td data-product-price="${product.price}" class="product-purchase-price">${product.price}</td>
	      <td data-product-quantitiy="${product.quantitiy}" class="product-purchase-quantitiy">${product.quantity}</td>
	      <button class="purchase-button">구매하기</button>
        </tr>
        `,
        EMPTY,
        "product-purchase-item"
      );
      $tablePosition.appendChild($product);
    });
  }

  // renderPurchaseTab(vendingMachine) {
  //   const { productList, returnChage, userMoney } = vendingMachine;
  // }
}
