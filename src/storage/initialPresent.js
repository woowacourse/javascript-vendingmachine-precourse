import { INITIAL_TAB_ID } from "./constant.js";
import ManagePresenter from "../manage/presenter.js";
const clickHandler = (id) => {
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

const createTab = (id, text) => {
    const $tab = document.createElement("button");
    $tab.id = id;
    $tab.innerText = text;
    $tab.addEventListener("click", function (e) {
        e.preventDefault();
        clickHandler(e.target.id);
    });
    return $tab;
};

export const clearContainer = () => {
    while (getPresetContainer().firstChild)
        getPresetContainer().removeChild(getPresetContainer().firstChild);
};

export const getApp = () => {
    return document.getElementById("app");
};

export const getPresetContainer = () => {
    return document.getElementById("container");
};

export const setInitialPresent = () => {
    const $app = getApp();
    const $title = document.createElement("div");
    const $container = document.createElement("div");
    $container.id = "container";
    $title.innerHTML = `<p>🥤자판기🥤</p></br>`;
    $app.appendChild($title);
    $app.appendChild(createTab(INITIAL_TAB_ID.PRODUCT_MANAGE_TAB, "상품 관리"));
    $app.appendChild(createTab(INITIAL_TAB_ID.CHARGE_TAB, "잔돈 충전"));
    $app.appendChild(
        createTab(INITIAL_TAB_ID.PRODUCT_PURCHASE_TAB, "상품 구매"),
    );
    $app.appendChild($container);
};
