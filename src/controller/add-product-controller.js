import { setDataInLocalStorage } from './localstorage-controller.js';
import { fetchHtmlView } from '../fetch.js';
import { WRONG_PRODUCT } from '../constants.js';

export default class AddProductController {
    constructor(machine, view) {
        this.machine = machine;
        this.view = view;
    }

    onTabClick() {
        fetchHtmlView('product_manage.html')
            .then(html => this.view.renderView(html, this.machine.productList))
            .catch(err => alert(err));
    }

    addProduct() {
        const name = document.querySelector("#product-name-input").value;
        const price = document.querySelector("#product-price-input").value;
        const quantity = document.querySelector("#product-quantity-input").value;
        
        if(this.isCorrectProductInputs(name, price, quantity)) {
            this.machine.addProductList({ name, price, quantity });
            setDataInLocalStorage('productList', JSON.stringify(this.machine.productList));
            this.view.renderAddedProductList(this.machine.productList);
        }
        else {
            alert(WRONG_PRODUCT);
        }
    }
    
    isCorrectProductInputs(name, price, quantity) {
        return this.isCorrectName(name) && this.isCorrectPrice(price) && this.isCorrectQuantity(quantity);
    }
    
    isCorrectName(name) {
        return !!name.trim();
    }
    
    isCorrectPrice(price) {
        return Number(price) >= 100 && Number(price) % 10 === 0;
    }
    
    isCorrectQuantity(quantity) {
        return Number(quantity) >= 1;
    }
};