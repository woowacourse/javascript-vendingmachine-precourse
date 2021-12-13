import { COIN_VALUE } from "../constants.js";

export default class Coin {
    constructor(){
        this.coins = this.generateTemplateCoins();
    }
    
    generateTemplateCoins = () => {
        let template = {};
        for(let key in COIN_VALUE){
            template[key] = 0;
        }

        return template;
    }
}