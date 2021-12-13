import { tabButtonTemplete } from "./utils/dom/tabButtonTemplete.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.renderTabButton();
  }

  renderTabButton() {
    this.$app.append(tabButtonTemplete());
  }
}