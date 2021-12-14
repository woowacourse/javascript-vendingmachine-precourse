import { GAME } from '../util/constant.js'

//상품구매 테이블에 추가
export function addProductPurchaseTable() {
    const $productPurchaseTable = document.querySelector('#product-purchase-table');
    $productPurchaseTable.innerHTML = '';
    for (let product of GAME.PRODUCTS) {
        $productPurchaseTable.innerHTML += `<tr class="product-purchase-item">
                                                <td class="product-purchase-name" data-product-name=${product.name}>${product.name}</td>
                                                <td class="product-purchase-price"data-product-price=${product.name}>${product.price}</td>
                                                <td class="product-purchase-quantity" data-product-quantity=${product.name}>${product.quantity}</td>
                                                <td><button class="purchase-button" data-product-name=${product.name}>구매하기</button></td>                               
                                            </tr>`;
    }
}

//투입한 금액에 출력
export function printChargeAmount(){
    const $chargeAmount = document.querySelector('#charge-amount');
    $chargeAmount.innerHTML = `투입한 금액: ${GAME.CUSTOMER_CHARGE_TOTAL}`;            
}

//잔돈반환표 출력
export function printCoinReturnTable(){
    const $coin500Quantity = document.querySelector('#coin-500-quantity');
    const $coin100Quantity = document.querySelector('#coin-100-quantity');
    const $coin50Quantity = document.querySelector('#coin-50-quantity');
    const $coin10Quantity = document.querySelector('#coin-10-quantity');

    $coin500Quantity.innerHTML = `${GAME.CUSTOMER_CHARGE_ARRAY[0]}개`;
    $coin100Quantity.innerHTML = `${GAME.CUSTOMER_CHARGE_ARRAY[1]}개`;
    $coin50Quantity.innerHTML = `${GAME.CUSTOMER_CHARGE_ARRAY[2]}개`;
    $coin10Quantity.innerHTML = `${GAME.CUSTOMER_CHARGE_ARRAY[3]}개`;            
}
