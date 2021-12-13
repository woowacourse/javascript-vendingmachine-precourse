import { LIST_KEY_PRODUCT } from '../../const.js';

export const ID_TABLE_PURCHASE = 'purchase-table';

const CLASS_NAME_PREFIX = 'product-purchase';

export const CLASS_NAME_PRODUCT_ITEM = `${CLASS_NAME_PREFIX}-item`;
export const DICT_CLASS_NAME_PRODUCT = LIST_KEY_PRODUCT.reduce(
  (acc, cur) => ({ ...acc, [cur]: `${CLASS_NAME_PREFIX}-${cur}` }),
  {}
);

export const HEADER_PURCHASE = '구매';

export const LIST_DATASET = ['productName', 'productPrice', 'productQuantity'];

export const DICT_PROPS_BUTTON = {
  className: 'purchase-button',
  innerText: '구매하기',
};

export const ACTION_PURCHASE = 'onPurchaseButtonClick';

export const ERROR_CANNOT_PURCHASE =
  '충전 금액이 모자라 상품을 구매할 수 없습니다. 금액을 충전해주세요.';
