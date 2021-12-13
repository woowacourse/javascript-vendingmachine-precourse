import { tabButtonTemplete } from "./utils/dom/tabButtonTemplete.js";
import ProductControlView from "./views/ProductControlView.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.renderTabButton();
    this.productControlView = new ProductControlView($app);
  }

  renderTabButton() {
    this.$app.append(tabButtonTemplete());
  }
}