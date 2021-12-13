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

    getInverted = () => {
        let inverted = {};
        for(let key in COIN_VALUE){
            inverted[COIN_VALUE[key]] = key;
        }

        return inverted;
    }

    // COIN_VALUE 에서 각 key의 value 값만 배열로 반환
    getOnlyValues = () => {
        let coinValues = [];
        for(let key in COIN_VALUE){ 
            coinValues.push(COIN_VALUE[key]);
        }

        return coinValues;
    }
}