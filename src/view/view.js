import { COMMON_VIEW } from "./utils/renderDOM.js";

export default class View {
  constructor() {
    this.commonRender();
  }

  commonRender() {
    const $app = document.getElementById("app");
    $app.innerHTML = COMMON_VIEW;
  }
}
