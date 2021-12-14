import { fetchHtmlView } from './fetch.js';

import VendingMachine from './model/vending-machine.js';
import AddProductController from './controller/add-product-controller.js';
import AddProductView from './view/add-product-view.js';
import ChargeMachineView from './view/charge-machine-view.js';
import ChargeMachineController from './controller/charge-machine-controller.js';
import PurchaseProductView from './view/purchase-product-view.js';
import PurchaseProductController from './controller/purchase-product-controller.js';

function onTabClick(fileName, tabId) {
    fetchHtmlView(fileName)
        .then(view => renderView(view, tabId))
        .catch(err => alert(err));
}

function renderView(view, tabId) {
    document.querySelector("#tab-content").innerHTML = view;
    switch(tabId) {
        case 1: 
            addProuctView.renderAddedProductList(vendingMachine.productList);
            break;
        case 2: 
            chargeMachineView.renderChargedMoney(vendingMachine.chargedMoney);
            chargeMachineView.renderTotalChanges(vendingMachine.chargedChanges);
            break;
        case 3:
            purchaseProductView.renderInputMoney(vendingMachine.inputMoney);
            purchaseProductView.renderProductList(vendingMachine.productList);
            purchaseProductView.renderChanges(vendingMachine.inputChanges);
            break;
        default: 
            alert(`일치하는 탭이 없습니다. ${tabId}`);
            break;
    }
}

// DOM
const app = document.querySelector("#app");
// init
fetchHtmlView('tab.html').then(view => app.innerHTML = view);

const vendingMachine = new VendingMachine();

const addProuctView = new AddProductView();
const addProductController = new AddProductController(vendingMachine, addProuctView);

const chargeMachineView = new ChargeMachineView();
const chargeMachineController = new ChargeMachineController(vendingMachine, chargeMachineView);

const purchaseProductView = new PurchaseProductView();
const purchaseProductController = new PurchaseProductController(vendingMachine, purchaseProductView);

app.addEventListener('click', function(e) {
    e.preventDefault();

    const idHandlers = {
        "product-add-menu"() { onTabClick('product_manage.html', 1); },
        "vending-machine-manage-menu"() { onTabClick('machine_charge.html', 2); },
        "product-purchase-menu"() { onTabClick('product_purchase.html', 3); },
        "product-add-button"() { addProductController.addProduct(); },
        "vending-machine-charge-button"() { chargeMachineController.chargeMoney(); },
        "charge-button"() { purchaseProductController.putMoney(); },
        "coin-return-button"() { purchaseProductController.returnMoney(); },
    };
    const classHandlers = {
        "purchase-button"() { purchaseProductController.purchaseProduct(e.target); },
    };

    if(Object.keys(idHandlers).includes(e.target.id)) idHandlers[e.target.id]();
    else if(Object.keys(classHandlers).includes(e.target.className)) classHandlers[e.target.className]();
});