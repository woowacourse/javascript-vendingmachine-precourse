import {
    createValidFunction,
    createCheckEveryFunction,
    isRequired,
    checkNumber,
    checkNaturalNumber,
    checkModed,
} from './common.js';
import { ERROR_MSG } from '../constants/index.js';

const checkInputAmount = createCheckEveryFunction([
    createValidFunction(isRequired, ERROR_MSG.requireInputAmount),
    checkNumber,
    checkNaturalNumber,
    checkModed,
]);

export default checkInputAmount;
