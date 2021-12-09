class Input {
  constructor(id, type, placeholder) {
    this.input = document.createElement('input');
    this.input.id = id;
    this.input.type = type;
    this.input.placeholder = placeholder;
  }

  getInputElement() {
    return this.input;
  }

  getInputValue() {
    return this.input.value;
  }
}

export default Input;
