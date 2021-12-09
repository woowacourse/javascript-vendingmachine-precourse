import { VendingMachineModel } from './model/VendingMachineModel.js';
import { BuyView } from './view/BuyView.js';
import { ProductView } from './view/ProductView.js';
import { BalanceView } from './view/BalanceView.js';
import { ProductController } from './controller/ProductController.js';
import { BalanceController } from './controller/BalanceController.js';
import { BuyController } from './controller/BuyController.js';

// 3개의 App을 만들어야할지, 1개의 App에 모두 만들어야 할지.
class App {
  constructor() {
    const model = new VendingMachineModel();
    const viewForProduct = new ProductView();
    const viewForBalance = new BalanceView();
    const viewForBuy = new BuyView();

    const controllerForProduct = new ProductController(model, viewForProduct);
    const controllerForBalance = new BalanceController(model, viewForBalance);
    const controllerForBuy = new BuyController(model, viewForBuy);
  }
}

const app = new App();
