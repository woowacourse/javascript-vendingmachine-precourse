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
        const coins = this.getRandomReturn(item);
        updateStorage(item);

        displayer.displayReturnedCoins(coins);
        displayer.displayRemainCoins(item);
    }

    getRandomReturn(item){
        const returnedCoins = coinUtil.generateTemplateCoins();
        const inverted = coinUtil.generateInverted();

        while(item.input > 0){
            const pick = MissionUtils.Random.pickNumberInList(coinUtil.generateOnlyValues());
            if(item.input >= pick){
                item.input -= pick;
                item.coins[inverted[pick]]--;
                returnedCoins[inverted[pick]]++;
            }
        }
        
        return returnedCoins;
    }
}