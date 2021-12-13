import { ADD_TAB_ID, ADD_TAB_CLASS, MANAGE_TAB_ID, COIN_VALUE, COIN_TABLE_ID, PURCHASE_TAB_ID, PURCHASE_TAB_CLASS, PURCHASE_TAB_DATASET, ERROR_MESSAGE } from '../constants.js';
import Product from './product.js'
import { elementCreatorWithClass } from '../utils/dom.js';
import * as validator from './validator.js';
import { getStorage, updateStorage } from '../utils/storage.js';
import Coin from "./coin.js";

export default class VendingMachine {
    constructor(){
        this.products = [];
        this.coins = new Coin().coins;
        this.input = 0;
        this.productId = 0;
    }

    addProduct(name, price, quantity){
        price = parseInt(price);
        quantity = parseInt(quantity);
        
        const item = getStorage();

        if(validator.checkAddProduct(name, price, quantity, this.products)){
            const product = new Product(name, price, quantity, this.productId++);
            this.displayProductAddTab(product);
            this.displayProductPurchaseTab(product);
            this.products.push(product);

            //TODO: change this => item
            updateStorage(this);
        }
    }

    addCoin(money){
        money = parseInt(money);
        if(validator.checkAddcoin(money)){
            this.getRandomCoins(money);
            this.displayPossessCoins();
        }
    }

    getRandomCoins(money){
        const coin = new Coin();
        const inverted = coin.getInverted();

        const item = getStorage();
        while(money > 0){
            const pick = MissionUtils.Random.pickNumberInList(coin.getOnlyValues());
            if(money >= pick){
                money -= pick;
                this.coins[inverted[pick]]++;
            }
        }
        
        //TODO: change this => item
        updateStorage(this);
    }

    buyProduct(product){
        if(this.input >= product.price){
            this.input -= product.price;
            product.quantity--;

            this.changeDisplayProduct(product);
        }
    }

    userBuy(money){
        money = parseInt(money);
        if(validator.checkUserBuy(money)){
            this.input += money;
            this.displayInputCoin(this.input);
        }
    }

    returnMoney(){
        const coins = this.getRandomReturn(this.input);
        this.displayReturnedCoins(coins);
    }

    getRandomReturn(money){
        let returnCoin = {};
        for(let key in COIN_VALUE){
            returnCoin[key] = 0;
        }

        for(let key in COIN_VALUE){
            if(money <= 0){
                break;
            }

            let required = money / COIN_VALUE[key];

            if(this.coins[key] > required){
                this.coins[key] -= required;
                money -= required * COIN_VALUE[key];
                returnCoin[key] = required;
            } else {
                returnCoin[key] = this.coins[key];
                money -= this.coins[key] * COIN_VALUE[key];
                this.coins[key] = 0;
            }
        }
        
        return returnCoin;
    }

    displayProductAddTab(product){
        const tr = elementCreatorWithClass('tr', ADD_TAB_CLASS.TABLE_TR, null);
        tr.append(
            elementCreatorWithClass('td', ADD_TAB_CLASS.TABLE_TD_NAME, product.name),
            elementCreatorWithClass('td', ADD_TAB_CLASS.TABLE_TD_PRICE, product.price),
            elementCreatorWithClass('td', ADD_TAB_CLASS.TABLE_TD_QUANTITY, product.quantity),
        );
        document.getElementById(ADD_TAB_ID.PRODUCT_TABLE).append(tr);
    }


    changeDisplayProduct(product){
        document.querySelector(`#${product.id} .${PURCHASE_TAB_CLASS.PRODUCT_QUANTITY}`).innerHTML = product.quantity;
        document.getElementById(PURCHASE_TAB_ID.CHARGE_AMOUNT).innerHTML = this.input;
    }

    displayProductPurchaseTab(product){
        const tr = `<tr id= ${product.id} class= ${PURCHASE_TAB_CLASS.PURCHASE_ITEM}>
                        <td class=${PURCHASE_TAB_CLASS.PRODUCT_NAME} 
                            ${PURCHASE_TAB_DATASET.PRODUCT_NAME}=${product.name}>${product.name}</td>
                        <td class=${PURCHASE_TAB_CLASS.PRODUCT_PRICE} 
                            ${PURCHASE_TAB_DATASET.PRODUCT_PRICE}=${product.price}>${product.price}</td>
                        <td class=${PURCHASE_TAB_CLASS.PRODUCT_QUANTITY} 
                            ${PURCHASE_TAB_DATASET.PRODUCT_QUANTITY}=${product.quantity}>${product.quantity}</td>
                        <td>
                            <button class=${PURCHASE_TAB_CLASS.PURCHASE_BUTTON}>구매하기</button>
                        </td>
                    </tr>
                    `
        document.getElementById(PURCHASE_TAB_ID.PRODUCT_TABLE).insertAdjacentHTML('beforeend',tr);
        const trId = document.getElementById(product.id);
        trId.addEventListener('click', e=> {
            e.preventDefault();
            if(e.target.className == PURCHASE_TAB_CLASS.PURCHASE_BUTTON){
                this.buyProduct(product);
            }
        })
    }

    displayPossessCoins(){
        let total = 0;
        for(let key in this.coins){
            document.getElementById(COIN_TABLE_ID[key]).innerHTML = `${this.coins[key]}개`;
            total += this.coins[key] * COIN_VALUE[key];
        }
        document.getElementById(MANAGE_TAB_ID.AMOUNT_SPAN_VALUE).innerHTML = total;
    }

    

    displayInputCoin(input){
        document.getElementById(PURCHASE_TAB_ID.CHARGE_AMOUNT).innerHTML = input;
    }

    displayReturnedCoins(coins){
        for(let key in this.coins){
            document.getElementById(PURCHASE_TAB_ID.COIN_TABLE[key]).innerHTML = `${coins[key]}개`;
            document.getElementById(COIN_TABLE_ID[key]).innerHTML = `${this.coins[key]}개`;
        }
    }

    
}