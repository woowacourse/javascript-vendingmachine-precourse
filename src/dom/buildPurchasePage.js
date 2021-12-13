import ProductList from "../product/ProductList.js";
import VendingMachine from "../vendingMachine/VendingMachine.js";
import createDocumentElement from "../util/createDocumentElement.js";
import createTableRow from "../util/createTableRow.js";
import { TEXT, MSG } from "../constant/Constant.js";

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
    const productPurchaseLabel = createDocumentElement("h3", TEXT.CHARGE_TO_PURCHASE_LABEL);
    const chargeInput = createDocumentElement("input", "", "charge-input", TEXT.CHARGE_TO_PURCHASE_PLACEHOLDER);
    const chargeButton = createDocumentElement("button", "투입하기", "charge-button");
    const moneyLabel = createDocumentElement("p", TEXT.CHARGE_TO_PURCHASE_MONEY_LABEL);
    const chargeAmount = createDocumentElement("span", "", "charge-amount");
    const productDisplayLabel = createDocumentElement("h3", TEXT.PURCHASABLE_PRODUCE_LABEL);

    chargeButton.onclick = () => chargeUserInputMoney();

    container.appendChild(productPurchaseLabel);
    container.appendChild(chargeInput);
    container.appendChild(chargeButton);
    container.appendChild(moneyLabel);
    moneyLabel.appendChild(chargeAmount);
    container.appendChild(productDisplayLabel);
}

function productItemElement(container) {
    const productItemTable = document.createElement("table");
    const productItemTableRow =  document.createElement("tr");
    const productItemName = createDocumentElement("td", TEXT.PRODUCT_ITEM_NAME);
    const productItemPrice = createDocumentElement("td", TEXT.PRODUCT_ITEM_PRICE);
    const productItemQuantity = createDocumentElement("td", TEXT.PRODUCT_ITEM_QUANTITY);
    const productItemPurchase = createDocumentElement("td", TEXT.PRODUCT_ITEM_PURCHASE);

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
    const productItemPurchaseButton = createDocumentElement("button", TEXT.PRODUCT_ITEM_PURCHASE_BUTTON, "", "", "purchase-button");

    productItemName.setAttribute("data-product-name", name);
    productItemName.setAttribute("data-product-price", price);
    productItemName.setAttribute("data-product-quantity", quantity);
    productItemPurchaseButton.onclick = () => purchaseItem(name, price);

    productItemTable.appendChild(productItemTableRow);
    productItemTableRow.appendChild(productItemName);
    productItemTableRow.appendChild(productItemPrice);
    productItemTableRow.appendChild(productItemQuantity);
    productItemTableRow.appendChild(productItemPurchase);
    productItemPurchase.appendChild(productItemPurchaseButton);
}

function coinDisplayElement(container) {
    const productPurchaseLabel = createDocumentElement("h3", TEXT.RETURN_CHANGE_LABEL);
    const productItemPurchaseButton = createDocumentElement("button", TEXT.RETURN_CHANGE_BUTTON, "", "", "coin-return-button");
    const coinDisplayTable = document.createElement("table");
    const coinDisplayTableRow =  document.createElement("tr");
    const coinCategory = createDocumentElement("td", TEXT.MACHINE_COIN_CATEGORY);
    const coinAmount = createDocumentElement("td", TEXT.MACHINE_COIN_AMOUNT);

    productItemPurchaseButton.onclick = () => returnCharge();

    container.appendChild(productPurchaseLabel);
    container.appendChild(productItemPurchaseButton);
    container.appendChild(coinDisplayTable);
    coinDisplayTable.appendChild(coinDisplayTableRow);
    coinDisplayTableRow.appendChild(coinCategory);
    coinDisplayTableRow.appendChild(coinAmount);

    createTableRow(coinDisplayTable, TEXT.COIN_500,"coin-500-quantity");
    createTableRow(coinDisplayTable, TEXT.COIN_100,"coin-100-quantity");
    createTableRow(coinDisplayTable, TEXT.COIN_50,"coin-50-quantity");
    createTableRow(coinDisplayTable, TEXT.COIN_10,"coin-10-quantity");
}

function chargeUserInputMoney() {
    const chargeInput = document.querySelector("#charge-input");
    vendingMachine.chargeUserInputMoney((Number)(chargeInput.value));
    chargeInput.value = "";
    displayChargeAmount();
}

function displayChargeAmount() {
    const chargeAmount = document.querySelector("#charge-amount");
    chargeAmount.innerText = vendingMachine.getUserInputMoney();
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

function purchaseItem(name, price) {
    if(vendingMachine.getUserInputMoney() >= price) {
        if(productList.purchaseItem(name)) {
            vendingMachine.reduceUserInputMoney(price);
        }
        else{
            alert(MSG.INVALID_QUANTITY);
        }
    }
    else{
        alert(MSG.INVALID_MONEY);
    }
    buildPurchasePage();
    displayChargeAmount();
}

function clearContainer(container) {
    container.innerHTML = "";
}

export default buildPurchasePage;
