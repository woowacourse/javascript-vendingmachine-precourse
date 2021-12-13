import {
    LOACL_STORAGE as LOCAL,
    EMPTY,
    PURCHASE_TAB_ID as ID,
} from "../storage/constant.js";
import { getLocalStorage, setLocalStorage } from "../storage/localStorage.js";

export const purchase = function (rows) {
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

export const gridCalc = (change, coin) => {
    const count = [coin.coin_500, coin.coin_100, coin.coin_50, coin.coin_10];
    const coinValue = [500, 100, 50, 10];
    if (change >= coin.total) return count;
    else {
        calcCoin(count, coinValue, change);
    }
    return count;
};

const calcCoin = (count, coinValue, change) => {
    let sum = 0;
    let i = 0;
    let cur_sum = 0;
    while (i < coinValue.length) {
        sum += count[i] * coinValue[i];
        if (sum > change) {
            count[i] -= 1;
            sum = cur_sum;
        } else if (sum === change) {
            for (let k = i + 1; k < coinValue.length; k++) count[k] = 0;
            break;
        } else {
            cur_sum = sum;
            i++;
        }
    }
};
