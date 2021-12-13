import { COMMON_VIEW, MANAGE_VIEW, CHARGE_VIEW } from "./utils/renderDOM.js";

export default class View {
  constructor() {
    this.commonRender();
    // this.manageTabRender();
    this.chargeTabRender();
  }

  commonRender() {
    const $app = document.getElementById("app");
    $app.innerHTML = COMMON_VIEW;
  }

  manageTabRender() {
    const $manageTab = document.createElement("div");
    const $app = document.getElementById("app");

    $manageTab.innerHTML = MANAGE_VIEW;
    $app.after($manageTab);
  }

  chargeTabRender() {
    const $chargeTab = document.createElement("div");
    const $app = document.getElementById("app");

    $chargeTab.innerHTML = CHARGE_VIEW;
    $app.after($chargeTab);
  }
}
