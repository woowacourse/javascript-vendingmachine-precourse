import { createAddFormContainer } from './addContent/index.js';
import {
  DICT_ID_MENU,
  KEY_MENU_ADD,
  KEY_MENU_CHARGE,
  KEY_MENU_PURCHASE,
} from '../menu/const.js';
import createHeading from '../utils/createHeading.js';

export const DICT_ID_MENU_CONTENT = Object.keys(DICT_ID_MENU).reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `${DICT_ID_MENU[cur]}-content`,
  }),
  {}
);

export const DICT_MENU_CONTENT = {
  [KEY_MENU_ADD]: [createAddFormContainer()],
  [KEY_MENU_CHARGE]: [createHeading(2, '잔돈 충전 메뉴')],
  [KEY_MENU_PURCHASE]: [createHeading(2, '상품 구매 메뉴')],
};
