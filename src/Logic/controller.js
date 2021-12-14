import Product from '../Model/product.js'
import * as validator from './validator.js';
import { getStorage, updateStorage } from '../utils/storage.js';
import * as coinUtil from "../utils/coin.js";
import * as displayer from '../View/display.js';
import { COIN_VALUE } from '../constants.js';

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
            const item = getStorage();
            this.getRandomCoins(money, item);
            updateStorage(item);
            displayer.displayPossessCoins(item);
        }
    }

    getRandomCoins(money, item){
        const inverted = coinUtil.generateInverted();

        while(money > 0){
            const pick = MissionUtils.Random.pickNumberInList(coinUtil.generateOnlyValues());
            if(money >= pick){
                money -= pick;
                item.coins[inverted[pick]]++;
            }
        }
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
        const coins = this.getCoinReturn(item);
        updateStorage(item);

        displayer.displayReturnedCoins(coins);
        displayer.displayRemainCoins(item);
    }

    getCoinReturn(item){
        let returnCoin = coinUtil.generateTemplateCoins();
        for(let key in COIN_VALUE){
            if(item.input <= 0){
                break;
            }
            returnCoin[key] = this.getCoinFromPossessed(key, item)
        }
        return returnCoin;
    }

    getCoinFromPossessed(key, item){
        let required = parseInt(item.input / COIN_VALUE[key]);
        let returningCoin = 0;
        if(item.coins[key] > required){
            item.coins[key] -= required;
            item.input -= required * COIN_VALUE[key];
            returningCoin = required;
        } else {
            returningCoin = item.coins[key];
            item.input -= item.coins[key] * COIN_VALUE[key];
            item.coins[key] = 0;
        }

        return returningCoin;
    }
}