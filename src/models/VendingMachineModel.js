import Store from '../utils/store.js';

import STORAGE_KEY from '../constants/key.js';
import SELECTOR from '../constants/selector.js';

class VendingMachineModel {
  getCurrentMenu() {
    return Store.getLocalStorage(STORAGE_KEY.currentMenu) || SELECTOR.productAddMenuId;
  }

  setCurrentMenu(menuName) {
    Store.setLocalStorage(STORAGE_KEY.currentMenu, menuName);
  }
}

export default VendingMachineModel;
