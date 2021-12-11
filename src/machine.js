import { ADD_TAB_ID, ADD_TAB_CLASS } from './constants.js';
import Product from './product.js'
import { elementCreatorWithClass } from './dom/util.js';

export default class VendingMachine {
    constructor(){
        this.products = [];
    }

    displayProduct(product){
        const table = document.getElementById(ADD_TAB_ID.TABLE);
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

        console.log(this.products);
    }
}