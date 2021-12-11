import { DICT_ID_MENU } from '../menu/const.js';

export const DICT_ID_MENU_CONTENT = Object.keys(DICT_ID_MENU).reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `${DICT_ID_MENU[cur]}-content`,
  }),
  {}
);
