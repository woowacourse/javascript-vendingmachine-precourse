import buildProductPage from "./buildProductPage.js";
import buildChargePage from "./buildChargePage.js";

function tabMenu() {
    const app = document.getElementById("app");
    const header = document.createElement("header");
    const title = document.createElement("h1");
    const productAddMenuButton = document.createElement("button");
    const vendingMachineManageMenuButton = document.createElement("button");
    const productPurchaseMenuButton = document.createElement("button");

    title.innerText = "🥤자판기🥤";

    productAddMenuButton.id = "product-add-menu";
    productAddMenuButton.innerText = "상품 관리";
    productAddMenuButton.onclick = () => {
        buildProductPage();
    }

    vendingMachineManageMenuButton.id = "vending-machine-manage-menu";
    vendingMachineManageMenuButton.innerText = "잔돈 충전";
    vendingMachineManageMenuButton.onclick = () => {
        buildChargePage();
    }

    productPurchaseMenuButton.id = "product-purchase-menu";
    productPurchaseMenuButton.innerText = "상품 구매";

    header.appendChild(title);
    header.appendChild(productAddMenuButton);
    header.appendChild(vendingMachineManageMenuButton);
    header.appendChild(productPurchaseMenuButton);

    app.appendChild(header);
}

export default tabMenu;
