function tabMenu() {
    const app = document.getElementById("app");
    const header = document.createElement("header");
    const title = document.createElement("h1");
    const productPurchaseMenuButton = document.createElement("button");
    const vendingMachineManageMenuButton = document.createElement("button");
    const productAddMenuButton = document.createElement("button");

    title.innerText = "🥤자판기🥤";

    productPurchaseMenuButton.id = "product-purchase-menu";
    productPurchaseMenuButton.innerText = "상품 관리";

    vendingMachineManageMenuButton.id = "vending-machine-manage-menu";
    vendingMachineManageMenuButton.innerText = "잔돈 충전";

    productAddMenuButton.id = "product-add-menu";
    productAddMenuButton.innerText = "상품 구매";

    header.appendChild(title);
    header.appendChild(productPurchaseMenuButton);
    header.appendChild(vendingMachineManageMenuButton);
    header.appendChild(productAddMenuButton);

    app.appendChild(header);
}

export default tabMenu;
