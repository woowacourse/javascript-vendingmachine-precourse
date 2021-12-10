import NavButtons from './NavButtons/NavButtons.js';
import AddProducts from './AddProducts/AddProducts.js';
import ChargeMachine from './ChargeMachine/ChargeMachine.js';
import PurchaseProducts from './PurchaseProducts/PurchaseProducts.js';
import {
  PAGE_TITLE,
  ID_PRODUCT_ADD_TAB,
  ID_MACHINE_TAB,
  ID_PURCHASE_TAB,
  STRING_SECTION_SUFFIX,
} from './App.constants.js';
import { customCreateElement } from './CreateElementUtils.js';

export default class App {
  constructor() {
    this.app = document.querySelector('#app');
    this.show = new AddProducts().section; // show add product menu on load
    window.addEventListener('load', this.renderInitial.bind(this)); // initial render on page load
  }

  renderInitial() {
    const pageTitle = customCreateElement({ tag: 'h1', value: PAGE_TITLE });
    const navButtonsSection = new NavButtons().section;
    [...navButtonsSection.children].forEach((b) => {
      b.addEventListener('click', (e) => {
        this.handleSectionsToggle(e);
      });
    }); // add event listeners to menu buttons

    this.app.appendChild(pageTitle);
    this.app.appendChild(navButtonsSection);
    this.app.appendChild(this.show);
  }

  // render each section on menu button click
  renderSection() {
    this.app.removeChild(this.app.lastChild);
    this.app.appendChild(this.show);
  }

  // check button and set show property accordingly
  handleSectionsToggle(e) {
    const openTab = `${e.target.id.slice(0, -5)}${STRING_SECTION_SUFFIX}`; // id of section to show
    if (openTab === ID_PRODUCT_ADD_TAB) this.show = new AddProducts().section;
    else if (openTab === ID_MACHINE_TAB) {
      this.show = new ChargeMachine().section;
    } else if (openTab === ID_PURCHASE_TAB) {
      this.show = new PurchaseProducts().section;
    }

    this.renderSection();
  }
}
