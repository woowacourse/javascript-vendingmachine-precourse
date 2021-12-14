import { GAME } from '../util/constant.js';
import { printVendingMachineChargeAmount, printVendingMachineChargeTable } from '../print/printVendingMachineCharge.js';
import { printChargeAmount, printCoinReturnTable } from '../print/printProductPurchase.js';

function makeCustomerChargeArray(coinAmount, coin, i) {
    GAME.CUSTOMER_CHARGE_ARRAY[i] += coinAmount;
    GAME.CUSTOMER_CHARGE_TOTAL -= coin * coinAmount;
    GAME.VENDING_MACHINE_CHARGE_ARRAY[i] -= coinAmount;
}

function makeCustomerCharge() {
    let coinAmount = 0;
    for (let i in GAME.VENDING_MACHINE_CHARGE_ARRAY) {
        if (GAME.COIN_ARRAY[i] * GAME.VENDING_MACHINE_CHARGE_ARRAY[i] <= GAME.CUSTOMER_CHARGE_TOTAL) {
            makeCustomerChargeArray(GAME.VENDING_MACHINE_CHARGE_ARRAY[i], GAME.COIN_ARRAY[i], i)
        }
        else if (GAME.COIN_ARRAY[i] * GAME.VENDING_MACHINE_CHARGE_ARRAY[i] > GAME.CUSTOMER_CHARGE_TOTAL) {
            coinAmount = GAME.CUSTOMER_CHARGE_TOTAL / GAME.COIN_ARRAY[i];
            makeCustomerChargeArray(coinAmount, GAME.COIN_ARRAY[i], i)
        }
    }
}

function setVENDING_MACHINE_CHARGE_TOTAL() {
    if (GAME.VENDING_MACHINE_CHARGE_TOTAL >= GAME.CUSTOMER_CHARGE_TOTAL) {
        GAME.VENDING_MACHINE_CHARGE_TOTAL -= GAME.CUSTOMER_CHARGE_TOTAL;
    }
    else {
        GAME.VENDING_MACHINE_CHARGE_TOTAL = 0;
    }
}

export function clickCoinReturnButton() {
    if (GAME.CUSTOMER_CHARGE_TOTAL > 0) {
        setVENDING_MACHINE_CHARGE_TOTAL()

        makeCustomerCharge()

        printChargeAmount()

        printCoinReturnTable()

        printVendingMachineChargeAmount();
        printVendingMachineChargeTable();
    }
}
