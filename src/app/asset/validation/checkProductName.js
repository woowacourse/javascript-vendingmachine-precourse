import { createValidFunction, isRequired } from './index.js';
import ERROR_MSG from '../constants/ERROR_MSG.js';

const checkProductName = createValidFunction(isRequired, ERROR_MSG.requireProductName);

export default checkProductName;
