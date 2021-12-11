import App from './view/app.js';
import VendingMachine from './model/vending-machine.js';
import Controller from './controllers/controller.js';

window.addEventListener('DOMContentLoaded', () => {
  const model = new VendingMachine();
  const view = new App();
  const controller = new Controller(model, view);
});
