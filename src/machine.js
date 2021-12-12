import { ADD_TAB_ID, ADD_TAB_CLASS, MANAGE_TAB_ID, COIN_VALUE, COIN_TABLE_ID, PURCHASE_TAB_ID, PURCHASE_TAB_CLASS, PURCHASE_TAB_DATASET } from './constants.js';
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
        this.productId = 0;
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

    buyProduct(product){
        if(this.input >= product.price){
            this.input -= product.price;
            product.quantity--;

            this.changeDisplayProduct(product);
        }
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

    addProduct(name, price, quantity){
        //TODO: verify product
        const product = new Product(name, price, quantity, this.productId++);
        
        this.displayProductAddTab(product);
        this.displayProductPurchaseTab(product);
        this.products.push(product);
    }

    getRandomCoins(money){
        for(let key in COIN_VALUE){
            if(key === 'LAST'){
                break;
            }

            const max = money / COIN_VALUE[key];
            
            let spreadMax = [];
            for(let i=0; i<=max; i++){
                spreadMax.push(i);
            }

            const value = MissionUtils.Random.pickNumberInList(spreadMax);
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
        let returnCoin = {};
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

    displayReturnedCoins(coins){
        for(let key in this.coins){
            document.getElementById(PURCHASE_TAB_ID.COIN_TABLE[key]).innerHTML = `${coins[key]}개`;
            document.getElementById(COIN_TABLE_ID[key]).innerHTML = `${this.coins[key]}개`;
        }
    }

    returnMoney(){
        const coins = this.getRandomReturn(this.input);
        this.displayReturnedCoins(coins);
    }
}