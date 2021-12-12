import ProductAddCheck from "./ProductAddCheck.js";
import { PRODUCT, VALUES, ERROR_MESSAGE } from "../utils/constants.js";
import ProductAddView from "./ProductAddView.js";

export default class ProductAddEvent {
    static addEvent() {
        this.addProductAddEvent();
    }

    static checkAlreadyHave(name, price, quantity, product) {
        if(product[name] !== undefined && product[name][VALUES][0] === price) {
            return parseInt(product[name][VALUES][1]) + parseInt(quantity);
        }

        return quantity;
    }

    static storeProduct(name, price, quantity) {
        const product = JSON.parse(localStorage.getItem(PRODUCT));

        if(localStorage.getItem(PRODUCT) === null) {
            localStorage.setItem(PRODUCT, JSON.stringify({[name]:{values: [price, quantity]}}));
        } else {
            product[name] = {values: [price, this.checkAlreadyHave(name, price, quantity, product)]};
            localStorage.setItem(PRODUCT, JSON.stringify(product));
        }
    }

    static makeBlank() {
        document.getElementById('product-name-input').value = "";
        document.getElementById('product-price-input').value = "";
        document.getElementById('product-quantity-input').value = "";
    }

    static checkResult(name, price, quantity, productAddCheck) {
        if(productAddCheck.checkAll()) {
            this.storeProduct(name, price, quantity);
            ProductAddView.showTable();
            this.makeBlank();
        } else {
            alert(ERROR_MESSAGE);
        }
    }

    static addProductAddEvent() {
        document.getElementById('product-add-button').addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('product-name-input').value;
            const price = document.getElementById('product-price-input').value;
            const quantity = document.getElementById('product-quantity-input').value;
            const productAddCheck = new ProductAddCheck(name, price, quantity);
    
            this.checkResult(name, price, quantity, productAddCheck);
        });
    }
}