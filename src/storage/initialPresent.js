import { INITIAL_TAB_ID } from "./constant.js";
import { createTab, createDiv, createTitle } from "./createElement.js";
import ManagePresenter from "../manage/presenter.js";

export const clearContainer = () => {
    while (getPresetContainer().firstChild)
        getPresetContainer().removeChild(getPresetContainer().firstChild);
};
export const clickHandler = (id) => {
    switch (id) {
        case INITIAL_TAB_ID.PRODUCT_MANAGE_TAB:
            new ManagePresenter();
            break;
        case INITIAL_TAB_ID.CHARGE_TAB:
            break;
        case INITIAL_TAB_ID.PRODUCT_PURCHASE_TAB:
            break;
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

    $app.appendChild($title);
    $app.appendChild(createTab(INITIAL_TAB_ID.PRODUCT_MANAGE_TAB, "상품 관리"));
    $app.appendChild(createTab(INITIAL_TAB_ID.CHARGE_TAB, "잔돈 충전"));
    $app.appendChild(
        createTab(INITIAL_TAB_ID.PRODUCT_PURCHASE_TAB, "상품 구매"),
    );
    $app.appendChild($container);
};
