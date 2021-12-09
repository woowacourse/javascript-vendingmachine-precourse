import { createCheckNumber } from './index.js';
import ERROR_MSG from '../constants/ERROR_MSG.js';

const checkProductQuantity = createCheckNumber(ERROR_MSG.requireChargeCoin);

export default checkProductQuantity;
