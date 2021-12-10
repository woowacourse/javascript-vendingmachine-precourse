import { createCheckEveryFunction, createValidFunction, isRequired } from './common.js';
import { ERROR_MSG } from '../constants/index.js';
import { isUniqueProductName } from '../../localStorage/index.js';

const checkProductName = createCheckEveryFunction([
    createValidFunction(isRequired, ERROR_MSG.requireProductName),
    createValidFunction(isUniqueProductName, ERROR_MSG.overlapProductName),
]);

export default checkProductName;
