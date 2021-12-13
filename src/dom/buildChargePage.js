import VendingMachine from "../vendingMachine/VendingMachine.js";
import createDocumentElement from "../util/createDocumentElement.js";
import createTableRow from "../util/createTableRow.js";
import validateCharge from "../util/validateCharge.js";
import { TEXT, MSG } from "../constant/Constant.js";

const vendingMachine = new VendingMachine;

function buildChargePage() {
    const container = document.querySelector(".container");

    vendingMachine.getFromLocalStorage();

    clearContainer(container);
    chargeElement(container);
    coinDisplayElement(container);
    updateCoin();
}

function chargeElement(container) {
    const vendingMachineChargeLabel = createDocumentElement("h3", TEXT.CHARGE_COIN_LABEL);
    const vendingMachineChargeInput = createDocumentElement("input", "", "vending-machine-charge-input", TEXT.MACHINE_CHARGE_PLACEHOLDER);
    const vendingMachineChargeButton = createDocumentElement("button", TEXT.MACHINE_CHARGE_BUTTON, "vending-machine-charge-button");
    const vendingMachineMoneyLabel = createDocumentElement("p", TEXT.MACHINE_CHARGE_INFO_LABEL);
    const vendingMachineChargeAmount = createDocumentElement("span", "", "vending-machine-charge-amount");
    const vendingMachineCoinDisplayLabel = createDocumentElement("h3", TEXT.MACHINE_COIN_INFO_LABEL);

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
    const coinCategory = createDocumentElement("td", TEXT.MACHINE_COIN_CATEGORY);
    const coinAmount = createDocumentElement("td", TEXT.MACHINE_COIN_AMOUNT);

    container.appendChild(coinDisplayTable);
    coinDisplayTable.appendChild(coinDisplayTableRow);
    coinDisplayTableRow.appendChild(coinCategory);
    coinDisplayTableRow.appendChild(coinAmount);

    createTableRow(coinDisplayTable, TEXT.COIN_500,"vending-machine-coin-500-quantity");
    createTableRow(coinDisplayTable, TEXT.COIN_100,"vending-machine-coin-100-quantity");
    createTableRow(coinDisplayTable, TEXT.COIN_50,"vending-machine-coin-50-quantity");
    createTableRow(coinDisplayTable, TEXT.COIN_10,"vending-machine-coin-10-quantity");
}

function addCharge() {
    const vendingMachineChargeInput = document.querySelector("#vending-machine-charge-input");
    if(validateCharge(vendingMachineChargeInput.value)) {
        vendingMachine.chargeChange(vendingMachineChargeInput.value);
    }
    else{
        alert(MSG.INVALID_CHARGE);
    }

    vendingMachineChargeInput.value = "";
    updateCoin();
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
