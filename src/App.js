import NavButtons from './NavButtons/view.js';
import AddProducts from './AddProducts/view.js';
import ChargeMachine from './ChargeMachine/view.js';
import PurchaseProducts from './PurchaseProducts/view.js';
import {
  PAGE_TITLE,
  ID_PRODUCT_ADD_TAB,
  ID_MACHINE_TAB,
  ID_PURCHASE_TAB,
  STRING_SECTION_SUFFIX,
} from './globalConstants.js';
import { customCreateElement } from './utils/createElementUtils.js';

export default class App {
  constructor() {
    this.app = document.querySelector('#app');
    this.show = '';
    this.renderInitial();
  }

  renderInitial() {
    const pageTitle = customCreateElement({ tag: 'h1', value: PAGE_TITLE });
    const navButtonsSection = new NavButtons().section;
    [...navButtonsSection.children].forEach((b) => {
      b.addEventListener('click', (e) => {
        this.handleSectionsToggle(e);
      });
    });

    const tab = customCreateElement({ tag: 'section', id: 'tab' });
    this.show = new AddProducts().section;
    tab.appendChild(this.show);

    this.app.appendChild(pageTitle);
    this.app.appendChild(navButtonsSection);
    this.app.appendChild(tab);
  }

  renderSection() {
    this.app.removeChild(this.app.lastChild);
    this.app.appendChild(this.show);
  }

  handleSectionsToggle(e) {
    if (!e) this.show = new AddProducts().section;
    else {
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
}
