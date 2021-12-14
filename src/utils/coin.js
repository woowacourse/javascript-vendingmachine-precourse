import { COIN_VALUE } from "../constants.js";

export const generateTemplateCoins = () => {
        let template = {};
        for(let key in COIN_VALUE){
            template[key] = 0;
        }

        return template;
    }

export const generateInverted = () => {
        let inverted = {};
        for(let key in COIN_VALUE){
            inverted[COIN_VALUE[key]] = key;
        }

        return inverted;
    }

    // COIN_VALUE 에서 각 key의 value 값만 배열로 반환
export const generateOnlyValues = () => {
        let coinValues = [];
        for(let key in COIN_VALUE){ 
            coinValues.push(COIN_VALUE[key]);
        }

        return coinValues;
    }

export const getTotal = (coins) => {
    let total = 0
    for(let key in COIN_VALUE){
        total += coins[key] * COIN_VALUE[key];
    }

    return total;
}