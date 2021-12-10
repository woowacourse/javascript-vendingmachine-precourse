import { NAV_BUTTON_ITEMS } from './NavButtons.constants.js';
import { createElements, createContainer } from '../CreateElementUtils.js';

export default class NavButtons {
  constructor() {
    this.section = this.constructor.createNavButtons();
  }

  static createNavButtons() {
    const navButtons = createElements(NAV_BUTTON_ITEMS);

    const section = createContainer(
      document.createElement('section'),
      navButtons,
    );
    return section;
  }
}
