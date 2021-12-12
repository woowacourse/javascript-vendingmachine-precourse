import { ADD_TAB_ID, ADD_TAB_CLASS, MANAGE_TAB_ID, COIN_VALUE, COIN_TABLE_ID, PURCHASE_TAB_ID } from './constants.js';
import Product from './product.js'
import { elementCreatorWithClass } from './dom/util.js';

export default class VendingMachine {
    constructor(){
        this.products = [];
        this.coins = {};
        for(let key in COIN_VALUE){
            this.coins[key] = 0;
        }
        this.input = 0;
    }

    displayProduct(product){
        const tr = elementCreatorWithClass('tr', ADD_TAB_CLASS.TABLE_TR, null);
        tr.append(
            elementCreatorWithClass('td', ADD_TAB_CLASS.TABLE_TD_NAME, product.name),
            elementCreatorWithClass('td', ADD_TAB_CLASS.TABLE_TD_PRICE, product.price),
            elementCreatorWithClass('td', ADD_TAB_CLASS.TABLE_TD_QUANTITY, product.quantity),
        );
        table.append(tr);
    }

    addProduct(name, price, quantity){
        //TODO: verify product
        const product = new Product(name, price, quantity);
        
        this.displayProduct(product);
        this.products.push(product);
    }

    getRandomCoins(money){
        for(let key in COIN_VALUE){
            if(key === 'LAST'){
                break;
            }

            const max = money / COIN_VALUE[key];
            const value = MissionUtils.Random.pickNumberInList([...Array(max).keys()]);
            this.coins[key] += value;
            money = money - COIN_VALUE[key] * value;
        }

        this.coins['LAST'] += money / COIN_VALUE['LAST'];
    }

    displayPossessCoins(){
        let total = 0;
        for(let key in this.coins){
            document.getElementById(COIN_TABLE_ID[key]).innerHTML = `${this.coins[key]}개`;
            total += this.coins[key] * COIN_VALUE[key];
        }
        document.getElementById(MANAGE_TAB_ID.AMOUNT_SPAN_VALUE).innerHTML = total;
    }

    addCoin(money){
        this.getRandomCoins(money);
        this.displayPossessCoins();
    }

    displayInputCoin(input){
        document.getElementById(PURCHASE_TAB_ID.CHARGE_AMOUNT).innerHTML = input;
    }

    userBuy(money){
        this.input = money;
        this.displayInputCoin(this.input);
    }

    getRandomReturn(money){
        let coins = {};
        for(let key in COIN_VALUE){
            if(key === 'LAST'){
                break;
            }

            const max = money / COIN_VALUE[key];
            const value = MissionUtils.Random.pickNumberInList([...Array(max).keys()]);
            coins[key] = value;
            money = money - COIN_VALUE[key] * value;
        }

        coins['LAST'] = money / COIN_VALUE['LAST'];
        this.input = 0;

        return coins;
    }

    displayReturnedCoins(coins){
        for(let key in this.coins){
            document.getElementById(PURCHASE_TAB_ID.COIN_TABLE[key]).innerHTML = `${coins[key]}개`;
        }
    }

    returnMoney(){
        const coins = this.getRandomReturn(this.input);
        this.displayReturnedCoins(coins);
    }
}