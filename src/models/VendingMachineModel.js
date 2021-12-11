import Store from '../utils/store.js';

import Key from '../constants/key.js';
import Selector from '../constants/selector.js';

class VendingMachineModel {
  constructor() {
    this.$currentMenu = Store.getLocalStorage(Key.currentMenu)
      ? Store.getLocalStorage(Key.currentMenu)
      : Selector.productAddMenuId;
  }

  getCurrentMenu() {
    return this.$currentMenu;
  }

  setCurrentMenu(menuName) {
    this.$currentMenu = menuName;
    Store.setLocalStorage(Key.currentMenu, menuName);
  }
}

export default VendingMachineModel;
