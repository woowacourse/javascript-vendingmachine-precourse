function buildProductAdd() {
    const container = document.querySelector(".container");
    console.log(container);

    clearContainer(container);
    productAddElement(container);
    productItemElement(container);
}

function productAddElement(container) {
    const productAddLabel = document.createElement("h3");
    const productNameInput = document.createElement("input");
    const productPriceInput = document.createElement("input");
    const productQuantityInput = document.createElement("input");
    const productAddButton = document.createElement("button");
    const productDisplayLabel = document.createElement("h3");

    productAddLabel.innerText = "상품 추가하기";
    productNameInput.id = "product-name-input";
    productNameInput.placeholder = "상품명";
    productPriceInput.id = "product-price-input";
    productPriceInput.placeholder = "가격";
    productQuantityInput.id = "product-quantity-input";
    productQuantityInput.placeholder = "수량";
    productAddButton.id = "product-add-button";
    productAddButton.innerText = "추가하기";
    productDisplayLabel.innerText = "상품 현황";

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
    const productItemName = document.createElement("td");
    const productItemPrice = document.createElement("td");
    const productItemQuantity = document.createElement("td");

    productItemName.innerText = "상품명";
    productItemPrice.innerText = "가격";
    productItemQuantity.innerText = "수량";

    container.appendChild(productItemTable);
    productItemTable.appendChild(productItemTableRow);
    productItemTableRow.appendChild(productItemName);
    productItemTableRow.appendChild(productItemPrice);
    productItemTableRow.appendChild(productItemQuantity);
}

function clearContainer(container) {
    container.innerHTML = "";
}

export default buildProductAdd;
