import Product from "./Product.js";

class ProductList {
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

    setLocalStorage() {
        localStorage.setItem("productList", JSON.stringify(this.getItem()));
    }

    getFromLocalStorage() {
        this.item = JSON.parse(localStorage.getItem("productList"));
    }
}


export default ProductList;
