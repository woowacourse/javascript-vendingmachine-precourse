import { PRODUCT, GAME } from './constant.js';

export function makeProduct($productNameInputValue, $productPriceInputValue, $productQuantityInputValue) {
    let product = $productNameInputValue;
    product = new PRODUCT($productNameInputValue, Number($productPriceInputValue), Number($productQuantityInputValue));
    GAME.PRODUCTS.push(product);

    for (let index in GAME.PRODUCTS) {
        if (GAME.PRODUCTS[index].quantity === 0) {
            GAME.PRODUCTS.splice(index, 1);
        }
    }
}
