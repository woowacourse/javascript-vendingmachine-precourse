import { GAME } from '../util/constant.js';

export function printVendingMachineChargeAmount() {
    const $vendingMachineChargeAmount = document.querySelector('#vending-machine-charge-amount');
    $vendingMachineChargeAmount.innerHTML = `보유금액: ${GAME.VENDING_MACHINE_CHARGE_TOTAL}`;
}

export function printVendingMachineChargeTable() {
    const $vendingMachineCoin500Quantity = document.querySelector('#vending-machine-coin-500-quantity');
    const $vendingMachineCoin100Quantity = document.querySelector('#vending-machine-coin-100-quantity');
    const $vendingMachineCoin50Quantity = document.querySelector('#vending-machine-coin-50-quantity');
    const $vendingMachineCoin10Quantity = document.querySelector('#vending-machine-coin-10-quantity');

    $vendingMachineCoin500Quantity.innerHTML = `${GAME.VENDING_MACHINE_CHARGE_ARRAY[0]}개`;
    $vendingMachineCoin100Quantity.innerHTML = `${GAME.VENDING_MACHINE_CHARGE_ARRAY[1]}개`;
    $vendingMachineCoin50Quantity.innerHTML = `${GAME.VENDING_MACHINE_CHARGE_ARRAY[2]}개`;
    $vendingMachineCoin10Quantity.innerHTML = `${GAME.VENDING_MACHINE_CHARGE_ARRAY[3]}개`;
}
