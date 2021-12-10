import { createCheckNumber } from './common.js';
import { ERROR_MSG } from '../constants/index.js';

const checkProductQuantity = createCheckNumber(ERROR_MSG.requireChargeCoin);

export default checkProductQuantity;
