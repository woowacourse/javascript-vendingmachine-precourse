import { vendingMachine } from "../components/vendingMachine.js";
import { MANAGE_TAP } from "../utils/constants.js";
import { saveToLocalStorage } from "../utils/utils.js";
import { checkAddProductsInputs } from "../utils/validation.js";
import { renderProduct } from "../views/manageProductView.js";

const resetInputs = form => {
  MANAGE_TAP.addProductInputs.forEach(
    input => (form.querySelector(`#${input[1]}`).value = "")
  );
};

export const onClickAddButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const [name, price, quantity] = MANAGE_TAP.addProductInputs.map(
    input => form.querySelector(`#${input[1]}`).value
  );

  if (checkAddProductsInputs(name, price, quantity)) {
    const newProduct = vendingMachine.addProduct(name, price, quantity);
    renderProduct(newProduct);
    saveToLocalStorage(vendingMachine);
    resetInputs(form);
  }
};
