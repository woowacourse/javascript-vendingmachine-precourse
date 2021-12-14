import Component from "../common/Component.js";
import { mainTemplate } from "../common/templates.js";
import VendingMachineManageController from "../controller/VendingMachineManageController.js";
import ProductAddController from "../controller/ProductAddController.js";
import ProductPurhcaseController from "../controller/ProductPurchaseController.js";
import { $ } from "../common/dom.js";
import VendingMachineManageView from "./VendingMachineManageView.js";
import ProductAddView from "./ProductAddView.js";
import ProductPurchaseView from "./ProductPurchaseView.js";

class App extends Component {
  constructor() {
    super();
    this.initViews();
    this.render();
    this.setEvent();
    this.initControllers();
  }

  initViews() {
    this.productAddView = new ProductAddView();
    this.vendingMachineManageView = new VendingMachineManageView();
    this.productPurchaseView = new ProductPurchaseView();
  }

  initControllers() {
    this.productAddController = new ProductAddController(this.productAddView);
    this.vendingMachineManageController = new VendingMachineManageController(
      this.vendingMachineManageView
    );
    this.productPurchaseController = new ProductPurhcaseController(
      this.productPurchaseView
    );
  }

  insertComponent(view, id) {
    const $div = document.createElement("div");
    $div.id = id;
    $div.innerHTML = view.getTemplate();
    $("main").append($div);
    $div.style.display = "none";
  }

  render() {
    $("#app").innerHTML = this.getTemplate();
    this.insertComponent(this.productAddView, "product-add-container");
    this.insertComponent(
      this.vendingMachineManageView,
      "vending-machine-manage-container"
    );
    this.insertComponent(
      this.productPurchaseView,
      "product-purchase-container"
    );
    this.productAddView.render();
    this.show("#product-add-container");
  }

  getTemplate() {
    return mainTemplate;
  }

  setEvent() {
    this.onCLickEvent();
    this.onSubmitEvent();
  }

  seletComponent($seletor) {
    const containerList = [
      "#product-add-container",
      "#vending-machine-manage-container",
      "#product-purchase-container",
    ];

    containerList.forEach((el) => {
      this.hide(el);
    });

    this.show($seletor);
  }

  show(selector) {
    document.querySelector(selector).style.display = "block";
  }

  hide(selector) {
    document.querySelector(selector).style.display = "none";
  }

  onCLickEvent() {
    $("#product-add-menu").addEventListener("click", () => {
      this.productAddView.render();
      this.seletComponent("#product-add-container");
    });
    $("#vending-machine-manage-menu").addEventListener("click", () => {
      this.vendingMachineManageView.render();
      this.seletComponent("#vending-machine-manage-container");
    });
    $("#product-purchase-menu").addEventListener("click", () => {
      this.productPurchaseView.render();
      this.seletComponent("#product-purchase-container");
    });
  }

  onSubmitEvent() {
    document.querySelectorAll("form").forEach((form) =>
      addEventListener("submit", (e) => {
        e.preventDefault();
      })
    );
  }
}

export default App;
