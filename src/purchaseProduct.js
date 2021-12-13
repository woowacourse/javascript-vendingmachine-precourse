import { ERROR_MESSAGE, GAME } from './product.js';
import { printVendingMachineChargeAmount, printVendingMachineChargeTable } from './printVendingMachineCharge.js';
import { addProductAddTable, addProductPurchaseTable } from './addProductListTable.js';

function deleteProduct(selectedProduct) {
    GAME.PRODUCTS = GAME.PRODUCTS.filter((element) => element.name !== selectedProduct.name);
    addProductAddTable();
    addProductPurchaseTable();
}

//입력창 예외처리
function checkChargeInputValid($chargeInput) {
    //공백체크
    if ($chargeInput.value.trim() === '') {
        alert(ERROR_MESSAGE.BLANK_ERROR);
        return false;
    }
    //마이너스 체크
    else if ($chargeInput.value <= 0) {
        alert(ERROR_MESSAGE.CHARGE_INPUT_MINUS_ERROR);
        return false;
    }
    //정수확인, 요구사항확인
    else if ($chargeInput.value % 10 !== 0) {
        alert(ERROR_MESSAGE.CHARGE_INPUT_INT_ERROR);
        return false;
    }
    return true;
}

export function purchaseProduct() {
    //입력금액 예외처리(살수있는거 없으면 입력못하게 하기)
    const $chargeInput = document.querySelector('#charge-input');

    if (checkChargeInputValid($chargeInput)) {
        //CUSTOMER_CHARGE 객체에 넣기
        GAME.CUSTOMER_CHARGE_TOTAL += Number($chargeInput.value);

        //투입한 금액에 출력
        const $chargeAmount = document.querySelector('#charge-amount');
        $chargeAmount.innerHTML = `투입한 금액: ${GAME.CUSTOMER_CHARGE_TOTAL}`;
    }

    //입력창 비우기
    $chargeInput.value = '';

    //구매버튼 클릭시
    const $productPurchaseTable = document.querySelector('#product-purchase-table');
    $productPurchaseTable.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            //PRODUCT 클래스에서 수량 빼기
            const productName = e.target.dataset.productName;
            let selectedProduct = '';
            for (let product of GAME.PRODUCTS) {
                if (product.name === productName) {
                    selectedProduct = product;
                }
            }

            if (GAME.CUSTOMER_CHARGE_TOTAL - selectedProduct.price <= 0) {
                alert(ERROR_MESSAGE.CUSTOMER_CHARGE_TOTAL_LACK);
            }

            else {
                selectedProduct.purchase();

                addProductAddTable();
                addProductPurchaseTable();

                //수량 0되면 클래스 삭제
                if (selectedProduct.quantity < 1) {
                    deleteProduct(selectedProduct);
                }

                //CUSTOMER_CHARGE 클래스에서 금액빼기
                GAME.CUSTOMER_CHARGE_TOTAL -= selectedProduct.price;
                //투입한 금액에 출력
                const $chargeAmount = document.querySelector('#charge-amount');
                $chargeAmount.innerHTML = `투입한 금액: ${GAME.CUSTOMER_CHARGE_TOTAL}`;
            }
        }
    })

    //반환하기 클릭시
    const $coninReturnButton = document.querySelector('#coin-return-button');
    $coninReturnButton.addEventListener('click', () => {
        if (GAME.CUSTOMER_CHARGE_TOTAL > 0) {
            //잔돈충전 탭에서 보유금액 바꾸기
            GAME.VENDING_MACHINE_CHARGE_TOTAL -= GAME.CUSTOMER_CHARGE_TOTAL;
            //큰 동전부터 계산하여 CUSTOMER_CHARGE 클래스에 넣기
            let coinAmount = 0;
            for (let i in GAME.VENDING_MACHINE_CHARGE_ARRAY) {
                if (GAME.COIN_ARRAY[i] * GAME.VENDING_MACHINE_CHARGE_ARRAY[i] <= GAME.CUSTOMER_CHARGE_TOTAL) {
                    GAME.CUSTOMER_CHARGE_ARRAY[i] += GAME.VENDING_MACHINE_CHARGE_ARRAY[i];
                    GAME.CUSTOMER_CHARGE_TOTAL -= GAME.COIN_ARRAY[i] * GAME.VENDING_MACHINE_CHARGE_ARRAY[i];
                    GAME.VENDING_MACHINE_CHARGE_ARRAY[i] -= GAME.VENDING_MACHINE_CHARGE_ARRAY[i];
                }
                else if (GAME.COIN_ARRAY[i] * GAME.VENDING_MACHINE_CHARGE_ARRAY[i] > GAME.CUSTOMER_CHARGE_TOTAL) {
                    coinAmount = GAME.CUSTOMER_CHARGE_TOTAL / GAME.COIN_ARRAY[i];
                    GAME.CUSTOMER_CHARGE_ARRAY[i] += coinAmount;
                    GAME.CUSTOMER_CHARGE_TOTAL -= GAME.COIN_ARRAY[i] * coinAmount;
                    GAME.VENDING_MACHINE_CHARGE_ARRAY[i] -= coinAmount;
                }
            }

            //투입한 금액에 출력
            const $chargeAmount = document.querySelector('#charge-amount');
            $chargeAmount.innerHTML = `투입한 금액: ${GAME.CUSTOMER_CHARGE_TOTAL}`;
            //반환된 동전 갯수 출력
            const $coin500Quantity = document.querySelector('.coin-500-quantity');
            const $coin100Quantity = document.querySelector('.coin-100-quantity');
            const $coin50Quantity = document.querySelector('.coin-50-quantity');
            const $coin10Quantity = document.querySelector('.coin-10-quantity');

            $coin500Quantity.innerHTML = GAME.CUSTOMER_CHARGE_ARRAY[0];
            $coin100Quantity.innerHTML = GAME.CUSTOMER_CHARGE_ARRAY[1];
            $coin50Quantity.innerHTML = GAME.CUSTOMER_CHARGE_ARRAY[2];
            $coin10Quantity.innerHTML = GAME.CUSTOMER_CHARGE_ARRAY[3];

            //잔돈 충전탭 reset
            printVendingMachineChargeAmount();
            printVendingMachineChargeTable();
        }
    })
}
