import {
    LOACL_STORAGE as LOCAL,
    EMPTY,
    PURCHASE_TAB_ID as ID,
} from "../storage/constant.js";
import { getLocalStorage, setLocalStorage } from "../storage/localStorage.js";
export const purchase = function (rows) {
    // 여기서 조건 검색 후 값 수정
    const price = rows.childNodes[1].dataset.productPrice;

    const loadProduct = getLocalStorage(LOCAL.PRODUCT);
    const loadTotalAmount = getLocalStorage(LOCAL.TOTAL_AMOUNT);
    if (loadProduct !== EMPTY && loadTotalAmount !== EMPTY) {
        calcQuantity(loadProduct, rows);
        calcAmount(Number(loadTotalAmount), Number(price));
    }
};

const calcQuantity = (loadProduct, rows) => {
    const name = rows.childNodes[0].dataset.productName;
    const curProduct = JSON.parse(loadProduct);
    curProduct.forEach((element, idx) => {
        let amount = Number(element.amount);
        if (element.name === name) {
            amount -= 1;
            curProduct[idx].amount = amount;
            rows.childNodes[2].dataset.productQuantity = amount;
            rows.childNodes[2].innerText = amount;
        }
    });
    setLocalStorage(LOCAL.PRODUCT, JSON.stringify(curProduct));
};

const calcAmount = (loadTotalAmount, price) => {
    setLocalStorage(LOCAL.TOTAL_AMOUNT, loadTotalAmount - price);
    const $chargeAmount = document.getElementById(ID.CHARGE_AMOUNT);

    setTotalAmount(getLocalStorage(LOCAL.TOTAL_AMOUNT), $chargeAmount);
};
export const setTotalAmount = (loadAmount, $chargeAmount) => {
    if (loadAmount !== EMPTY) {
        $chargeAmount.innerHTML = loadAmount;
    }
};
