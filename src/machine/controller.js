import { COIN_VALUE } from '../constants.js';
import Product from './product.js'
import * as validator from './validator.js';
import { getStorage, updateStorage } from '../utils/storage.js';
import * as coinUtil from "../utils/coin.js";
import * as displayer from './display.js';

export default class Controller {
    addProduct(name, price, quantity){
        price = parseInt(price);
        quantity = parseInt(quantity);
        
        const item = getStorage();
        if(validator.checkAddProduct(name, price, quantity, item.products)){
            const product = new Product(name, price, quantity, item.productId++);
            displayer.displayProductAddTab(product);
            displayer.displayProductPurchaseTab(product, this);
            item.products.push(product);

            updateStorage(item);
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
        const inverted = coinUtil.generateInverted();

        const item = getStorage();
        while(money > 0){
            const pick = MissionUtils.Random.pickNumberInList(coinUtil.generateOnlyValues());
            if(money >= pick){
                money -= pick;
                item.coins[inverted[pick]]++;
            }
        }
        
        updateStorage(item);
    }

    userBuy(money){
        money = parseInt(money);

        
        if(validator.checkUserBuy(money)){
            const item = getStorage();
            item.input += money;
            
            updateStorage(item);
            displayer.displayInputCoin(item.input);
        }
    }

    buyProduct(product){
        
        const item = getStorage();
        if(item.input >= product.price){
            item.input -= product.price;
            product.quantity--;

            updateStorage(item);
            displayer.displayChangedProduct(product, item);
        }
    }

    returnMoney(){
        
        const item = getStorage();
        const coins = this.getRandomReturn(item.input, item);
        
        
        updateStorage(item);
        displayer.displayReturnedCoins(coins);
        displayer.displayRemainCoins(item);
    }

    getRandomReturn(money, item){
        let returnCoin = {};
        for(let key in COIN_VALUE){
            returnCoin[key] = 0;
        }

        for(let key in COIN_VALUE){
            if(money <= 0){
                break;
            }

            let required = money / COIN_VALUE[key];

            if(item.coins[key] > required){
                item.coins[key] -= required;
                money -= required * COIN_VALUE[key];
                returnCoin[key] = required;
            } else {
                returnCoin[key] = item.coins[key];
                money -= item.coins[key] * COIN_VALUE[key];
                item.coins[key] = 0;
            }
        }
        
        return returnCoin;
    }
}