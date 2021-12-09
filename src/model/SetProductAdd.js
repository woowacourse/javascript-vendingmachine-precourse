import ProductAdd from './ProductAdd.js';

export default class SetProductAdd {
  constructor(render) {
    this.render = render;
    this.setProduct();
  }

  setProduct = () => {
    const productAdd = new ProductAdd(this.render);
    productAdd.isValidInputs();
  };
}
