import CoinStorageView from "./coinStorageView.js";

export default class CoinStorageController {
  constructor() {
    this.view = new CoinStorageView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.view.renderInputForm(this.$container);
  };
}
