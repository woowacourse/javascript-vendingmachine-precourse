import { ERROR_MESSAGE, GAME } from '../util/constant.js';
import { addProductAddTable } from '../print/printProductAdd.js';
import { addProductPurchaseTable, printChargeAmount } from '../print/printProductPurchase.js';

//수량이 0이 된 상품 제거
function deleteProduct(selectedProduct) {
    if (selectedProduct.quantity < 1) {
        GAME.PRODUCTS = GAME.PRODUCTS.filter((element) => element.name !== selectedProduct.name);
    }
}

//선택된 상품 고르기
function checkSelectedProduct(e){
    const productName = e.target.dataset.productName;
    let selectedProduct = '';
    for (let product of GAME.PRODUCTS) {
        if (product.name === productName) {
            selectedProduct = product;
        }
    }
    return selectedProduct
}

//구매가능한 잔액인지 확인
function checkPurchasePossibility(selectedProduct){
    if (GAME.CUSTOMER_CHARGE_TOTAL - selectedProduct.price <= 0) {
        alert(ERROR_MESSAGE.CUSTOMER_CHARGE_TOTAL_LACK);
        return false;
    }
    return true;
}

export function clickPurchaseButton(e){
    //PRODUCT 클래스에서 수량 빼기
    let selectedProduct = checkSelectedProduct(e);

    if(checkPurchasePossibility(selectedProduct)){
        selectedProduct.purchase();

        //수량 0인지 확인해서 클래스 삭제
        deleteProduct(selectedProduct);        

        //표 출력
        addProductAddTable();
        addProductPurchaseTable();

        //CUSTOMER_CHARGE 클래스에서 금액빼기
        GAME.CUSTOMER_CHARGE_TOTAL -= selectedProduct.price;
        //투입한 금액에 출력
        printChargeAmount();
    }
}