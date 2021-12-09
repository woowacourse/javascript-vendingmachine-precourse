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
    $app.appendChild(createTab("product-add-menu", "상품 관리"));
    $app.appendChild(createTab("vending-machine-manage-menu", "잔돈 충전"));
    $app.appendChild(createTab("product-purchase-menu", "상품 구매"));
    console.log($app, "@");
};
