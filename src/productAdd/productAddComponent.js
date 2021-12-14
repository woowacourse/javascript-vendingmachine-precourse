import ProductAddView from './productAddView.js';
import ValidateUtils from '../utils/validateUtils.js';
import LocalStorageUtils from '../utils/localStorageUtils.js';
import { BUTTON, INPUT } from './productAddViewInfo.js';
import { $ } from '../utils/common.js';

export default class ProductAddComponent {
  constructor() {
    this.productAddView = new ProductAddView();
  }

  render() {
    this.productAddView.render();
    this.configureButton();
  }

  configureButton() {
    $(`#${BUTTON.ID}`).addEventListener('click', this.onClickSubmit);
  }

  onClickSubmit = () => {
    const inputData = this.createInputDataObject();

    if (this.checkValidation(inputData)) {
      this.saveProductAddItem(inputData);
      this.productAddView.makeTable();
      this.productAddView.clearInputForm();
    }
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

  saveProductAddItem(inputData) {
    const newData = this.checkDuplication(inputData);
    LocalStorageUtils.setProductAddItem(newData);
  }

  checkDuplication(inputData) {
    let data = LocalStorageUtils.getProductAddItem();
    const duplicated = data.find((item) => {
      if (item.name === inputData.name && item.price === inputData.price) {
        item.quantity += inputData.quantity;
        return true;
      }
    });
    if (!duplicated) {
      data.push(inputData);
    }
    return data;
  }
}
