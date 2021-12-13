import Product from "./Product.js";

class ProductList {
    constructor() {
        this.item = [];
    }

    addItem(name, price, quantity) {
        const newItem = new Product(name, price, quantity);
        this.item.push(newItem);
    }

    getItem() {
        return this.item;
    }
}

export default ProductList;
