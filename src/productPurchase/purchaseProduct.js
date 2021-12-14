import { GAME } from '../util/constant.js';
import { printChargeAmount } from '../print/printProductPurchase.js';
import { cleanInputValue } from '../print/cleanInputValue.js';
import { clickPurchaseButton } from './clickPurchaseButton.js';
import { checkChargeInputValid } from './checkProductPurchase.js';
import { clickCoinReturnButton } from './clickCoinReturnButton.js';

export function purchaseProduct() {
    const $chargeInput = document.querySelector('#charge-input');
    if (checkChargeInputValid($chargeInput)) {
        GAME.CUSTOMER_CHARGE_TOTAL += Number($chargeInput.value);
        printChargeAmount();
    }
    cleanInputValue($chargeInput);

    const $productPurchaseTable = document.querySelector('#product-purchase-table');
    $productPurchaseTable.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            clickPurchaseButton(e);
        }
    })
    const $coninReturnButton = document.querySelector('#coin-return-button');
    $coninReturnButton.addEventListener('click', clickCoinReturnButton);
}
