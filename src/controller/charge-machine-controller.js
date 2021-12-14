import { setDataInLocalStorage } from './localstorage-controller.js';
import { moneyList } from '../constants.js';

export default class ChargeMachineController {
    constructor(machine, view) {
        this.machine = machine;
        this.view = view;
    }

    chargeMoney() {
        const chargeAmount = document.querySelector("#vending-machine-charge-input").value;
        if(this.isCorrectChargeMoney(chargeAmount)) {
            this.getTotalChanges(chargeAmount);
            this.getTotalChargedMoney(chargeAmount);
            this.view.renderTotalChanges(this.machine.chargedChanges);
            this.view.renderChargedMoney(this.machine.chargedMoney);
        }
        else { 
            alert("옳바른 형식이 아닙니다. 10의 배수로 입력해주세요.");
        }
    }
    
    getTotalChargedMoney(chargeAmount) {
        this.machine.increaseChargedMoney(chargeAmount);
        setDataInLocalStorage('chargedMoney', this.machine.chargedMoney);
    }
    
    getTotalChanges(chargeAmount) {
        const newChanges = this.getNewChanges(chargeAmount);
        this.machine.updateChargedChanges(newChanges);
        setDataInLocalStorage('chargedChanges', JSON.stringify(this.machine.chargedChanges));
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