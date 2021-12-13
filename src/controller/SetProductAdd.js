import ProductAdd from '../model/ProductAdd.js';
import { DOM } from '../utils/constant.js';

export default class SetProductAdd {
  constructor(render, product) {
    this.render = render;
    this.product = product;
    this.productAdd = new ProductAdd(this.render);
  }

  // initializeInputs = () => {
  //   const $productNameInput = document.querySelector(DOM.$PRODUCT_NAME_INPUT);
  //   const $productPriceInput = document.querySelector(DOM.$PRODUCT_PRICE_INPUT);
  //   const $productQuantityInput = document.querySelector(DOM.$PRODUCT_QUANTITY_INPUT);
  //   $productNameInput.value = '';
  //   $productPriceInput.value = '';
  //   $productQuantityInput.value = '';
  // };

  getProductInputs = () => {
    this.product.setInformation(this.productAdd.getInputs());
  };

  renderProduct = () => {
    const [productName, productPrice, productQuantity] = this.product.getInformation();
    this.render.productAddManageTableTemplate(productName, productPrice, productQuantity);
  };

  setProduct = () => {
    if (!this.productAdd.isValidInputs()) {
      return;
    }

    this.getProductInputs();
    this.renderProduct();
    // this.initializeInputs();
  };
}
