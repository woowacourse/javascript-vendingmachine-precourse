import createHeaderPage from './components/header-page.js';
import VendingMachine from './machine.js';
import { checkStorage } from './storage/util.js';
import createEventListeners from './components/eventListeners.js';

createHeaderPage();
const vendingMachine = new VendingMachine();
checkStorage(vendingMachine);
createEventListeners(vendingMachine);