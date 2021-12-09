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

// 상품 가격 검증 함수
const checkProductPrice = createCheckEveryFunction([
    createValidFunction(isRequired, ERROR_MSG.requireProductPrice),
    checkNumber,
    checkNaturalNumber,
    createValidFunction((value) => value >= INPUT_NUMBER_RULE.minPrice, ERROR_MSG.minPrice),
    checkModed,
]);

export default checkProductPrice;
