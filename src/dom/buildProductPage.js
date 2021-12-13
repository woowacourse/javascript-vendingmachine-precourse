import ProductList from "../product/ProductList.js";
import createDocumentElement from "../util/createDocumentElement.js"
import validatePrice from "../util/validatePrice.js";

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
    const productAddLabel = createDocumentElement("h3", "상품 추가하기");
    const productNameInput = createDocumentElement("input", "", "product-name-input", "상품명");
    const productPriceInput = createDocumentElement("input", "", "product-price-input", "가격");
    const productQuantityInput = createDocumentElement("input", "", "product-quantity-input", "수량");
    const productAddButton = createDocumentElement("button", "추가하기", "product-add-button");
    const productDisplayLabel = createDocumentElement("h3", "상품 현황");

    container.appendChild(productAddLabel);
    container.appendChild(productNameInput);
    container.appendChild(productPriceInput);
    container.appendChild(productQuantityInput);
    container.appendChild(productAddButton);
    container.appendChild(productDisplayLabel);
}

function productItemElement(container) {
    const productItemTable = document.createElement("table");
    const productItemTableRow =  document.createElement("tr");
    const productItemName = createDocumentElement("td", "상품명");
    const productItemPrice = createDocumentElement("td", "가격");
    const productItemQuantity = createDocumentElement("td", "수량");

    container.appendChild(productItemTable);
    productItemTable.appendChild(productItemTableRow);
    productItemTableRow.appendChild(productItemName);
    productItemTableRow.appendChild(productItemPrice);
    productItemTableRow.appendChild(productItemQuantity);
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
    productItemTableRow.appendChild(productItemName);
    productItemTableRow.appendChild(productItemPrice);
    productItemTableRow.appendChild(productItemQuantity);
}

function productItemRefresh() {
    const container = document.querySelector(".container");

    deleteItemElement();
    productItemElement(container);
    productList.getItem().map((item) => {
        addItemElement(item.name, item.price, item.quantity);
    });
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
            alert("가격을 다시 입력해주세요");
        }
    }
}

export default buildProductPage;
