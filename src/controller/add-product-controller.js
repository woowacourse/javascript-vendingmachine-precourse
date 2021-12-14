import AddProductView from '../view/add-product-view.js';
import { setDataInLocalStorage } from './localstorage-controller.js';

export default class AddProductController {
    constructor(machine) {
        this.machine = machine;
        this.view = new AddProductView;
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
            alert("옳바른 형식이 아닙니다. 상품명: 1자 이상, 가격: 100원 이상 10 배수, 수량: 1 이상");
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