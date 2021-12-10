import {
    createValidFunction,
    createCheckEveryFunction,
    isRequired,
    checkNumber,
    checkNaturalNumber,
    checkModed,
} from './common.js';
import { ERROR_MSG, INPUT_NUMBER_RULE } from '../constants/index.js';

// 상품 가격 검증 함수
const checkProductPrice = createCheckEveryFunction([
    createValidFunction(isRequired, ERROR_MSG.requireProductPrice),
    checkNumber,
    checkNaturalNumber,
    createValidFunction((value) => value >= INPUT_NUMBER_RULE.minPrice, ERROR_MSG.minPrice),
    checkModed,
]);

export default checkProductPrice;
