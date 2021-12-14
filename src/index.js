import { Controller } from './controller/controller.js';

localStorage.clear();
const controller = new Controller();
controller.view.setBasicUI(controller.productList.products);