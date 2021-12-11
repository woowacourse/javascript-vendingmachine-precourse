import { ADD_TAB_ID, ADD_TAB_CLASS, MANAGE_TAB_ID, COIN_VALUE } from './constants.js';
import Product from './product.js'
import { elementCreatorWithClass } from './dom/util.js';

export default class VendingMachine {
    constructor(){
        this.products = [];
        this.coins = {};
        for(let key in COIN_VALUE){
            this.coins[key] = 0;
        }
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

        this.coins['LAST'] = money / COIN_VALUE['LAST'];
    }

    addCoin(money){
        this.getRandomCoins(money);    
    }

}