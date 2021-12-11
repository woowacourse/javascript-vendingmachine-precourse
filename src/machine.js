import Product from './product.js'

export default class VendingMachine {
    constructor(){
        this.products = [];
    }

    addProduct(name, price, quantity){
        //TODO: verify product
        const product = new Product(name, price, quantity);
        console.log(product);
        this.products.push(product);
    }
}