import { VendingMachineModel } from './model/VendingMachineModel.js';
import { ProductController } from './controller/ProductController.js';
import { ChargeController } from './controller/ChargeController.js';
import { BuyController } from './controller/BuyController.js';
import { CoreView } from './view/CoreView.js';

// 3개의 App을 만들어야할지, 1개의 App에 모두 만들어야 할지.
class App {
  constructor() {
    const model = new VendingMachineModel();
    const coreView = new CoreView();

    const controllerForProduct = new ProductController(model, coreView);
    const controllerForCharge = new ChargeController(model, coreView);
    const controllerForBuy = new BuyController(model, coreView);
  }
}

const app = new App();
