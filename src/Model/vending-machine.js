import * as coinUtil from "../utils/coin.js";

export default class VendingMachine{
    constructor(){
        this.products = [];
        this.coins = coinUtil.generateTemplateCoins();
        this.input = 0;
        this.productId = 0;
    }
}