import ProductAddView from './productAddView.js';
import ValidateUtils from '../utils/validateUtils.js';
import { BUTTON, INPUT } from './productAddViewInfo.js';
import { $ } from '../utils/common.js';

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
      name: $(`#${INPUT.NAME.ID}`).value,
      price: Number($(`#${INPUT.PRICE.ID}`).value),
      quantity: Number($(`#${INPUT.QUANTITY.ID}`).value),
    };
  }

  checkValidation(inputData) {
    return (
      ValidateUtils.checkInputName(inputData.name) &&
      ValidateUtils.checkInputPrice(inputData.price) &&
      ValidateUtils.checkInputQuantity(inputData.quantity)
    );
  }
}
