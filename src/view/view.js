import {
  COMMON_VIEW,
  MANAGE_VIEW,
  CHARGE_VIEW,
  PURCHASE_VIEW,
} from "./utils/viewDOM.js";
import { hideWithID, showWithID } from "./utils/handleDOM.js";

export default class View {
  constructor() {
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
      $chargeBtn: document.getElementById("charge-button"),
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
}
