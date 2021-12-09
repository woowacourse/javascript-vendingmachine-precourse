import AddFormContainer from './addFormContainer/index.js';

import { ACTION_ADD } from './addFormContainer/const.js';

class AddPanel {
  constructor() {
    this.content = document.createElement('div');
    this.addFormContainer = new AddFormContainer();

    this.content.appendChild(this.addFormContainer.getContainer());
    this.content.onclick = this.onClick.bind(this);
  }

  getContent() {
    return this.content;
  }

  [ACTION_ADD](e) {
    e.preventDefault();
    console.log(this.content);
  }

  onClick(event) {
    const { action } = event.target.dataset;

    if (action) {
      this[action](event);
    }
  }
}

export default AddPanel;
