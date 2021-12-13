import { COIN_VALUE } from '../constants.js';
import Product from './product.js'
import * as validator from './validator.js';
import { getStorage, updateStorage } from '../utils/storage.js';
import Coin from "./coin.js";
import * as displayer from './display.js';

export default class Controller {
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
            displayer.displayProductAddTab(product);
            displayer.displayProductPurchaseTab(product, this);
            this.products.push(product);

            //TODO: change this => item, except controller(this.buyProduct)
            updateStorage(this);
        }
    }

    addCoin(money){
        money = parseInt(money);
        if(validator.checkAddcoin(money)){
            this.getRandomCoins(money);

            const item = getStorage();
            displayer.displayPossessCoins(item);
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

    userBuy(money){
        money = parseInt(money);

        const item = getStorage();
        if(validator.checkUserBuy(money)){
            this.input += money;
            displayer.displayInputCoin(this.input);
        }

        //TODO: change this => item
        updateStorage(this);
    }

    buyProduct(product){

        //TODO: const item = getStorage();
        if(this.input >= product.price){
            this.input -= product.price;
            product.quantity--;

            updateStorage(this);
            const item = getStorage();
            displayer.displayChangedProduct(product, item);
        }
    }

    returnMoney(){
        
        //const item = getStorage();
        const coins = this.getRandomReturn(this.input);
        updateStorage(this);
        
        displayer.displayReturnedCoins(coins);

        const item = getStorage();
        displayer.displayRemainCoins(item);
        //TODO: change this => item
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
}