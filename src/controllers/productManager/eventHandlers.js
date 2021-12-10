import { getInputValueById } from "../../utils/inputValue.js";
import { isValidInputs } from "./checkInputValues.js";
import { addProduct } from "./productDataController.js";
import { showAfterAddOrPurchaseProduct } from "../../views/common/showAll.js";
import { resetAddProductInput } from "../../views/common/resetInput.js";

const processing = e => {
  e.preventDefault();
  const name = getInputValueById("product-name-input");
  const price = getInputValueById("product-price-input");
  const quantity = getInputValueById("product-quantity-input");
  const errorMessage = isValidInputs(name, price, quantity);

  if (errorMessage === "") {
    addProduct(name, price, quantity);
    showAfterAddOrPurchaseProduct();
  } else {
    alert(errorMessage);
  }
  resetAddProductInput();
};

const onClickProductAddButton = () => {
  const $productAddButton = document.getElementById("product-add-button");

  $productAddButton.addEventListener("click", processing);
};

export { onClickProductAddButton };
