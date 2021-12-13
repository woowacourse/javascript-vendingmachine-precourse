import Product from "./Product.js";

class ProductList {
    item = [];

    constructor() {
        this.item = [];
    }

    addItem(name, price, quantity) {
        const newItem = new Product(name, price, quantity);
        this.item.push(newItem);
        this.setLocalStorage();
    }

    getItem() {
        return this.item;
    }

    purchaseItem(name) {
        const found = this.item.find(element => element.name === name);
        if(found.quantity > 0) {
            found.quantity -= 1;
            this.setLocalStorage();
            return true;
        }
        return false;
    }

    setLocalStorage() {
        localStorage.setItem("productList", JSON.stringify(this.getItem()));
    }

    getFromLocalStorage() {
        this.item = JSON.parse(localStorage.getItem("productList")) ?? [];
    }
}


export default ProductList;
