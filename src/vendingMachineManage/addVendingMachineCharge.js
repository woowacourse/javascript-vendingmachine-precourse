import { GAME } from '../util/constant.js';
import { checkVendingMachineChargeInputValid } from './checkVendingMachineInputValid.js';
import { cleanInputValue } from '../print/cleanInputValue.js';
import { makeRandomCharge } from './makeRandomCharge.js';
import { printVendingMachineChargeAmount, printVendingMachineChargeTable } from '../print/printVendingMachineCharge.js';

export function addVendingMachineCharge() {
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input');
    if (checkVendingMachineChargeInputValid()) {
        GAME.VENDING_MACHINE_CHARGE_TOTAL += Number($vendingMachineChargeInput.value);
        makeRandomCharge();

        //자판기 잔돈 테이블에 추가       
        printVendingMachineChargeTable();
        //자판기 보유금액 출력
        printVendingMachineChargeAmount();
    }
    //입력창 비우기
    cleanInputValue($vendingMachineChargeInput);
}