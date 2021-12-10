import ProductAdd from './ProductAdd.js';

export default class SetProductAdd {
  constructor(render) {
    this.render = render;
    this.productAdd = new ProductAdd(this.render);
    this.productName = '';
    this.productPrice = 0;
    this.productQuantity = 0;

    this.setProduct();
  }

  getProductInputs = () => {
    [this.productName, this.productPrice, this.productQuantity] = this.productAdd.getInputs();
  };

  renderProduct = () =>
    this.render.productAddManageTableTemplate(this.productName, this.productPrice, this.productQuantity);

  setProduct = () => {
    if (!this.productAdd.isValidInputs()) {
      return;
    }
    this.getProductInputs();
    this.renderProduct();
  };
}
