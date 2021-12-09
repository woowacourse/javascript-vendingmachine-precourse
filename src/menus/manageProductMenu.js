import { vendingMachine } from "../components/vendingMachine.js";
import { renderProduct } from "../views/manageProductView.js";

export const onClickAddButton = event => {
  event.preventDefault();
  const parent = event.target.parentElement;
  const nameInput = parent.querySelector("#product-name-input");
  const priceInput = parent.querySelector("#product-price-input");
  const quantityInput = parent.querySelector("#product-quantity-input");

  const newProduct = vendingMachine.addProduct(
    nameInput.value,
    priceInput.value,
    quantityInput.value
  );
  renderProduct(newProduct);
};
