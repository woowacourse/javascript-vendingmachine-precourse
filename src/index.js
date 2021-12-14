import createHeaderPage from './components/header-page.js';
import Controller from './Logic/controller.js';
import { checkStorage, loadStorage, updateStorage } from './utils/storage.js';
import createEventListeners from './components/eventListeners.js';
import VendingMachine from './Model/vending-machine.js'
import { render } from './View/render.js'
createHeaderPage();

const vendingMachine = new VendingMachine();
if(checkStorage()){
    loadStorage(vendingMachine);
}else {
    updateStorage(vendingMachine);
};

const controller = new Controller();
render(vendingMachine, controller);
createEventListeners(controller);

