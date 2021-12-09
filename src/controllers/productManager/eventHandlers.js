import { getInputValueById } from "../common/getInputValue.js";
import { isValidInputs } from "./checkInputValues.js";
import { addProduct } from "./productDataController.js";
import { resetAddProductInput } from "../../views/productManager/resetInput.js";
import { showAll } from "../../views/common/showAll.js";

const processing = e => {
  e.preventDefault();
  const name = getInputValueById("product-name-input");
  const price = getInputValueById("product-price-input");
  const quantity = getInputValueById("product-quantity-input");
  const errorMessage = isValidInputs(name, price, quantity);

  if (errorMessage === "") {
    addProduct(name, price, quantity);
    showAll();
    resetAddProductInput();
  } else {
    alert(errorMessage);
  }
};

const onClickProductAddButton = () => {
  const $productAddButton = document.getElementById("product-add-button");

  $productAddButton.addEventListener("click", processing);
};

export { onClickProductAddButton };
