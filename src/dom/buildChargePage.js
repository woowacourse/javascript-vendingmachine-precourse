import VendingMachine from "../vendingMachine/VendingMachine.js";
import createDocumentElement from "../util/createDocumentElement.js";

const vendingMachine = new VendingMachine;
vendingMachine.getFromLocalStorage();

function buildChargePage() {
    const container = document.querySelector(".container");

    clearContainer(container);
    chargeElement(container);
    coinDisplayElement(container);
}

function chargeElement(container) {
    const vendingMachineChargeLabel = createDocumentElement("h3", "자판기 동전 충전하기");
    const vendingMachineChargeInput = createDocumentElement("input", "", "vending-machine-charge-input", "자판기가 보유할 금액");
    const vendingMachineChargeButton = createDocumentElement("button", "충전하기", "vending-machine-charge-button");
    const vendingMachineMoneyLabel = createDocumentElement("p", "보유 금액: ");
    const vendingMachineChargeAmount = createDocumentElement("span", "", "vending-machine-charge-amount");
    const vendingMachineCoinDisplayLabel = createDocumentElement("h3", "자판기가 보유한 동전");

    container.appendChild(vendingMachineChargeLabel);
    container.appendChild(vendingMachineChargeInput);
    container.appendChild(vendingMachineChargeButton);
    container.appendChild(vendingMachineMoneyLabel);
    vendingMachineMoneyLabel.appendChild(vendingMachineChargeAmount);
    container.appendChild(vendingMachineCoinDisplayLabel);
}

function coinDisplayElement(container) {
    const coinDisplayTable = document.createElement("table");
    const coinDisplayTableRow =  document.createElement("tr");
    const coinCategory = createDocumentElement("td", "동전");
    const coinAmount = createDocumentElement("td", "개수");

    container.appendChild(coinDisplayTable);
    coinDisplayTable.appendChild(coinDisplayTableRow);
    coinDisplayTableRow.appendChild(coinCategory);
    coinDisplayTableRow.appendChild(coinAmount);

    coin500DisplayElement(coinDisplayTable);
    coin100DisplayElement(coinDisplayTable);
    coin50DisplayElement(coinDisplayTable);
    coin10DisplayElement(coinDisplayTable);
}

function coin500DisplayElement(Table) {
    const coin500DisplayTableRow =  document.createElement("tr");
    const coin500 = createDocumentElement("td", "500원");
    const coin500Amount = createDocumentElement("td", "", "vending-machine-coin-500-quantity");

    Table.appendChild(coin500DisplayTableRow);
    coin500DisplayTableRow.appendChild(coin500);
    coin500DisplayTableRow.appendChild(coin500Amount);
}

function coin100DisplayElement(Table) {
    const coin100DisplayTableRow =  document.createElement("tr");
    const coin100 = createDocumentElement("td", "100원");
    const coin100Amount = createDocumentElement("td", "", "vending-machine-coin-100-quantity");

    Table.appendChild(coin100DisplayTableRow);
    coin100DisplayTableRow.appendChild(coin100);
    coin100DisplayTableRow.appendChild(coin100Amount);
}

function coin50DisplayElement(Table) {
    const coin50DisplayTableRow =  document.createElement("tr");
    const coin50 = createDocumentElement("td", "50원");
    const coin50Amount = createDocumentElement("td", "", "vending-machine-coin-50-quantity");

    Table.appendChild(coin50DisplayTableRow);
    coin50DisplayTableRow.appendChild(coin50);
    coin50DisplayTableRow.appendChild(coin50Amount);
}

function coin10DisplayElement(Table) {
    const coin10DisplayTableRow =  document.createElement("tr");
    const coin10 = createDocumentElement("td", "10원");
    const coin10Amount = createDocumentElement("td", "", "vending-machine-coin-10-quantity");

    Table.appendChild(coin10DisplayTableRow);
    coin10DisplayTableRow.appendChild(coin10);
    coin10DisplayTableRow.appendChild(coin10Amount);
}

function clearContainer(container) {
    container.innerHTML = "";
}

export default buildChargePage;
