export const PRODUCT_ACTION_TYPE = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  SELL_PRODUCT: 'SELL_PRODUCT',
};

export const addProduct = data => {
  return { type: PRODUCT_ACTION_TYPE.ADD_PRODUCT, data };
};

export const sellProduct = data => {
  return { type: PRODUCT_ACTION_TYPE.SELL_PRODUCT, data };
};
