import { $ } from '../dom/dom.js';

import renderProductAddMenu from '../views/renderProductAddMenu.js';
import renderVendingMachineManageMenu from '../views/renderVendingMachineManageMenu.js';
import renderProductPurchaseMenu from '../views/renderProductPurchaseMenu.js';

import controlVendingMachineManage from './controlVendingMachineManage.js';
import controlProductAdd from './controlProductAddManage.js';
import controlProductPurchase from './controlProductPurchase.js';

export default function controller() {
  $('#product-add-menu').addEventListener('click', () => {
    renderProductAddMenu();
    controlProductAdd();
  });
  $('#vending-machine-manage-menu').addEventListener('click', () => {
    renderVendingMachineManageMenu();
    controlVendingMachineManage();
  });
  $('#product-purchase-menu').addEventListener('click', () => {
    renderProductPurchaseMenu();
    controlProductPurchase();
  });
}
