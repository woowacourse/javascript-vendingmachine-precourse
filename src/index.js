import createHeaderPage from './components/header-page.js';
import VendingMachine from './machine/machine.js';
import { checkStorage } from './utils/storage.js';
import createEventListeners from './components/eventListeners.js';

createHeaderPage();
const vendingMachine = new VendingMachine();
checkStorage(vendingMachine);
createEventListeners(vendingMachine);