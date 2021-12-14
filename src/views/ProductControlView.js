import ProductControlController from "../controllers/ProductControlController.js";
import { NOTHING, NUMBER } from "../utils/constants.js";
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
      this.product = "";
    });
  }

  renderProduct() {
    const $productListWrap = document.querySelector('#product-control-wrap');
    $productListWrap.innerHTML = "";
    this.localProductList && this.product.length === NUMBER.ZERO ? this.localProductList.map(product => $productListWrap.append(renderProductList(product))): NOTHING,
    this.localProductList && this.product.length > NUMBER.ZERO ? this.localProductList.map(product => $productListWrap.append(renderProductList(product))) : NOTHING,
    !this.localProductList && this.product.length > NUMBER.ZERO ? $productListWrap.append(renderProductList(this.product)) : NOTHING;
  }

}