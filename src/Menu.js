import ProductAddMenuView from "./views/ProductAddMenuView.js";
import VendingMachineManageMenuView from "./views/VendingMachineManageMenuView.js";
import ProductPurchaseMenuView from "./views/ProductPurchaseMenuView.js";
import ProductAddMenuController from "./controller/ProductAddMenuController.js";
import VendingMachineManageMenuController from "./controller/VendingMachineManageMenuController.js";
import ProductPurchaseMenuController from "./controller/ProductPurchaseMenuController.js";
import { getData, setData } from "./utils/localStorage.js";

export default class Menu {
  constructor() {
    this.productAddMenuView = new ProductAddMenuView();
    this.vendingMachineManageMenuView = new VendingMachineManageMenuView();
    this.productPurchaseMenuView = new ProductPurchaseMenuView();

    this.ProductAddMenuController = new ProductAddMenuController();
    this.vendingMachineManageMenuController =
      new VendingMachineManageMenuController();
    this.productPurchaseMenuController = new ProductPurchaseMenuController();
  }

  productAddMenuInitialize() {
    this.productAddMenuView.render(getData("products"));
    this.ProductAddMenuController.initialize();
  }

  vendingMachineManageMenuInitialize() {
    this.vendingMachineManageMenuView.render(getData("coins"));
    this.vendingMachineManageMenuController.initialize();
  }

  productPurchaseMenuInitialize() {
    this.productPurchaseMenuView.render(getData("products"), getData("money"));
    this.productPurchaseMenuController.initialize();
  }
}