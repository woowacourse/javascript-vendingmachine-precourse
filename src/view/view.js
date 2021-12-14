import {
  COMMON_VIEW,
  MANAGE_VIEW,
  CHARGE_VIEW,
  PURCHASE_VIEW,
  TABLE_HEADER,
  TABS,
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

    this.tab = TABS;
    this.buttons = this.getButtons();
    this.inputs = this.getInputs();

    hideWithID(TABS[0]);
    hideWithID(TABS[1]);
    hideWithID(TABS[2]);
  }

  showSelectedID(tabId) {
    this.tab.forEach((id) => {
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

    $manageTab.id = TABS[0];
    $manageTab.innerHTML = MANAGE_VIEW;
    $app.after($manageTab);
  }

  chargeTabRender() {
    const $chargeTab = document.createElement("div");
    const $app = document.getElementById("app");

    $chargeTab.id = TABS[1];
    $chargeTab.innerHTML = CHARGE_VIEW;
    $app.after($chargeTab);
  }

  purchaseTabRender() {
    const $purchaseTab = document.createElement("div");
    const $app = document.getElementById("app");

    $purchaseTab.id = TABS[2];
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

  // 상품 관리 탭 렌더링
  renderManageTab(productList) {
    const $tablePosition = document.getElementById("product-manage-item-first");
    $tablePosition.innerHTML = TABLE_HEADER.MANAGE;
    productList.forEach((product) => {
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

  // 잔돈 충전 탭 렌더링
  renderChargeTab(ownChange) {
    const $amount = document.getElementById("vending-machine-charge-amount");
    let sum = 0;

    ownChange.forEach((coin, idx) => {
      const $product = document.getElementById(
        `vending-machine-coin-${COIN[idx]}-quantity`
      );
      $product.innerHTML = `${coin}개`;
      sum += coin * COIN[idx];
    });

    $amount.innerHTML = sum;
  }

  // 상품 구매 탭 보유 금액 렌더링
  renderUserMoney(userMoney) {
    const $amount = document.getElementById("charge-amount");
    $amount.innerHTML = userMoney;
  }

  // 상품 구매 탭 표 렌더링
  renderProductTable(productList) {
    const $tablePosition = document.getElementById("product-purchase");
    $tablePosition.innerHTML = TABLE_HEADER.PURCHASE;

    productList.forEach((product) => {
      const $product = createElement(
        "tr",
        `
	      <td data-product-name="${product.name}" class="product-purchase-name">${product.name}</td>
	      <td data-product-price="${product.price}" class="product-purchase-price">${product.price}</td>
	      <td data-product-quantity="${product.quantity}" class="product-purchase-quantity">${product.quantity}</td>
	      <button class="purchase-button">구매하기</button>
        </tr>
        `,
        EMPTY,
        "product-purchase-item"
      );
      $tablePosition.appendChild($product);
    });
  }

  // 상품 구매 탭 잔돈 표 렌더링
  renderReturn(vendingMachine) {
    const { returnMoney } = vendingMachine;

    returnMoney.forEach((coin, idx) => {
      const $getChange = document.getElementById(`coin-${COIN[idx]}-quantity`);
      $getChange.innerHTML = `${coin}개`;
    });
  }
}
