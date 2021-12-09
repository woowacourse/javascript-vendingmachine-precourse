import createHeading from '../utils/createHeading.js';

class LabelContainer {
  constructor(label) {
    this.wrapper = document.createElement('div');
    this.label = createHeading(2, label);
    this.container = document.createElement('p');

    this.wrapper.appendChild(this.label);
    this.wrapper.appendChild(this.container);
  }

  appendChild(child) {
    this.container.appendChild(child);
  }

  getLabelContainerElement() {
    return this.wrapper;
  }
}

export default LabelContainer;
