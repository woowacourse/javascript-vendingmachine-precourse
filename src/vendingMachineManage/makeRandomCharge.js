import { GAME } from '../util/constant.js';

//잔돈 객체에 반영
function addVENDING_MACHINE_CHARGE(vendingMachineChargeSum, coinAmount, i) {
    vendingMachineChargeSum += GAME.COIN_ARRAY[i] * coinAmount;
    GAME.VENDING_MACHINE_CHARGE_ARRAY[i] = coinAmount;
    return vendingMachineChargeSum;
}

//랜덤잔돈 만들기
function makeRandomChargeArray($vendingMachineChargeInput) {
    let i = 0;
    let vendingMachineChargeSum = 0;
    while (true) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, Number($vendingMachineChargeInput.value));
        if (vendingMachineChargeSum + (GAME.COIN_ARRAY[i] * randomNumber) < $vendingMachineChargeInput.value) {
            vendingMachineChargeSum = addVENDING_MACHINE_CHARGE(vendingMachineChargeSum, randomNumber, i);
            i++;
        }
        if (i === 3) {
            vendingMachineChargeSum = addVENDING_MACHINE_CHARGE(vendingMachineChargeSum, ($vendingMachineChargeInput.value - vendingMachineChargeSum) / 10, i);
            i++;
        }
        if (i > 3) {
            break;
        }
    }
}

export function makeRandomCharge() {
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input');
    //랜덤잔돈 만들기
    makeRandomChargeArray($vendingMachineChargeInput);
}