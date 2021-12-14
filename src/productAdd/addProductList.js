import { checkProductValid } from './checkProductValid.js';
import { makeProduct } from '../util/makeProduct.js';
import { addProductAddTable } from '../print/printProductAdd.js';
import { cleanInputValue } from '../print/cleanInputValue.js'
import { addProductPurchaseTable } from '../print/printProductPurchase.js'

export function addProductList() {
    const $productNameInput = document.querySelector('#product-name-input');
    const $productPriceInput = document.querySelector('#product-price-input');
    const $productQuantityInput = document.querySelector('#product-quantity-input');

    if (checkProductValid($productNameInput, $productPriceInput, $productQuantityInput)) {
        makeProduct($productNameInput.value, $productPriceInput.value, $productQuantityInput.value);

        addProductAddTable();
        addProductPurchaseTable();
    }
    cleanInputValue($productNameInput, $productPriceInput, $productQuantityInput);
}
