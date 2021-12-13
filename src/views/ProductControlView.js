import ProductControlController from "../controllers/ProductControlController.js";
import { productControlTemplete } from "../utils/dom/productControlTemplete.js";

export default class ProductControlView extends ProductControlController {

  render() {
    this.proudctControlField.innerHTML = productControlTemplete;
    this.$app.append(this.proudctControlField);
  }

}