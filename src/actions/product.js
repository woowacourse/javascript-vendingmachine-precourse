export const PRODUCT_ACTION_TYPE = {
  ADD_PRODUCT: 'ADD_PRODUCT',
};

export const addProduct = data => {
  return { type: PRODUCT_ACTION_TYPE.ADD_PRODUCT, data };
};

// Sell Product도 넣어주기 !!!
