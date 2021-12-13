import { tabButtonTemplete } from "./utils/dom/tabButtonTemplete.js";
import ChargeAddView from "./views/ChargeAddView.js";
import ProductControlView from "./views/ProductControlView.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.renderTabButton();
    this.productControlView = new ProductControlView($app);
    this.chargeAddView = new ChargeAddView($app);
  }

  renderTabButton() {
    this.$app.append(tabButtonTemplete());
  }
}