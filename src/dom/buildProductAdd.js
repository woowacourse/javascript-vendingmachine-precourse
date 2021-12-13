import ProductList from "../product/ProductList.js";
import createDocumentElement from "../util/createDocumentElement.js"

const productList = new ProductList;

function buildProductAdd() {
    const container = document.querySelector(".container");
    console.log(container);

    clearContainer(container);
    productAddElement(container);
    productItemElement(container);
    bindButtonEvent();
}

function productAddElement(container) {
    const productAddLabel = createDocumentElement("h3", "상품 추가하기");
    const productNameInput = createDocumentElement("input", "", "product-name-input", "상품명");
    const productPriceInput = createDocumentElement("input", "", "product-price-input", "가격");
    const productQuantityInput = createDocumentElement("input", "", "product-quantity-input", "수량");
    const productAddButton = createDocumentElement("button", "추가하기", "product-add-button", "");
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
    const productItemName = createDocumentElement("td", "상품명", "", "");
    const productItemPrice = createDocumentElement("td", "가격", "", "");
    const productItemQuantity = createDocumentElement("td", "수량", "", "");

    container.appendChild(productItemTable);
    productItemTable.appendChild(productItemTableRow);
    productItemTableRow.appendChild(productItemName);
    productItemTableRow.appendChild(productItemPrice);
    productItemTableRow.appendChild(productItemQuantity);
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

        productList.addItem(name, price, quantity);
        console.log(productList.getItem());
    }
}

export default buildProductAdd;
