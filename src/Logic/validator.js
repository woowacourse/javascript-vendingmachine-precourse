import { ERROR_MESSAGE } from "../constants.js";

const isNumber = (input) => {
    if(isNaN(input)){
        alert(ERROR_MESSAGE.NAN);
        return false;
    }
    return true;
}

const isNegative = (input) => {
    if(input >= 0){
        return false;
    }
    alert(ERROR_MESSAGE.NEGATIVE);
    return true;
}

const isBelowTen = (input) => {
    if(input < 10){
        alert(ERROR_MESSAGE.BELOW_TEN);
        return false;
    }
    return true;
}

const isTenUnit = (input) => {
    if(input % 10 != 0){
        alert(ERROR_MESSAGE.TEN_UNIT);
        return false;
    }
    return true;
}

export const checkAddProduct = (name, price, quantity, products) => {
    if(isNegative(price)){
        return false;
    }
    if(isNegative(quantity)){
        return false;
    }
    for(let i=0; i<products.length; i++){
        if(products[i].name === name){
            alert(ERROR_MESSAGE.DUPLICATE);
            return false;
        }
    }

    return true;
}

export const checkAddcoin = (money) =>{
    if(!isNumber(money)){
        return false;
    }
    if(isNegative(money)){
        return false;
    }
    if(!isBelowTen(money)){
        return false;
    }
    if(!isTenUnit(money)){
        return false;
    }
    return true;
}

export const checkUserBuy = (money)=>{
    if(!isNumber(money)){
        return false;
    }
    if(isNegative(money)){
        return false;
    }

    return true;
}