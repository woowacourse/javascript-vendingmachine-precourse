import ProductAddView from './ProductAddView.js';
import MachineManageView from './MachineManageView.js';
import ProductPurchaseView from './ProductPurchaseView.js';

export default class MenuButtonController {
  static menuButtonEvent() {
    document.addEventListener('click', (e) => {
      const targetId = e.target.id;

      if (targetId === 'product-add-menu') {
        ProductAddView.render();
        ProductAddView.addEvent();
      }
      if (targetId === 'vending-machine-manage-menu') {
        MachineManageView.render();
      }
      if (targetId === 'product-purchase-menu') {
        ProductPurchaseView.render();
      }
    });
  }
}
