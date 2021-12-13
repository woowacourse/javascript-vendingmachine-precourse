const COMMON_VIEW = `
    <h1>🍹자판기🍹</h1>
    <button id = "product-add-menu">상품 관리</button>
    <button id = "vending-machine-manage-menu">잔돈 충전</button>
    <button id = "product-purchase-menu">상품 구매</button>
    `;

const MANAGE_VIEW = document.createElement("div");

const CHARGE_VIEW = document.createElement("div");

const PURCHASE_VIEW = document.createElement("div");

export { COMMON_VIEW, MANAGE_VIEW, CHARGE_VIEW, PURCHASE_VIEW };
