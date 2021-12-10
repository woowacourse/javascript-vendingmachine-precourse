import { INPUT_NUMBER_RULE } from '../constants/index.js';

const getEnableChargeAmount = (chargeAmount) =>
    chargeAmount - (chargeAmount % INPUT_NUMBER_RULE.mod);

export default getEnableChargeAmount;
