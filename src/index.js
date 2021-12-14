import { printPage } from './print/printPage.js';
import { useTabButton } from './util/useTabButton.js';
import { addProductList } from './productAdd/addProductList.js';
import { addVendingMachineCharge } from './vendingMachineManage/addVendingMachineCharge.js';
import { purchaseProduct } from './productPurchase/purchaseProduct.js';

printPage();

function gameStart() {
    document.addEventListener('click', function (e) { useTabButton(e); })
    const $productAddButton = document.querySelector('#product-add-button');
    $productAddButton.addEventListener('click', addProductList);

    const $vendingMachineChargeButton = document.querySelector('#vending-machine-charge-button');
    $vendingMachineChargeButton.addEventListener('click', addVendingMachineCharge);

    const $chargeButton = document.querySelector('#charge-button');
    $chargeButton.addEventListener('click', purchaseProduct);
}

window.onload = function () {
    gameStart();
}
