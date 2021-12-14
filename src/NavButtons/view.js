import { NAV_BUTTON_ITEMS } from './constants.js';
import {
  createElements,
  createContainer,
} from '../utils/createElementUtils.js';

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
