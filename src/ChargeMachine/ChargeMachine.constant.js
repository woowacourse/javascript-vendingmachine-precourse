// title
const TITLE_FORM = '자판기 동전 추가하기';
export const TITLE_COIN_IN_MACHINE = '자판기가 보유한 동전';

// vending machine manage menu
export const ID_MACHINE_TAB = 'vending-machine-manage-section';
export const ID_MACHINE_CHARGE_INPUT = 'vending-machine-charge-input';
export const ID_MACHINE_CHARGE_SUBMIT = 'vending-machine-charge-button';
export const ID_MACHINE_CHARGE_AMOUNT = 'vending-machine-charge-amount';
export const ID_MACHINE_COIN_STATUS = 'vending-machine-coin-status';
export const ID_MACHINE_COIN_500_QUANTITY = 'vending-machine-coin-500-quantity';
export const ID_MACHINE_COIN_100_QUANTITY = 'vending-machine-coin-100-quantity';
export const ID_MACHINE_COIN_50_QUANTITY = 'vending-machine-coin-50-quantity';
export const ID_MACHINE_COIN_10_QUANTITY = 'vending-machine-coin-10-quantity';

// placeholder, button value, grid base value
const PLACEHOLDER_INSERT_COIN = '자판기가 보유할 금액';
const VAL_INSERT_BUTTON = '충전하기';
export const STRING_CHARGE_AMOUNT_LABEL = '보유 금액: ';
export const VAL_GRID_COLUMN_SIZE = '100px 100px';
const STRING_COIN_NAMES_HEADER = '동전';
const STRING_COIN_QUANTITY_HEADER = '갯수';
const STRING_COIN_500 = '500';
const STRING_COIN_100 = '100';
const STRING_COIN_50 = '50';
const STRING_COIN_10 = '10';

// item objects for form container
export const CHARGE_MACHINE_FORM_CONTAINER_ITEMS = [
  {
    tag: 'h2',
    value: TITLE_FORM,
  },
  {
    tag: 'input',
    attributes: {
      id: ID_MACHINE_CHARGE_INPUT,
      type: 'text',
      placeholder: PLACEHOLDER_INSERT_COIN,
    },
  },
  {
    tag: 'button',
    attributes: {
      id: ID_MACHINE_CHARGE_SUBMIT,
    },
    value: VAL_INSERT_BUTTON,
  },
];

// item objects for coin grid
export const COIN_IN_MACHINE_ITEMS = [
  {
    tag: 'div',
    value: STRING_COIN_NAMES_HEADER,
  },
  {
    tag: 'div',
    value: STRING_COIN_QUANTITY_HEADER,
  },
  {
    tag: 'div',
    value: STRING_COIN_500,
  },
  {
    tag: 'div',
    attributes: {
      id: ID_MACHINE_COIN_500_QUANTITY,
    },
  },
  {
    tag: 'div',
    value: STRING_COIN_100,
  },
  {
    tag: 'div',
    attributes: {
      id: ID_MACHINE_COIN_100_QUANTITY,
    },
  },
  {
    tag: 'div',
    value: STRING_COIN_50,
  },
  {
    tag: 'div',
    attributes: {
      id: ID_MACHINE_COIN_50_QUANTITY,
    },
  },
  {
    tag: 'div',
    value: STRING_COIN_10,
  },
  {
    tag: 'div',
    attributes: {
      id: ID_MACHINE_COIN_10_QUANTITY,
    },
  },
];
