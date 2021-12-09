import ProductAddView from './ProductAddView.js';
import MachineManageView from './MachineManageView.js';
import ProductPurchaseView from './ProductPurchaseView.js';

export default class MenuButtonController {
  static menuButtonEvent() {
    document.addEventListener('click', (e) => {
      const targetId = e.target.id;

      // 나중에 함수로 분리

      if (targetId === 'product-add-menu') {
        ProductAddView.render();
        ProductAddView.addEvent();
      }
      if (targetId === 'vending-machine-manage-menu') {
        MachineManageView.render();
        MachineManageView.addEvent();
      }
      if (targetId === 'product-purchase-menu') {
        ProductPurchaseView.render();
        // 이벤트 리스너 추가
      }
    });
  }
}
