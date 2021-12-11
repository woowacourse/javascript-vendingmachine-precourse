import ProductAddView from './ProductAddView.js';
import MachineManageView from './MachineManageView.js';
import ProductPurchaseView from './ProductPurchaseView.js';

export default class MainMenuCheck {
    static checkFirstMenu(targetId) {
        if (targetId === 'product-add-menu') {
            ProductAddView.render();
            ProductAddView.addProductAddEvent();
        }
    }
    
    static checkSecondMenu(targetId) {
        if (targetId === 'vending-machine-manage-menu') {
            MachineManageView.render();
            MachineManageView.addMachineChargeEvent();
        }
    }

    static checkThirdMenu(targetId) {
        if (targetId === 'product-purchase-menu') {
            ProductPurchaseView.render();
            ProductPurchaseView.addUserChargeEvent();
            ProductPurchaseView.addReturnEvent();
        }
    }
}