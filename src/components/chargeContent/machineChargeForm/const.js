const ID_PREFIX = 'vending-machine-charge';

const LIST_ID_SUFFIX = ['form', 'input', 'button'];

export const DICT_ID_CHARGE_FORM = LIST_ID_SUFFIX.reduce(
  (acc, cur) => ({
    ...acc,
    [`${cur}Id`]: `${ID_PREFIX}-${cur}`,
  }),
  {}
);

export const TYPE_INPUT = 'number';
export const PLACEHOLDER_INPUT = '자판기가 보유할 금액';
export const TEXT_BUTTON_CHARGE = '충전하기';
