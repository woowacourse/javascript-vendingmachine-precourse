import ProductControlController from "../controllers/ProductControlController.js";
import { productControlTemplete, renderProductList } from "../utils/dom/productControlTemplete.js";

export default class ProductControlView extends ProductControlController {

  render() {
    this.proudctControlField.innerHTML = productControlTemplete;
    this.$app.append(this.proudctControlField);
  }

  setEvent() {
    this.proudctControlField.querySelector('#product-add-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.product = [...this.proudctControlField.querySelectorAll('input')].map(v => v.value);
      [...this.proudctControlField.querySelectorAll('input')].map(v => v.value = "");
      this.renderProduct();
    });
  }

  renderProduct() {
    const $productListWrap = document.querySelector('#product-control-wrap');
    this.product.length > 0 && $productListWrap.append(renderProductList(this.product));
  }

}