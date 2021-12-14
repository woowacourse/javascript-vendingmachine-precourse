import ProductAddMenuView from "./views/ProductAddMenuView.js";
import VendingMachineManageMenuView from "./views/VendingMachineManageMenuView.js";
import ProductPurchaseMenuView from "./views/ProductPurchaseMenuView.js";
import ProductAddMenuController from "./controller/ProductAddMenuController.js";
import { getData, setData } from "./utils/localStorage.js";

export default class Menu {
  constructor() {
    this.productAddMenuView = new ProductAddMenuView();
    this.vendingMachineManageMenuView = new VendingMachineManageMenuView();
    this.productPurchaseMenuView = new ProductPurchaseMenuView();

    this.ProductAddMenuController = new ProductAddMenuController();
  }

  productAddMenuInitialize() {
    this.productAddMenuView.render(getData("products"));
    this.ProductAddMenuController.initialize();
  }

  vendingMachineManageMenuInitialize() {
    this.vendingMachineManageMenuView.render();
  }

  productPurchaseMenuInitialize() {
    this.productPurchaseMenuView.render();
  }
}
