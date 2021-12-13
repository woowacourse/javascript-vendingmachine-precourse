import VendingMachineView from './app/views/index.js';
import VendingMachineModel from './app/vendingMachinModel.js';
import VendingMachineController from './app/controllers/index.js';

/* eslint-disable */
const model = new VendingMachineModel();
const view = new VendingMachineView();
const controller = new VendingMachineController({ view, model });
