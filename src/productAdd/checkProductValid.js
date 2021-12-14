import { ERROR_MESSAGE } from '../util/constant.js';
import { checkValidBlank, checkProductPriceValid, checkProductQuantityValid, checkProductNameValid } from '../checkValid/checkInputValid.js';

export function checkProductValid($productNameInput, $productPriceInput, $productQuantityInput) {
    if (!checkValidBlank($productNameInput, $productPriceInput, $productQuantityInput)) {
        alert(ERROR_MESSAGE.BLANK_ERROR);
        return false;
    }
    else if (!checkProductQuantityValid($productQuantityInput)) {
        alert(ERROR_MESSAGE.PRODUCT_QUANTITY_INPUT_ERROR);
        return false;
    }
    else if (!checkProductPriceValid($productPriceInput)) {
        alert(ERROR_MESSAGE.PRODUCT_PRICE_INPUT_ERROR);
        return false;
    }
    else if (!checkProductNameValid($productNameInput)) {
        alert(ERROR_MESSAGE.PRODUCT_NAME_DUPLICATE);
        return false;
    }
    return true;
}
