import VendingController from './controller.js';
import VendingView from './view.js';
import VendingModel from './model.js';

window.addEventListener('DOMContentLoaded', () => {
  const model = new VendingModel();
  const view = new VendingView(model);
  const controller = new VendingController(model, view);
  controller.app();
});
