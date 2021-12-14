import { GAME } from '../util/constant.js'

//공백체크
export function checkValidBlank(...inputArray) {
    for (let input of inputArray) {
        if (input.value.trim() === '') {
            return false;
        }
    }
    return true;
}

//상품가격 예외처리
export function checkProductPriceValid(...inputArray) {
    for (let input of inputArray) {
        if (input.value > 100 && input.value % 10 === 0) {
            return true;
        }
    }
    return false;
}

//0보다 큰 정수인지
export function checkProductQuantityValid(...inputArray) {
    for (let input of inputArray) {
        if (input.value <= 0 || input.value % 1 !== 0) {
            return false;
        }
    }
    return true;
}

//상품명 중복이 있는지
export function checkProductNameValid(input) {
    for (let product of GAME.PRODUCTS) {
        if (input.value === product.name) {
            return false;
        }
    }
    return true;
}

//0보다 크고 10으로 나누어 떨어지는지
export function checkInputNumberValid(...inputArray){
    for(let input of inputArray){
        if(input.value <= 0 || input.value % 10 !== 0){
            return false
        }
    }
    return true
}

