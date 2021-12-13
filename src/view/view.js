import { COMMON_VIEW, MANAGE_VIEW } from "./utils/renderDOM.js";

export default class View {
  constructor() {
    this.commonRender();
    this.manageTabRener();
  }

  commonRender() {
    const $app = document.getElementById("app");
    $app.innerHTML = COMMON_VIEW;
  }

  manageTabRener() {
    const $manageTab = document.createElement("div");
    const $app = document.getElementById("app");
    $manageTab.innerHTML = MANAGE_VIEW;
    $app.after($manageTab);
  }
}
