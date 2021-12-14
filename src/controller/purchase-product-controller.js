import { setDataInLocalStorage } from './localstorage-controller.js';
import { moneyList } from '../constants.js';

export default class PurchaseProductController {
    constructor(machine, view) {
        this.machine = machine;
        this.view = view;
    }

    putMoney() {
        const inputAmount = document.querySelector("#charge-input").value;
        if(this.isCorrectChargedMoney(inputAmount)) {
            this.getTotalInputMoney(inputAmount);
            this.view.renderInputMoney(this.machine.totalInputMoney);
        }
        else {
            alert("옳바른 형식이 아닙니다. 10의 배수로 입력해주세요.");
        }
    }

    isCorrectChargedMoney(money) {
        return Number(money) > 0 && Number(money) % 10 === 0;
    }
    
    getTotalInputMoney(money) {
        this.machine.updateTotalMoney(money);
        setDataInLocalStorage('totalInputMoney', this.machine.totalInputMoney);
    }
    
    purchaseProduct(target) {
        const currentRow = target.parentElement.parentElement;
        const quantity = parseInt(currentRow.children[2].dataset?.productQuantity, 10);
        const price = parseInt(currentRow.children[1].dataset?.productPrice, 10);
        
        if(this.canBuyProduct(price, quantity)) {
            this.machine.decreaseInputMoney(price);
            setDataInLocalStorage('totalInputMoney', this.machine.totalInputMoney);
            this.machine.decreaseQuantity(currentRow.rowIndex - 2);
            setDataInLocalStorage('productList', JSON.stringify(this.machine.productList));
            this.view.renderDecreaseQuantity(currentRow.children[2], quantity - 1);
            this.view.renderInputMoney(this.machine.totalInputMoney);
        }
        else {
            alert("더이상 구매할 수 없습니다.");
        }
    }
    
    canBuyProduct(price, quantity) {
        return this.machine.totalInputMoney >= price && quantity > 0;
    }
    
    returnMoney() {
        this.calculateMinimumChanges();
        this.view.renderChanges(this.machine.inputChanges);
        this.view.renderInputMoney(this.machine.totalInputMoney);
    }
    
    calculateMinimumChanges() {
        this.machine.initializeInputChanges();
        moneyList.forEach(coin => {
            while(coin <= this.machine.totalInputMoney) {
                if(this.machine.totalChanges[coin] < 1) break;
                this.machine.decreaseInputMoney(coin);
                this.machine.decreaseChargedMoney(coin);
                this.machine.decreaseOneTotalChanges(coin);
                this.machine.increaseOneInputChanges(coin);
            }
        })
        setDataInLocalStorage('chargedMoney', this.machine.chargedMoney);
        setDataInLocalStorage('totalInputMoney', this.machine.totalInputMoney);
        setDataInLocalStorage('totalChanges', JSON.stringify(this.machine.totalChanges));
        setDataInLocalStorage('inputChanges', JSON.stringify(this.machine.inputChanges));
    }
};