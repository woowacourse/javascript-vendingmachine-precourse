import { getLocalStorageItem, setLocalStorageItem } from "./localStorageController.js"
import { PRODUCT_KEY } from "../constants/constants.js"

export function clickProductAddButton(e) {
  e.preventDefault();
  const productList = getLocalStorageItem(PRODUCT_KEY);
  const $productNameInput = document.getElementById("product-name-input")
  const $productPriceInput = document.getElementById("product-price-input")
  const $productQuantityInput = document.getElementById("product-quantity-input")

  const newProduct = {
    name: $productNameInput.value,
    price: $productPriceInput.value,
    quantity: $productQuantityInput.value,
  }

  if(productList === null) setLocalStorageItem(PRODUCT_KEY,[newProduct]);
  else setLocalStorageItem(PRODUCT_KEY,[...productList, newProduct]);
}