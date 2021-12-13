import { VendingMachineModel } from './model/VendingMachineModel.js';
import { ProductController } from './controller/ProductController.js';
import { ChargeController } from './controller/ChargeController.js';
import { BuyController } from './controller/BuyController.js';
import { CoreView } from './view/CoreView.js';

// 3개의 App을 만들어야할지, 1개의 App에 모두 만들어야 할지.
class App {
  constructor() {
    const model = new VendingMachineModel();
    this.coreView = new CoreView();

    const controllerForProduct = new ProductController(model, this.coreView);
    const controllerForCharge = new ChargeController(model, this.coreView);
    const controllerForBuy = new BuyController(model, this.coreView);
    this.controllerArray = [controllerForProduct, controllerForCharge, controllerForBuy];
    this.triggerAllEvents();
    this.loadAllLocalStorage();
    this.triggerTabEvent();
  }

  triggerAllEvents() {
    this.controllerArray.map((controller) => controller.triggerEvent());
  }

  loadAllLocalStorage() {
    this.controllerArray.map((controller) => controller.loadLocalStorage());
  }

  triggerTabEvent() {
    this.coreView.setOnTabClick(this.onTabClick.bind(this));
  }

  onTabClick(i) {
    this.controllerArray[i].loadLocalStorage();
  }
}

const app = new App();
