import { ERROR_MESSAGE, GAME } from '../util/constant.js';
import { addProductAddTable } from '../print/printProductAdd.js';
import { addProductPurchaseTable, printChargeAmount } from '../print/printProductPurchase.js';

function deleteProduct(selectedProduct) {
    if (selectedProduct.quantity < 1) {
        GAME.PRODUCTS = GAME.PRODUCTS.filter((element) => element.name !== selectedProduct.name);
    }
}

function checkSelectedProduct(e) {
    const productName = e.target.dataset.productName;
    let selectedProduct = '';
    for (let product of GAME.PRODUCTS) {
        if (product.name === productName) {
            selectedProduct = product;
        }
    }
    return selectedProduct
}

function checkPurchasePossibility(selectedProduct) {
    if (GAME.CUSTOMER_CHARGE_TOTAL - selectedProduct.price <= 0) {
        alert(ERROR_MESSAGE.CUSTOMER_CHARGE_TOTAL_LACK);
        return false;
    }
    return true;
}

export function clickPurchaseButton(e) {
    let selectedProduct = checkSelectedProduct(e);

    if (checkPurchasePossibility(selectedProduct)) {
        selectedProduct.purchase();

        deleteProduct(selectedProduct);

        addProductAddTable();
        addProductPurchaseTable();

        GAME.CUSTOMER_CHARGE_TOTAL -= selectedProduct.price;
        printChargeAmount();
    }
}
