import { fetchHtmlView } from './fetch.js';

import VendingMachine from './model/vending-machine.js';
import AddProductController from './controller/add-product-controller.js';
import AddProductView from './view/add-product-view.js';
import ChargeMachineView from './view/charge-machine-view.js';
import ChargeMachineController from './controller/charge-machine-controller.js';
import PurchaseProductView from './view/purchase-product-view.js';
import PurchaseProductController from './controller/purchase-product-controller.js';
import EventController from './controller/event-controller.js';

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

// const eventHandler = new EventController(app, addProductController, chargeMachineController, purchaseProductController);
// eventHandler.eventListener();

app.addEventListener('click', function(e) {
    e.preventDefault();

    const idHandlers = {
        "product-add-menu"() { addProductController.onTabClick(); },
        "vending-machine-manage-menu"() { chargeMachineController.onTabClick(); },
        "product-purchase-menu"() { purchaseProductController.onTabClick(); },
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