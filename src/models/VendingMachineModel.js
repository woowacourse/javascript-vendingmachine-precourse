import store from '../utils/store.js';

import STORE_KEY from '../constants/store.js';
import SELECTOR from '../constants/selector.js';

class VendingMachineModel {
  constructor() {
    this.$currentMenu = store.getLocalStorage(STORE_KEY.currentMenu)
      ? store.getLocalStorage(STORE_KEY.currentMenu)
      : SELECTOR.productAddMenuId;
  }

  getCurrentMenu() {
    return this.$currentMenu;
  }

  setCurrentMenu(menuName) {
    this.$currentMenu = menuName;
    store.setLocalStorage(STORE_KEY.currentMenu, menuName);
  }
}

export default VendingMachineModel;
