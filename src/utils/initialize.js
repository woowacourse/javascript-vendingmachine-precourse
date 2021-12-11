import { STORAGE_KEY } from '../constants.js';
import * as storage from './storage.js';
import initializeContentComponent from './initializeContentComponent.js';
import attachMenuTabEvent from '../event/attachMenuTabEvent.js';
import renderAppTemplate from '../dom/renderAppTemplate.js';

const initialize = (vendingMachine) => {
  renderAppTemplate();
  attachMenuTabEvent(vendingMachine);

  vendingMachine.initialize();
  const menu = storage.find(STORAGE_KEY.menu);
  if (menu) {
    initializeContentComponent(menu, vendingMachine);
  }
};

export default initialize;
