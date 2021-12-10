import INPUT_ITEM from './INPUT_ITEM.js';
import INPUT_NUMBER_RULE from './INPUT_NUMBER_RULE.js';

const ERROR_MSG = {
    requireProductName: `${INPUT_ITEM.productName}을 입력해주세요.`,
    requireProductPrice: `${INPUT_ITEM.productPrice}을 입력해주세요.`,
    requireProductQuantity: `${INPUT_ITEM.productQuantity}을 입력해주세요.`,
    requireChargeCoin: `${INPUT_ITEM.chargeCoin}을 입력해주세요.`,
    requireInputAmount: `${INPUT_ITEM.inputAmount}을 입력해주세요.`,
    naturalNumber: '양수로 입력해주세요.',
    number: '숫자로만 입력해주세요.',
    minPrice: `상품 가격은 ${INPUT_NUMBER_RULE.minPrice}이상만 가능합니다.`,
    mod: `${INPUT_NUMBER_RULE.mod}로 나누어지는 수를 입력해주세요.`,
    lockAmount: '투입한 돈이 부족합니다.',
};

export default ERROR_MSG;
