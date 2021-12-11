/**
 * 1. 값을 숫자인지 아닌지 확인
 * 2. 값이 양의 정수인지 확인
 * 3. 값이 10으로 나누어 떨어지지 않는지 확인
 * 4. 동일한 이름의 값이 존재하는지
 */
import { LOACL_STORAGE, EMPTY, ERROR_MESSAGE } from "./constant.js";
import { getLocalStorage } from "./localStorage.js";
const checkIsNaN = (value) => {
    return !isNaN(Number(value));
};

const overZero = (value) => {
    return Number(value) > 0 ? true : false;
};

const overHundred = (value) => {
    return Number(value) >= 100 ? true : false;
};

const divideTen = (value) => {
    return Number(value) % 10 === 0 ? true : false;
};

const checkDuplicate = (value, names) => {
    return names.includes(value);
};

const checkIsEmpty = (value) => {
    return value === EMPTY ? true : false;
};
const showAlert = (message) => {
    alert(message);
    return EMPTY;
};
export const checkProductDuplicate = (value) => {
    if (checkIsEmpty(value)) showAlert(ERROR_MESSAGE.IS_EMPTY);

    const loadProduct = getLocalStorage(LOACL_STORAGE.PRODUCT);
    if (loadProduct !== EMPTY) {
        const parse = JSON.parse(loadProduct);
        const names = [];
        parse.forEach((element) => {
            names.push(element.name);
        });
        if (!checkDuplicate(value, names)) return value;
        else showAlert(ERROR_MESSAGE.AlREADY_EXIST);
    } else {
        return value;
    }
};

export const checkNumContainDivideTen = (value, isPrice) => {
    value = checkNumExceptDivedeTen(value);
    if (isPrice) {
        if (!overHundred(value)) showAlert(ERROR_MESSAGE.OVER_HUNDRED);
    } else if (!divideTen(value)) showAlert(ERROR_MESSAGE.DIVIDE_TEN);

    return value;
};

export const checkNumExceptDivedeTen = (value) => {
    if (checkIsEmpty(value)) showAlert(ERROR_MESSAGE.IS_EMPTY);
    else if (!checkIsNaN(value)) showAlert(ERROR_MESSAGE.NOT_NUMBER);
    else if (!overZero(value)) showAlert(ERROR_MESSAGE.OVER_ZERO);

    return value;
};
