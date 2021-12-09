import { vendingMachine } from "../components/vendingMachine.js";
import { checkAddProductsInputs } from "../utils/validation.js";
import { renderProduct } from "../views/manageProductView.js";

export const onClickAddButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const name = form.querySelector("#product-name-input").value;
  const price = form.querySelector("#product-price-input").value;
  const quantity = form.querySelector("#product-quantity-input").value;

  if (checkAddProductsInputs(name, price, quantity)) {
    addProductToVendingMachine(name, price, quantity);
    resetInputs(form);
  }
};

const addProductToVendingMachine = (name, price, quantity) => {
  const newProduct = vendingMachine.addProduct(name, price, quantity);
  renderProduct(newProduct);
};

const resetInputs = form => {
  const nameInput = form.querySelector("#product-name-input");
  const priceInput = form.querySelector("#product-price-input");
  const quantityInput = form.querySelector("#product-quantity-input");

  nameInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";
};
