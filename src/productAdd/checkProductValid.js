import { ERROR_MESSAGE } from '../util/constant.js';
import { checkValidBlank, checkProductPriceValid, checkProductQuantityValid, checkProductNameValid } from '../checkValid/checkInputValid.js';

export function checkProductValid($productNameInput, $productPriceInput, $productQuantityInput) {
    //공백 예외처리
    if (!checkValidBlank($productNameInput, $productPriceInput, $productQuantityInput)) {
        alert(ERROR_MESSAGE.BLANK_ERROR);
        return false;
    }
    //수량 예외처리
    else if (!checkProductQuantityValid($productQuantityInput)) {
        alert(ERROR_MESSAGE.PRODUCT_QUANTITY_INPUT_ERROR);
        return false;
    }
    //가격 예외처리
    else if (!checkProductPriceValid($productPriceInput)) {
        alert(ERROR_MESSAGE.PRODUCT_PRICE_INPUT_ERROR);
        return false;
    }
    //상품명 중복 확인
    else if (!checkProductNameValid($productNameInput)) {
        alert(ERROR_MESSAGE.PRODUCT_NAME_DUPLICATE);
        return false;
    }
    return true;
}
