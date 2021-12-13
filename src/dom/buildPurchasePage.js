import ProductList from "../product/ProductList.js";
import VendingMachine from "../vendingMachine/VendingMachine.js";
import createDocumentElement from "../util/createDocumentElement.js";
import createTableRow from "../util/createTableRow.js";

const productList = new ProductList;
const vendingMachine = new VendingMachine;

function buildPurchasePage() {
    const container = document.querySelector(".container");

    productList.getFromLocalStorage();
    vendingMachine.getFromLocalStorage();

    clearContainer(container)
    productPurchaseElement(container);
    productItemElement(container);
    productList.getItem().map((item) => {
        addItemElement(item.name, item.price, item.quantity);
    });
    coinDisplayElement(container);
}

function productPurchaseElement(container) {
    const productPurchaseLabel = createDocumentElement("h3", "금액 투입");
    const chargeInput = createDocumentElement("input", "", "charge-input", "투입할 금액");
    const chargeButton = createDocumentElement("button", "투입하기", "charge-button");
    const moneyLabel = createDocumentElement("p", "투입한 금액: ");
    const chargeAmount = createDocumentElement("span", "", "charge-amount");
    const productDisplayLabel = createDocumentElement("h3", "구매할 수 있는 상품 현황");

    chargeButton.onclick = () => chargeUserInputMoney();

    container.appendChild(productPurchaseLabel);
    container.appendChild(chargeInput);
    container.appendChild(chargeButton);
    container.appendChild(moneyLabel);
    container.appendChild(chargeAmount);
    container.appendChild(productDisplayLabel);
}

function productItemElement(container) {
    const productItemTable = document.createElement("table");
    const productItemTableRow =  document.createElement("tr");
    const productItemName = createDocumentElement("td", "상품명");
    const productItemPrice = createDocumentElement("td", "가격");
    const productItemQuantity = createDocumentElement("td", "수량");
    const productItemPurchase = createDocumentElement("td", "구매");

    container.appendChild(productItemTable);
    productItemTable.appendChild(productItemTableRow);
    productItemTableRow.appendChild(productItemName);
    productItemTableRow.appendChild(productItemPrice);
    productItemTableRow.appendChild(productItemQuantity);
    productItemTableRow.appendChild(productItemPurchase);
}

function addItemElement(name, price, quantity) {
    const productItemTable = document.querySelector("table");
    const productItemTableRow = createDocumentElement("tr", "", "", "", "product-purchase-item");
    const productItemName = createDocumentElement("td", name, "", "", "product-purchase-name");
    const productItemPrice = createDocumentElement("td", price, "", "", "product-purchase-price");
    const productItemQuantity = createDocumentElement("td", quantity, "", "", "product-purchase-quantity");
    const productItemPurchase = createDocumentElement("td");
    const productItemPurchaseButton = createDocumentElement("button", "구매하기", "", "", "purchase-button");

    productItemTable.appendChild(productItemTableRow);
    productItemTableRow.appendChild(productItemName);
    productItemTableRow.appendChild(productItemPrice);
    productItemTableRow.appendChild(productItemQuantity);
    productItemTableRow.appendChild(productItemPurchase);
    productItemPurchase.appendChild(productItemPurchaseButton);
}

function coinDisplayElement(container) {
    const productPurchaseLabel = createDocumentElement("h3", "잔돈");
    const productItemPurchaseButton = createDocumentElement("button", "반환하기", "", "", "coin-return-button");
    const coinDisplayTable = document.createElement("table");
    const coinDisplayTableRow =  document.createElement("tr");
    const coinCategory = createDocumentElement("td", "동전");
    const coinAmount = createDocumentElement("td", "개수");

    productItemPurchaseButton.onclick = () => returnCharge();

    container.appendChild(productPurchaseLabel);
    container.appendChild(productItemPurchaseButton);
    container.appendChild(coinDisplayTable);
    coinDisplayTable.appendChild(coinDisplayTableRow);
    coinDisplayTableRow.appendChild(coinCategory);
    coinDisplayTableRow.appendChild(coinAmount);

    createTableRow(coinDisplayTable,"500원","coin-500-quantity");
    createTableRow(coinDisplayTable,"100원","coin-100-quantity");
    createTableRow(coinDisplayTable,"50원","coin-50-quantity");
    createTableRow(coinDisplayTable,"10원","coin-10-quantity");
}

function chargeUserInputMoney() {
    const chargeInput = document.querySelector("#charge-input");
    vendingMachine.chargeUserInputMoney((Number)(chargeInput.value));
    displayChargeAmount();
}

function displayChargeAmount() {
    const chargeAmount = document.querySelector("#charge-amount");
    chargeAmount.innerText = vendingMachine.getUserInputMoney() + "원";
}

function returnCharge() {
    const coins = vendingMachine.returnCharge();

    const returnCoin500Quantity = document.querySelector("#coin-500-quantity");
    const returnCoin100Quantity = document.querySelector("#coin-100-quantity");
    const returnCoin50Quantity = document.querySelector("#coin-50-quantity");
    const returnCoin10Quantity = document.querySelector("#coin-10-quantity");

    returnCoin500Quantity.innerText = coins.coin500 + "개";
    returnCoin100Quantity.innerText = coins.coin100 + "개";
    returnCoin50Quantity.innerText = coins.coin50 + "개";
    returnCoin10Quantity.innerText = coins.coin10 + "개";

    displayChargeAmount();
}

function clearContainer(container) {
    container.innerHTML = "";
}

export default buildPurchasePage;
