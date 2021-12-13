export const ID_PRODUCT_ADD_TAB_BUTTON = 'product-add-menu';
export const ID_CHARGE_MACHINE_TAB_BUTTON = 'vending-machine-manage-menu';
export const ID_PURCHASE_TAB = 'product-purchase-menu';

const VAL_PRODUCT_ADD_TAB_BUTTON = '상품 관리';
const VAL_CHARGE_MACHINE_TAB_BUTTON = '잔돈 추가';
const VAL_PURCHASE_TAB_BUTTON = '상품 구매';

// item objects for buttons
export const NAV_BUTTON_ITEMS = [
  {
    tag: 'button',
    attributes: {
      id: ID_PRODUCT_ADD_TAB_BUTTON,
    },
    value: VAL_PRODUCT_ADD_TAB_BUTTON,
  },
  {
    tag: 'button',
    attributes: {
      id: ID_CHARGE_MACHINE_TAB_BUTTON,
    },
    value: VAL_CHARGE_MACHINE_TAB_BUTTON,
  },
  {
    tag: 'button',
    attributes: {
      id: ID_PURCHASE_TAB,
    },
    value: VAL_PURCHASE_TAB_BUTTON,
  },
];
