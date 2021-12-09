import LabelContainer from '../../labelContainer/index.js';
import Form from '../../form/index.js';
import Input from '../../input/index.js';
import Button from '../../button/index.js';

import {
  DICT_ID_INPUT,
  DICT_PLACEHOLDER_INPUT,
  DICT_TYPE_INPUT,
  KEY_INPUTS,
  HEADING_ADD,
  ID_FORM_ADD,
  ID_BUTTON_ADD,
  TEXT_BUTTON_ADD,
  ACTION_ADD,
} from './const.js';

import createBlankNode from '../../utils/createBlankNode.js';

class AddFormContainer {
  constructor() {
    this.container = new LabelContainer(HEADING_ADD);
    this.form = undefined;
    this.inputs = {};
    this.button = undefined;

    this.init();
  }

  init() {
    this.form = new Form(ID_FORM_ADD);

    KEY_INPUTS.forEach((inputKey) => {
      const input = new Input(
        DICT_ID_INPUT[inputKey],
        DICT_TYPE_INPUT[inputKey],
        DICT_PLACEHOLDER_INPUT[inputKey]
      );

      this.inputs[inputKey] = input;
      this.form.appendChild(input.getInputElement());
      this.form.appendChild(createBlankNode());
    });

    this.button = new Button(ID_BUTTON_ADD, TEXT_BUTTON_ADD, ACTION_ADD);
    this.form.appendChild(this.button.getButtonElement());

    this.container.appendChild(this.form.getFormElement());
  }

  getContainer() {
    return this.container.getLabelContainerElement();
  }
}

export default AddFormContainer;
