import { INITIAL_TAB_ID } from "./constant.js";

const createTab = (id, text) => {
    const $tab = document.createElement("button");
    $tab.id = id;
    $tab.innerText = text;

    return $tab;
};

export const getApp = () => {
    return document.getElementById("app");
};

export const createTabs = () => {
    const $app = getApp();
    const $title = document.createElement("div");
    $title.innerHTML = `<p>🥤자판기🥤</p></br>`;
    $app.appendChild($title);
    $app.appendChild(createTab(INITIAL_TAB_ID.PRODUCT_MANAGE_TAB, "상품 관리"));
    $app.appendChild(createTab(INITIAL_TAB_ID.CHARGE_TAB, "잔돈 충전"));
    $app.appendChild(
        createTab(INITIAL_TAB_ID.PRODUCT_PURCHASE_TAB, "상품 구매"),
    );
};
