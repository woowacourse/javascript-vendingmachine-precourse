import { manageProduct } from "../components/manageProduct.js";
import { ID, MANAGE_TAP } from "../utils/constants.js";
import { saveProductsToLocalStorage } from "../utils/utils.js";
import { checkAddProductsInputs } from "../utils/validation.js";
import {
  renderManageProductMenuView,
  renderProduct,
} from "../views/manageProductView.js";

const resetInputs = form => {
  MANAGE_TAP.addProductInputs.forEach(
    input => (form.querySelector(`#${input[ID]}`).value = "")
  );
};

export const onClickManageProductTab = e => {
  event.preventDefault();
  renderManageProductMenuView(manageProduct);
};

export const onClickAddButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const [name, price, quantity] = MANAGE_TAP.addProductInputs.map(
    input => form.querySelector(`#${input[ID]}`).value
  );

  if (checkAddProductsInputs(manageProduct, name, price, quantity)) {
    const newProduct = manageProduct.addProduct(name, price, quantity);
    renderProduct(newProduct);
    saveProductsToLocalStorage(manageProduct);
    resetInputs(form);
  }
};
