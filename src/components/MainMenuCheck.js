import ProductAddView from './ProductAddView.js';
import MachineManageView from './MachineManageView.js';
import ProductPurchaseView from './ProductPurchaseView.js';
import ProductAddEvent from './ProductAddEvent.js';
import MachineManageEvent from './MachineManageEvent.js';
import ProductPurchaseEvent from './ProductPurchaseEvent.js';

export default class MainMenuCheck {
    static checkFirstMenu(targetId) {
        if (targetId === 'product-add-menu') {
            ProductAddView.render();
            // ProductAddView.addProductAddEvent();
            ProductAddEvent.addEvent();
        }
    }
    
    static checkSecondMenu(targetId) {
        if (targetId === 'vending-machine-manage-menu') {
            MachineManageView.render();
            // MachineManageView.addMachineChargeEvent();
            MachineManageEvent.addEvent();
        }
    }

    static checkThirdMenu(targetId) {
        if (targetId === 'product-purchase-menu') {
            ProductPurchaseView.render();
            // ProductPurchaseView.addUserChargeEvent();
            ProductPurchaseEvent.addEvent();
            // ProductPurchaseView.addReturnEvent();
            
        }
    }
}