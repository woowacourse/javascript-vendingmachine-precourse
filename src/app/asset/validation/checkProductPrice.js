import {
    createValidFunction,
    createCheckEveryFunction,
    isRequired,
    checkNumber,
    checkNaturalNumber,
    checkModed,
} from './index.js';
import ERROR_MSG from '../constants/ERROR_MSG.js';
import INPUT_NUMBER_RULE from '../constants/INPUT_NUMBER_RULE.js';

const isBiggerOrSameMinPrice = (value) => value >= INPUT_NUMBER_RULE.minPrice;

const checkRequired = createValidFunction(isRequired, ERROR_MSG.requireProductPrice);
const checkBiggerOrSameMinPrice = createValidFunction(isBiggerOrSameMinPrice, ERROR_MSG.minPrice);

// 상품 가격 검증 함수들
const checkFunctions = [
    checkRequired,
    checkNumber,
    checkNaturalNumber,
    checkBiggerOrSameMinPrice,
    checkModed,
];

// 상품 가격 검증 함수
const checkProductPrice = createCheckEveryFunction(checkFunctions);

export default checkProductPrice;
