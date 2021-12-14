import { GAME } from '../util/constant.js';
import { printChargeAmount } from '../print/printProductPurchase.js';
import { cleanInputValue } from '../print/cleanInputValue.js';
import { clickPurchaseButton } from './clickPurchaseButton.js';
import { checkChargeInputValid } from './checkProductPurchase.js';
import { clickCoinReturnButton } from './clickCoinReturnButton.js';

export function purchaseProduct() {
    //입력금액 예외처리(살수있는거 없으면 입력못하게 하기)
    const $chargeInput = document.querySelector('#charge-input');
    if (checkChargeInputValid($chargeInput)) {
        //CUSTOMER_CHARGE 객체에 넣기
        GAME.CUSTOMER_CHARGE_TOTAL += Number($chargeInput.value);
        printChargeAmount()
    }
    //입력창 비우기
    cleanInputValue($chargeInput);

    //구매버튼 클릭시
    const $productPurchaseTable = document.querySelector('#product-purchase-table');
    $productPurchaseTable.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            clickPurchaseButton(e)
        }
    })

    //반환하기 클릭시
    const $coninReturnButton = document.querySelector('#coin-return-button');
    $coninReturnButton.addEventListener('click', clickCoinReturnButton)
}
