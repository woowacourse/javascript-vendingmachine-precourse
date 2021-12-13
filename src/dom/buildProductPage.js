import ProductList from "../product/ProductList.js";
import createDocumentElement from "../util/createDocumentElement.js"
import validatePrice from "../util/validatePrice.js";
import { TEXT, MSG } from "../constant/Constant.js";

const productList = new ProductList;

function buildProductPage() {
    const container = document.querySelector(".container");
    productList.getFromLocalStorage();

    clearContainer(container);
    productAddElement(container);
    productItemElement(container);
    productItemRefresh();
    bindButtonEvent();
}

function productAddElement(container) {
    const productAddLabel = createDocumentElement("h3", TEXT.PRODUCT_ADD_LABEL);
    const productNameInput = createDocumentElement("input", "", "product-name-input", TEXT.PRODUCT_NAME_PLACEHOLDER);
    const productPriceInput = createDocumentElement("input", "", "product-price-input", TEXT.PRODUCT_PRICE_PLACEHOLDER);
    const productQuantityInput = createDocumentElement("input", "", "product-quantity-input", TEXT.PRODUCT_QUANTITY_PLACEHOLDER);
    const productAddButton = createDocumentElement("button", TEXT.PRODUCT_ADD_BUTTON, "product-add-button");
    const productDisplayLabel = createDocumentElement("h3", TEXT.PRODUCT_DISPLAY_LABEL);

    container.append(productAddLabel, productNameInput, productPriceInput, productQuantityInput, productAddButton, productDisplayLabel);
}

function productItemElement(container) {
    const productItemTable = document.createElement("table");
    const productItemTableRow =  document.createElement("tr");
    const productItemName = createDocumentElement("td", TEXT.PRODUCT_ITEM_NAME);
    const productItemPrice = createDocumentElement("td", TEXT.PRODUCT_ITEM_PRICE);
    const productItemQuantity = createDocumentElement("td", TEXT.PRODUCT_ITEM_QUANTITY);

    container.appendChild(productItemTable);
    productItemTable.appendChild(productItemTableRow);
    productItemTableRow.append(productItemName, productItemPrice, productItemQuantity);
}

function deleteItemElement() {
    const productItemTable = document.querySelector("table");
    productItemTable.parentNode.removeChild(productItemTable);
}

function addItemElement(name, price, quantity) {
    const productItemTable = document.querySelector("table");
    const productItemTableRow = createDocumentElement("tr", "", "", "", "product-manage-item");
    const productItemName = createDocumentElement("td", name, "", "", "product-manage-name");
    const productItemPrice = createDocumentElement("td", price, "", "", "product-manage-price");
    const productItemQuantity = createDocumentElement("td", quantity, "", "", "product-manage-quantity");

    productItemTable.appendChild(productItemTableRow);
    productItemTableRow.append(productItemName, productItemPrice, productItemQuantity);
}

function productItemRefresh() {
    const container = document.querySelector(".container");

    deleteItemElement();
    productItemElement(container);
    if(productList.getItem() !== null) {
        productList.getItem().map((item) => {
            addItemElement(item.name, item.price, item.quantity);
        });
    }
}

function clearContainer(container) {
    container.innerHTML = "";
}

function bindButtonEvent() {
    const button = document.querySelector("#product-add-button");

    button.onclick = () => {
        const name = document.querySelector("#product-name-input").value;
        const price = document.querySelector("#product-price-input").value;
        const quantity = document.querySelector("#product-quantity-input").value;

        if(validatePrice(price)) {
            productList.addItem(name, price, quantity);
            productItemRefresh();
        }
        else {
            alert(MSG.INVALID_PRICE);
        }
    }
}

export default buildProductPage;
