import VendingMachine from "../vendingMachine/VendingMachine.js";
import createDocumentElement from "../util/createDocumentElement.js";
import createTableRow from "../util/createTableRow.js";

const vendingMachine = new VendingMachine;
vendingMachine.getFromLocalStorage();

function buildChargePage() {
    const container = document.querySelector(".container");

    clearContainer(container);
    chargeElement(container);
    coinDisplayElement(container);
    updateCoin();
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

function addCharge() {
    const vendingMachineChargeInput = document.querySelector("#vending-machine-charge-input");
    vendingMachine.chargeChange(vendingMachineChargeInput.value);
    vendingMachineChargeInput.value = "";
    updateCoin();
    console.log(vendingMachine.getTotalChange());
}

function updateCoin() {
    const vendingMachineCoin500Quantity = document.querySelector("#vending-machine-coin-500-quantity");
    const vendingMachineCoin100Quantity = document.querySelector("#vending-machine-coin-100-quantity");
    const vendingMachineCoin50Quantity = document.querySelector("#vending-machine-coin-50-quantity");
    const vendingMachineCoin10Quantity = document.querySelector("#vending-machine-coin-10-quantity");

    const coins = vendingMachine.getCoins();

    vendingMachineCoin500Quantity.innerText = coins.coin500 + "개";
    vendingMachineCoin100Quantity.innerText = coins.coin100 + "개";
    vendingMachineCoin50Quantity.innerText = coins.coin50 + "개";
    vendingMachineCoin10Quantity.innerText = coins.coin10 + "개";
}

function clearContainer(container) {
    container.innerHTML = "";
}

export default buildChargePage;
