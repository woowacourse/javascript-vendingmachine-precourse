import { getDataInLocalStorage } from '../controller/localstorage-controller.js';
import { moneyList } from '../constants.js';

export default class VendingMachine {
    constructor() {
        this.productList = JSON.parse(getDataInLocalStorage('productList')) || [];
        this.chargedMoney = parseInt(getDataInLocalStorage('chargedMoney'), 10) || 0;
        this.chargedChanges = JSON.parse(getDataInLocalStorage('chargedChanges')) || this.generateChangesObject();
        this.inputChanges = JSON.parse(getDataInLocalStorage('inputChanges')) || this.generateChangesObject();
        this.inputMoney = parseInt(getDataInLocalStorage('inputMoney'), 10) || 0;
    }

    generateChangesObject() {
        const result = {};
        moneyList.forEach(coin => result[coin] = 0);
        return result;
    }

    addProductList(product) {
        this.productList.push(product);
    }

    increaseChargedMoney(chargeAmount) {
        this.chargedMoney += parseInt(chargeAmount, 10);
    }

    increaseInputMoney(totalAmount) {
        this.inputMoney += parseInt(totalAmount, 10);
    }

    updateChargedChanges(newChanges) {
        for(let key in this.chargedChanges) {
            this.chargedChanges[key] += newChanges[key];
        }
    }

    decreaseOneChargedChanges(coin) {
        this.chargedChanges[coin] -= 1;
    }

    increaseOneInputChanges(coin) {
        this.inputChanges[coin] += 1;
    }

    decreaseChargedMoney(amount) {
        this.chargedMoney -= amount;
    }

    decreaseInputMoney(amount) {
        this.inputMoney -= amount;
    }

    decreaseQuantity(rowIndex) {
        this.productList[rowIndex].quantity -= 1;
    }

    initializeInputChanges() {
        this.inputChanges = this.generateChangesObject();
    }
};