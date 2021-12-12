import ProductAddView from '../ProductAdd/ProductAddView.js';
import MachineManageView from '../MacineManage/MachineManageView.js';
import ProductPurchaseView from '../ProductPurchase/ProductPurchaseView.js';
import ProductAddEvent from '../ProductAdd/ProductAddEvent.js';
import MachineManageEvent from '../MacineManage/MachineManageEvent.js';
import ProductPurchaseEvent from '../ProductPurchase/ProductPurchaseEvent.js';

export default class MainMenuCheck {
    static checkFirstMenu(targetId) {
        if (targetId === 'product-add-menu') {
            ProductAddView.render();
            ProductAddEvent.addEvent();
        }
    }
    
    static checkSecondMenu(targetId) {
        if (targetId === 'vending-machine-manage-menu') {
            MachineManageView.render();
            MachineManageEvent.addEvent();
        }
    }

    static checkThirdMenu(targetId) {
        if (targetId === 'product-purchase-menu') {
            ProductPurchaseView.render();
            ProductPurchaseEvent.addEvent();
        }
    }
}