import { createCheckEveryFunction, createValidFunction, isRequired } from './index.js';
import { ERROR_MSG } from '../constants/index.js';
import { isUniqueProductName } from '../../localStorage/inventory.js';

export default createCheckEveryFunction([
    createValidFunction(isRequired, ERROR_MSG.requireProductName),
    createValidFunction(isUniqueProductName, ERROR_MSG.overlapProductName),
]);
