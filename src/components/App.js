import showMain from './showMain.js';
import ProductAddView from './ProductAddView.js';
import MachineManageView from './MachineManageView.js';
import ProductPurchaseView from './ProductPurchaseView.js';

export default class App {
  constructor() {
    this.main = showMain();

    document
      .getElementById('product-add-menu')
      .addEventListener('click', (e) => {
        e.preventDefault();
        ProductAddView.render();
      });

    document
      .getElementById('vending-machine-manage-menu')
      .addEventListener('click', (e) => {
        e.preventDefault();
        MachineManageView.render();
      });

    document
      .getElementById('product-purchase-menu')
      .addEventListener('click', (e) => {
        e.preventDefault();
        ProductPurchaseView.render();
      });
  }
}
