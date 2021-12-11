import { LIST_KEY_PRODUCT, DICT_KEY_PRODUCT } from '../../../const.js';

export const ID_TABLE_CURRENT_PRODUCT = 'current-product-table';

const CLASS_NAME_PREFIX = 'product-manage';
const getClassNameByKey = (key) => `${CLASS_NAME_PREFIX}-${key}`;

export const CLASS_NAME_PRODUCT_ITEM = `${CLASS_NAME_PREFIX}-item`;
export const DICT_CLASS_NAME_PRODUCT = LIST_KEY_PRODUCT.reduce(
  (acc, cur) => ({ ...acc, [cur]: getClassNameByKey(cur) }),
  {}
);

export const DICT_TABLE_HEADERS = { ...DICT_KEY_PRODUCT };
