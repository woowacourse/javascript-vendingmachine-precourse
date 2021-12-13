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

    vendingMachineChargeButton.onclick = () => addCharge();

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

    createTableRow(coinDisplayTable,"500원","vending-machine-coin-500-quantity");
    createTableRow(coinDisplayTable,"100원","vending-machine-coin-100-quantity");
    createTableRow(coinDisplayTable,"50원","vending-machine-coin-50-quantity");
    createTableRow(coinDisplayTable,"10원","vending-machine-coin-10-quantity");
}

function createTableRow(Table, innerText, id) {
    const tableRow = document.createElement("tr");
    const coin = createDocumentElement("td", innerText);
    const coinAmount = createDocumentElement("td", "", id);

    Table.appendChild(tableRow);
    tableRow.appendChild(coin);
    tableRow.appendChild(coinAmount);
}

function addCharge() {
    const vendingMachineChargeInput = document.querySelector("#vending-machine-charge-input");
    vendingMachine.chargeChange(vendingMachineChargeInput.value);
    vendingMachineChargeInput.value = "";
    console.log(vendingMachine.getTotalChange());
}

function clearContainer(container) {
    container.innerHTML = "";
}

export default buildChargePage;
