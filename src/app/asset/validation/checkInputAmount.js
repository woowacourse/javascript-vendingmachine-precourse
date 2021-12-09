import {
    createValidFunction,
    createCheckEveryFunction,
    isRequired,
    checkNumber,
    checkNaturalNumber,
    checkModed,
} from './index.js';
import ERROR_MSG from '../constants/ERROR_MSG.js';

const checkRequired = createValidFunction(isRequired, ERROR_MSG.requireInputAmount);

const checkFunctions = [checkRequired, checkNumber, checkNaturalNumber, checkModed];

const checkInputAmount = createCheckEveryFunction(checkFunctions);

export default checkInputAmount;
