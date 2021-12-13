import { PRODUCT, GAME } from './product.js';

export function makeProduct($productNameInputValue, $productPriceInputValue, $productQuantityInputValue) {
    //클래스 생성
    let product = $productNameInputValue;
    product = new PRODUCT($productNameInputValue, Number($productPriceInputValue), Number($productQuantityInputValue));
    GAME.PRODUCTS.push(product);

    for (let index in GAME.PRODUCTS) {
        if (GAME.PRODUCTS[index].quantity === 0) {
            GAME.PRODUCTS.splice(index, 1);
        }
    }
}
