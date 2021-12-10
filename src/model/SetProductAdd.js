import ProductAdd from './ProductAdd.js';

export default class SetProductAdd {
  constructor(render, product) {
    this.render = render;
    this.product = product;
    this.productAdd = new ProductAdd(this.render);

    this.setProduct();
  }

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
  };
}
