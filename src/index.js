import { printPage } from './print/printPage.js';
import { useTabButton } from './util/useTabButton.js';
import { addProductList } from './productAdd/addProductList.js';
import { addVendingMachineCharge } from './vendingMachineManage/addVendingMachineCharge.js';
import { purchaseProduct } from './productPurchase/purchaseProduct.js';

printPage();

function gameStart() {
    document.addEventListener('click', function (e) { useTabButton(e); })
    //상품관리 추가하기 버튼 클릭
    const $productAddButton = document.querySelector('#product-add-button');
    $productAddButton.addEventListener('click', addProductList);

    //잔돈충전 충전하기 버튼 클릭
    const $vendingMachineChargeButton = document.querySelector('#vending-machine-charge-button');
    $vendingMachineChargeButton.addEventListener('click', addVendingMachineCharge);

    //상품구매 투입하기 버튼 클릭
    const $chargeButton = document.querySelector('#charge-button');
    $chargeButton.addEventListener('click', purchaseProduct);
}

window.onload = function () {
    gameStart();
}
