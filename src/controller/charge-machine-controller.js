import { setDataInLocalStorage } from './localstorage-controller.js';
import { CHARGED_CHANGES, CHARGE_HTML, CHARGE_INPUT, moneyList, VM_CHARGE_INPUT, WRONG_MONEY_INPUT } from '../constants.js';
import { fetchHtmlView } from '../fetch.js';

export default class ChargeMachineController {
    constructor(machine, view) {
        this.machine = machine;
        this.view = view;
    }

    onTabClick() {
        fetchHtmlView(CHARGE_HTML)
            .then(html => this.view.renderView(html, this.machine.chargedMoney, this.machine.chargedChanges))
            .catch(err => alert(err));
    }

    chargeMoney() {
        const chargeAmount = document.querySelector(VM_CHARGE_INPUT).value;
        if(this.isCorrectChargeMoney(chargeAmount)) {
            this.getTotalChanges(chargeAmount);
            this.getTotalChargedMoney(chargeAmount);
            this.view.renderTotalChanges(this.machine.chargedChanges);
            this.view.renderChargedMoney(this.machine.chargedMoney);
        }
        else { 
            alert(WRONG_MONEY_INPUT);
        }
    }
    
    getTotalChargedMoney(chargeAmount) {
        this.machine.increaseChargedMoney(chargeAmount);
        setDataInLocalStorage(CHARGE_INPUT, this.machine.chargedMoney);
    }
    
    getTotalChanges(chargeAmount) {
        const newChanges = this.getNewChanges(chargeAmount);
        this.machine.updateChargedChanges(newChanges);
        setDataInLocalStorage(CHARGED_CHANGES, JSON.stringify(this.machine.chargedChanges));
    }
    
    getNewChanges(newChargeAmount) {
        const result = this.generateChangeObject();
        while(newChargeAmount) {
            const coin = this.generateRandomChanges();
            if(newChargeAmount >= coin) {
                result[coin] += 1;
                newChargeAmount -= coin;
            }
        }
        return result;
    }

    generateChangeObject() {
        const result = {};
        moneyList.forEach(coin => result[coin] = 0);
        return result;
    }
    
    generateRandomChanges() {
        return MissionUtils.Random.pickNumberInList(moneyList);
    }
    
    isCorrectChargeMoney(money) {
        return Number(money) > 0 && Number(money) % 10 === 0;
    }
};