import createHeaderPage from './components/header-page.js';
import Controller from './machine/controller.js';
import { checkStorage, loadStorage, updateStorage } from './utils/storage.js';
import createEventListeners from './components/eventListeners.js';
import VendingMachine from './machine/vending-machine.js'

createHeaderPage();

const vendingMachine = new VendingMachine();
if(checkStorage()){
    loadStorage(vendingMachine);
}else {
    updateStorage(vendingMachine);
};

const controller = new Controller();
createEventListeners(controller);