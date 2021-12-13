import ProductPurchaseController from "../controllers/ProductPurchaseController.js";
import { productPurchaseTemplete } from "../utils/dom/productPurchaseTemplete.js";

export default class ProductPurchaseView extends ProductPurchaseController {

  render() {
    this.productPurchaseField.innerHTML = productPurchaseTemplete;
    this.$app.append(this.productPurchaseField);
  }

}