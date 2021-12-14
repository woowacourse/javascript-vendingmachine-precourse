import { moneyList } from '../constants.js';

export default class ChargeMachineView {
    renderTotalChanges(changes) {
        moneyList.forEach(coin => 
                document.querySelector(`#vending-machine-coin-${coin}-quantity`).textContent = `${changes[coin]}개`);
    }
    
    renderChargedMoney(money) {
        const moneyResult = document.querySelector("#vending-machine-charge-amount");
        moneyResult.textContent = money;
    }
};