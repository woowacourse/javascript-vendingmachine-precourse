import VendingMachineSharedModel from '../models/vendingMachineSharedModel.js';
import ProductAddView from '../views/productAddView.js';

class ProductAddController {
  constructor() {
    this.model = new VendingMachineSharedModel();
  }

  mountView() {
    this.view = new ProductAddView();
    this.registerEventListener();
  }

  unmountView() {
    this.view.unmount();
    this.removeEventListener();
  }

  registerEventListener() {
    this.view.$addButton.addEventListener('click', () => this.handleSubmitProductItem());
  }

  removeEventListener() {
    this.view.$addButton = null;
  }

  handleSubmitProductItem() {
    const name = this.view.$nameInput.value;
    const price = this.view.$priceInput.value;
    const quantity = this.view.$quantityInput.value;
    this.model.addProductItem({ name, price, quantity });
  }
}

export default ProductAddController;
