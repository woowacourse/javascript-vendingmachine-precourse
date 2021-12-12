import Form from '../form/index.js';
import createInput from '../utils/createInput.js';

class ChargeForm extends Form {
  constructor(formId) {
    super(formId);
    this.input = undefined;
  }

  initInput({ id, type, placeholder }) {
    this.input = createInput(id, type, placeholder);
    this.appendInput(this.input);
  }

  initButton({ id, innerText }) {
    this.button.id = id;
    this.button.innerText = innerText;
  }
}

export default ChargeForm;
