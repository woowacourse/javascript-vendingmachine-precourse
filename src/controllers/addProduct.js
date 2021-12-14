import { getLocalStorageItem, setLocalStorageItem } from "./localStorageController.js"
import { PRODUCT_KEY } from "../constants/constants.js";
import { rendering } from "../views/render.js";
import { updateState } from "../models/state.js";

export function clickProductAddButton(e) {
  e.preventDefault();
  const productList = getLocalStorageItem(PRODUCT_KEY);
  const $productNameInput = document.getElementById("product-name-input")
  const $productPriceInput = document.getElementById("product-price-input")
  const $productQuantityInput = document.getElementById("product-quantity-input")

  if($productPriceInput.value % 10 !== 0) {
    alert("10의 배수 단위로만 설정할 수 있습니다.");
  }
  else {
  const newProduct = {
    name: $productNameInput.value,
    price: $productPriceInput.value,
    quantity: $productQuantityInput.value,
  }

  if(productList === null) setLocalStorageItem(PRODUCT_KEY,[newProduct]);
  else setLocalStorageItem(PRODUCT_KEY,[...productList, newProduct]);
  
  updateState();
  rendering();
}
}