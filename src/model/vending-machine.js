import { getDataInLocalStorage } from '../controller/localstorage-controller.js';
import { moneyList } from '../constants.js';

export default class VendingMachine {
    constructor() {
        this.productList = JSON.parse(getDataInLocalStorage('productList')) || [];
        this.chargedMoney = parseInt(getDataInLocalStorage('chargedMoney'), 10) || 0;
        this.totalChanges = JSON.parse(getDataInLocalStorage('totalChanges')) || this.generateChangesObject();
        this.inputChanges = JSON.parse(getDataInLocalStorage('inputChanges')) || this.generateChangesObject();
        this.totalInputMoney = parseInt(getDataInLocalStorage('totalInputMoney'), 10) || 0;
    }

    generateChangesObject() {
        const result = {};
        moneyList.forEach(coin => result[coin] = 0);
        return result;
    }

    addProductList(product) {
        this.productList.push(product);
    }

    updateChargedMoney(chargeAmount) {
        this.chargedMoney += parseInt(chargeAmount, 10);
    }

    updateTotalChanges(newChanges) {
        for(let key in this.totalChanges) {
            this.totalChanges[key] += newChanges[key];
        }
    }
};