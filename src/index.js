import { ELEMENT_IDS } from './constants.js';
import { htmlToElement } from './utils.js';
import { headerTemplate } from './templates.js';

class VendingMachine {
  constructor() {
    this.mountHeader();
  }

  mountHeader() {
    const app = document.querySelector(`#${ELEMENT_IDS.APP}`);
    const header = htmlToElement(headerTemplate);
    app.appendChild(header);
  }
}

document.addEventListener('DOMContentLoaded', () => new VendingMachine());
