import Form from '../../../form/index.js';
import {
  ID_FORM_ADD,
  KEY_INPUT_NAME,
  KEY_INPUT_PRICE,
  KEY_INPUT_QUANTITY,
  LIST_KEY_INPUT,
  DICT_ID_INPUT,
  DICT_PLACEHOLDER_INPUT,
  DICT_TYPE_INPUT,
  ID_BUTTON_ADD,
  TEXT_BUTTON_ADD,
} from './const.js';
import createInput from '../../../utils/createInput.js';

import Product from '../../../../model/Product.js';
import { addProduct } from '../../../../library/storage/products.js';

class AddForm extends Form {
  constructor() {
    super(ID_FORM_ADD);
    this.inputs = {};
    this.initInputs();
    this.initButton();
  }

  initInputs() {
    LIST_KEY_INPUT.forEach((inputKey) => {
      const input = createInput(
        DICT_ID_INPUT[inputKey],
        DICT_TYPE_INPUT[inputKey],
        DICT_PLACEHOLDER_INPUT[inputKey]
      );

      this.appendInput(input);
      this.inputs[inputKey] = input;
    });
  }

  initButton() {
    this.button.id = ID_BUTTON_ADD;
    this.button.innerText = TEXT_BUTTON_ADD;
  }

  getInputValueByKey(key) {
    return this.inputs[key].value;
  }

  onButtonClick() {
    const name = this.getInputValueByKey(KEY_INPUT_NAME);
    const price = this.getInputValueByKey(KEY_INPUT_PRICE);
    const quantity = this.getInputValueByKey(KEY_INPUT_QUANTITY);

    const product = new Product(name, price, quantity);
    addProduct(product);
  }
}

export default AddForm;
