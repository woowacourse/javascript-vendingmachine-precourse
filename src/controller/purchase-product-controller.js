import { setDataInLocalStorage } from './localstorage-controller.js';
import { CANNOT_BUY, CHARGED_CHANGES, CHARGED_MONEY, CHARGE_INPUT, INPUT_CHANGES, INPUT_MONEY, moneyList, PRODUCT_LIST, PURCHASE_HTML, WRONG_MONEY_INPUT } from '../constants.js';
import { fetchHtmlView } from '../fetch.js';

export default class PurchaseProductController {
    constructor(machine, view) {
        this.machine = machine;
        this.view = view;
    }

    onTabClick() {
        fetchHtmlView(PURCHASE_HTML)
            .then(html => this.view.renderView(html, this.machine.inputMoney, this.machine.productList, this.machine.inputChanges))
            .catch(err => alert(err));
    }

    putMoney() {
        const inputAmount = document.querySelector(CHARGE_INPUT).value;
        if(this.isCorrectChargedMoney(inputAmount)) {
            this.getTotalInputMoney(inputAmount);
            this.view.renderInputMoney(this.machine.inputMoney);
        }
        else {
            alert(WRONG_MONEY_INPUT);
        }
    }

    isCorrectChargedMoney(money) {
        return Number(money) > 0 && Number(money) % 10 === 0;
    }
    
    getTotalInputMoney(money) {
        this.machine.increaseInputMoney(money);
        setDataInLocalStorage(INPUT_MONEY, this.machine.inputMoney);
    }
    
    purchaseProduct(target) {
        const currentRow = target.parentElement.parentElement;
        const quantity = parseInt(currentRow.children[2].dataset?.productQuantity, 10);
        const price = parseInt(currentRow.children[1].dataset?.productPrice, 10);
        
        if(this.canBuyProduct(price, quantity)) {
            this.machine.decreaseInputMoney(price);
            setDataInLocalStorage(INPUT_MONEY, this.machine.inputMoney);

            this.machine.decreaseQuantity(currentRow.rowIndex - 2);
            setDataInLocalStorage(PRODUCT_LIST, JSON.stringify(this.machine.productList));

            this.view.renderDecreaseQuantity(currentRow.children[2], quantity - 1);
            this.view.renderInputMoney(this.machine.inputMoney);
        }
        else {
            alert(CANNOT_BUY);
        }
    }
    
    canBuyProduct(price, quantity) {
        return this.machine.inputMoney >= price && quantity > 0;
    }
    
    returnMoney() {
        this.calculateMinimumChanges();
        this.view.renderChanges(this.machine.inputChanges);
        this.view.renderInputMoney(this.machine.inputMoney);
    }
    
    calculateMinimumChanges() {
        this.machine.initializeInputChanges();
        moneyList.sort((a, b) => b - a)
            .forEach(coin => {
            while(coin <= this.machine.inputMoney) {
                if(this.machine.chargedChanges[coin] < 1) break;
                this.machine.decreaseInputMoney(coin);
                this.machine.decreaseChargedMoney(coin);
                this.machine.decreaseOneChargedChanges(coin);
                this.machine.increaseOneInputChanges(coin);
            }
        })
        setDataInLocalStorage(CHARGED_MONEY, this.machine.chargedMoney);
        setDataInLocalStorage(INPUT_MONEY, this.machine.inputMoney);
        setDataInLocalStorage(CHARGED_CHANGES, JSON.stringify(this.machine.chargedChanges));
        setDataInLocalStorage(INPUT_CHANGES, JSON.stringify(this.machine.inputChanges));
    }
};