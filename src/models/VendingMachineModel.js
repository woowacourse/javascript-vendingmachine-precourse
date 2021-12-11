import Store from '../utils/store.js';

import Key from '../constants/key.js';
import Selector from '../constants/selector.js';

class VendingMachineModel {
  getCurrentMenu() {
    return Store.getLocalStorage(Key.currentMenu) || Selector.productAddMenuId;
  }

  setCurrentMenu(menuName) {
    Store.setLocalStorage(Key.currentMenu, menuName);
  }
}

export default VendingMachineModel;
