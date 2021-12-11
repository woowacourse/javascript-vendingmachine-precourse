import { LOACL_STORAGE as LOCAL, EMPTY } from "./constant.js";

export const initialStorageSet = () => {
    localStorage.setItem(LOCAL.PRODUCT, EMPTY);
    localStorage.setItem(LOCAL.TOTAL_AMOUNT, EMPTY);
    localStorage.setItem(LOCAL.COIN_AMOUNT, EMPTY);
};
