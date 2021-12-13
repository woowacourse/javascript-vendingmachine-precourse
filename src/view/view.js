import {
  COMMON_VIEW,
  MANAGE_VIEW,
  CHARGE_VIEW,
  PURCHASE_VIEW,
} from "./utils/viewDOM.js";

export default class View {
  constructor() {
    this.commonRender();
    this.manageTabRender();
    this.chargeTabRender();
    this.purchaseTabRender();
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
}
