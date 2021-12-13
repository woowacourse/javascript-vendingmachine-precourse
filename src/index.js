import VendingMachineController from './app/vendingMachineController.js';
import VendingMachineView from './app/views/index.js';
import VendingMachineModel from './app/vendingMachinModel.js';

/* eslint-disable */
const model = new VendingMachineModel();
const view = new VendingMachineView();
const controller = new VendingMachineController({ view, model });
