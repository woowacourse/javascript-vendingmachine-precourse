import ProductControlController from "../controllers/ProductControlController.js";
import { productControlTemplete, renderProductList } from "../utils/dom/productControlTemplete.js";
import { productAddValiate } from "../utils/validation/productAddEvent.js";

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
      productAddValiate(this.product) &&  this.getProductList(this.product);
    });
  }

  renderProduct() {
    const $productListWrap = document.querySelector('#product-control-wrap');
    $productListWrap.innerHTML = "";
    this.localProductList && this.product.length === 0 ? this.localProductList.map(v => $productListWrap.append(renderProductList(v))) : "",
    this.localProductList && this.product.length > 0 ? this.localProductList.map(v => $productListWrap.append(renderProductList(v))) : "",
    !this.localProductList && this.product.length > 0 ? $productListWrap.append(renderProductList(this.product)) : "";
  }

}