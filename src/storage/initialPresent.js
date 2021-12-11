import { INITIAL_TAB_ID } from "./constant.js";
import {
    createTab,
    createDiv,
    createTitle,
    appendDiv,
} from "./createElement.js";
import ManagePresenter from "../manage/presenter.js";
import ChargePresenter from "../charge/presenter.js";
import PurchasePresenter from "../purchase/presenter.js";
export const clearContainer = () => {
    while (getPresetContainer().firstChild)
        getPresetContainer().removeChild(getPresetContainer().firstChild);
};
export const clickHandler = (id) => {
    switch (id) {
        case INITIAL_TAB_ID.PRODUCT_MANAGE_TAB:
            return new ManagePresenter();
        case INITIAL_TAB_ID.CHARGE_TAB:
            return new ChargePresenter();
        case INITIAL_TAB_ID.PRODUCT_PURCHASE_TAB:
            return new PurchasePresenter();
    }
};
export const getApp = () => {
    return document.getElementById("app");
};

export const getPresetContainer = () => {
    return document.getElementById("container");
};

export const setInitialPresent = () => {
    const $app = getApp();
    const $title = createTitle("🥤자판기🥤");
    const $container = createDiv("container");
    appendDiv($app, [
        $title,
        createTab(INITIAL_TAB_ID.PRODUCT_MANAGE_TAB, "상품 관리"),
        createTab(INITIAL_TAB_ID.CHARGE_TAB, "잔돈 충전"),
        createTab(INITIAL_TAB_ID.PRODUCT_PURCHASE_TAB, "상품 구매"),
        $container,
    ]);
};
