import Coin from "./coin.js";

export default class VendingMachine{
    constructor(){
        this.products = [];
        this.coins = new Coin().coins;
        this.input = 0;
        this.productId = 0;
    }
}