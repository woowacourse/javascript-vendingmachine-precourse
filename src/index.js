import { VendingMachineModel } from './model/VendingMachineModel.js';
import { ProductController } from './controller/ProductController.js';
import { BalanceController } from './controller/BalanceController.js';
import { BuyController } from './controller/BuyController.js';
import { CoreView } from './view/CoreView.js';

// 3개의 App을 만들어야할지, 1개의 App에 모두 만들어야 할지.
class App {
  constructor() {
    const model = new VendingMachineModel();
    const commonView = new CoreView();

    const controllerForProduct = new ProductController(model, commonView);
    const controllerForBalance = new BalanceController(model, commonView);
    const controllerForBuy = new BuyController(model, commonView);
  }
}

const app = new App();
