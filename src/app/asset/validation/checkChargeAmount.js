import {
    createValidFunction,
    createCheckEveryFunction,
    isRequired,
    checkNumber,
    checkNaturalNumber,
} from './index.js';
import ERROR_MSG from '../constants/ERROR_MSG.js';

const checkRequired = createValidFunction(isRequired, ERROR_MSG.requireChargeCoin);

const checkFunctions = [checkRequired, checkNumber, checkNaturalNumber];

const checkProductQuantity = createCheckEveryFunction(checkFunctions);

export default checkProductQuantity;
