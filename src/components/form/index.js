import createForm from '../utils/createForm.js';
import createBlankNode from '../utils/createBlankNode.js';

class Form {
  constructor(id) {
    this.form = createForm(id);

    this.inputContainer = document.createElement('span');
    this.inputContainer.className = 'input-container';

    this.button = document.createElement('button');
    this.button.addEventListener('click', this.onButtonClick.bind(this));

    this.form.appendChild(this.inputContainer);
    this.form.appendChild(this.button);
  }

  getForm() {
    return this.form;
  }

  appendInput(input) {
    this.inputContainer.appendChild(input);
    this.inputContainer.appendChild(createBlankNode());
  }

  onButtonClick() {}
}

export default Form;
