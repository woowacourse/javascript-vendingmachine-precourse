import {
    createValidFunction,
    createCheckEveryFunction,
    isRequired,
    checkNumber,
    checkNaturalNumber,
    checkModed,
} from './index.js';
import ERROR_MSG from '../constants/ERROR_MSG.js';

const checkInputAmount = createCheckEveryFunction([
    createValidFunction(isRequired, ERROR_MSG.requireInputAmount),
    checkNumber,
    checkNaturalNumber,
    checkModed,
]);

export default checkInputAmount;
