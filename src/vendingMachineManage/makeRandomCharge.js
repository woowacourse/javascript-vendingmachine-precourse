import { GAME } from '../util/constant.js';

function addVENDING_MACHINE_CHARGE(vendingMachineChargeSum, randomCoin) {
    for (let index in GAME.COIN_ARRAY) {
        if (randomCoin === Number(GAME.COIN_ARRAY[index])) {
            GAME.VENDING_MACHINE_CHARGE_ARRAY[index] += 1;
            vendingMachineChargeSum += randomCoin;
        }
    }
    return vendingMachineChargeSum
}

function makeRandomChargeArray($vendingMachineChargeInput) {
    let vendingMachineChargeSum = 0;
    while (true) {
        const randomCoin = MissionUtils.Random.pickNumberInList(GAME.COIN_ARRAY);
        if (vendingMachineChargeSum + randomCoin <= $vendingMachineChargeInput.value) {
            vendingMachineChargeSum = addVENDING_MACHINE_CHARGE(vendingMachineChargeSum, randomCoin)
        }
        if (vendingMachineChargeSum === Number($vendingMachineChargeInput.value)) {
            break;
        }

    }
}

export function makeRandomCharge() {
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input');
    makeRandomChargeArray($vendingMachineChargeInput);
}
