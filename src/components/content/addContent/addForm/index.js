import Form from '../../../form/index.js';
import {
  DICT_ID_INPUT,
  DICT_PLACEHOLDER_INPUT,
  DICT_TYPE_INPUT,
  ID_BUTTON_ADD,
  ID_FORM_ADD,
  LIST_KEY_INPUT,
  TEXT_BUTTON_ADD,
} from './const.js';
import createInput from '../../../utils/createInput.js';

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

  onButtonClick() {
    console.log('on button to add product clicked');
  }
}

export default AddForm;
