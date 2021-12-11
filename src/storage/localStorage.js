import { LOACL_STORAGE as LOCAL, EMPTY } from "./constant.js";

export const initialStorageSet = () => {
    [LOCAL.PRODUCT, LOCAL.TOTAL_AMOUNT, LOCAL.COIN_AMOUNT].forEach((element) =>
        setLocalStorage(element, EMPTY),
    );
};

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};
