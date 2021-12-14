import { getData, setData } from "../utils/localStorage.js";
import ProductAddMenuView from "../views/ProductAddMenuView.js";

export default class ProductAddMenuController {
  constructor() {
    this.productAddMenuView = new ProductAddMenuView();
  }

  initialize() {
    this.products = getData("products");
    this.btnClickEvent();
  }

  btnClickEvent() {
    const productAddButton = document.querySelector("#product-add-button");
    productAddButton.addEventListener(
      "click",
      this.onClickProductAddButton.bind(this)
    );
  }

  onClickProductAddButton(event) {
    event.preventDefault();
    const productNameInput = document.querySelector("#product-name-input");
    const productPriceInput = document.querySelector("#product-price-input");
    const productQuantityInput = document.querySelector(
      "#product-quantity-input"
    );
    this.products.push({
      name: productNameInput.value,
      price: productPriceInput.value,
      quantity: productQuantityInput.value,
    });
    setData("products", this.products);
    this.productAddMenuView.render(getData("products"));
  }
}
//localStorage.setItem('json', JSON.stringify([{"name" : "콜라", "price" : "1500", "quantity" : 20}, {"name" : "사이다", "price" : "1500", "quantity" : 20}]))
