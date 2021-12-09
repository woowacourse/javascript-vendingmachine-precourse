class Button {
  constructor(id, text, action) {
    this.button = document.createElement('button');
    this.button.id = id;
    this.button.innerText = text;
    this.button.dataset.action = action;
  }

  getButtonElement() {
    return this.button;
  }
}

export default Button;
