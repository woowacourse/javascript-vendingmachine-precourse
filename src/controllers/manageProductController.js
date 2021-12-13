import { manageProduct } from "../components/manageProduct.js";
import { ID } from "../assets/constants/public.js";
import { MANAGE_TAP } from "../assets/constants/manageTap.js";
import { saveProductsToLocalStorage } from "../assets/utils/utils.js";
import { checkAddProductsInputs } from "../assets/validations/manageTapValidation.js";
import {
  renderManageProductMenuView,
  renderProduct,
} from "../views/manageProductView.js";

const resetInputs = form => {
  MANAGE_TAP.ADD_PRODUCT_INPUTS.forEach(
    input => (form.querySelector(`#${input[ID]}`).value = "")
  );
};

const add = (form, name, price, quantity) => {
  const newProduct = manageProduct.addProduct(name, price, quantity);
  renderProduct(newProduct);
  saveProductsToLocalStorage(manageProduct);
  resetInputs(form);
};

export const onClickManageProductTab = e => {
  event.preventDefault();
  manageProduct.loadFromLocalStorage();
  renderManageProductMenuView(manageProduct);
};

export const onClickAddButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const [name, price, quantity] = MANAGE_TAP.ADD_PRODUCT_INPUTS.map(
    input => form.querySelector(`#${input[ID]}`).value
  );

  if (checkAddProductsInputs(manageProduct, name, price, quantity)) {
    add(form, name, price, quantity);
  }
};
