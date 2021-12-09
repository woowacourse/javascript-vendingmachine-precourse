class Form {
  constructor(id) {
    this.form = document.createElement('form');
    this.form.id = id;
  }

  appendChild(child) {
    this.form.appendChild(child);
  }

  getFormElement() {
    return this.form;
  }
}

export default Form;
