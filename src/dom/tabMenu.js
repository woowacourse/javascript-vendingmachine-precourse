import buildProductPage from "./buildProductPage.js";
import buildChargePage from "./buildChargePage.js";
import buildPurchasePage from "./buildPurchasePage.js";
import { TEXT } from "../constant/Constant.js";

function tabMenu() {
    const app = document.getElementById("app");
    const header = document.createElement("header");
    const title = document.createElement("h1");
    const productAddMenuButton = document.createElement("button");
    const vendingMachineManageMenuButton = document.createElement("button");
    const productPurchaseMenuButton = document.createElement("button");

    title.innerText = TEXT.TAB_TITLE;

    productAddMenuButton.id = "product-add-menu";
    productAddMenuButton.innerText = TEXT.TAB_PRODUCT_ADD_BUTTON;
    productAddMenuButton.onclick = () => {
        buildProductPage();
    }

    vendingMachineManageMenuButton.id = "vending-machine-manage-menu";
    vendingMachineManageMenuButton.innerText = TEXT.TAB_CHARGE_BUTTON;
    vendingMachineManageMenuButton.onclick = () => {
        buildChargePage();
    }

    productPurchaseMenuButton.id = "product-purchase-menu";
    productPurchaseMenuButton.innerText = TEXT.TAB_PURCHASE_BUTTON;
    productPurchaseMenuButton.onclick = () => {
        buildPurchasePage();
    }

    header.appendChild(title);
    header.appendChild(productAddMenuButton);
    header.appendChild(vendingMachineManageMenuButton);
    header.appendChild(productPurchaseMenuButton);

    app.appendChild(header);
}

export default tabMenu;
