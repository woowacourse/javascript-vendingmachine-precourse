import ProductAddView from './productAddView.js';
import { BUTTON } from './productAddViewInfo.js';

export default class ProductAddComponent {
  constructor() {
    this.productAddView = new ProductAddView();
  }

  render() {
    this.productAddView.render();
  }

  configureButton() {
    $(`#${BUTTON.ID}`).addEventListener('click', this.onClickSubmit);
  }

  onClickSubmit = () => {
    const inputData = this.createInputDataObject();
  };

  createInputDataObject() {
    return {
      name: $(`#${inputInfo.productNameInput.id}`).value,
      price: Number($(`#${inputInfo.productPriceInput.id}`).value),
      quantity: Number($(`#${inputInfo.productQuantityInput.id}`).value),
    };
  }
}
