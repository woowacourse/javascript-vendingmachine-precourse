import { PRODUCT_ADD, PURCHASE_MENU } from '../../constants/index.js';

export const getProducts = storage => storage.read(PRODUCT_ADD);

export const createAddProduct = (storage, elements) => {
  const [{ value: name }, { value: price }, { value: quantity }] = elements;
  const newItems = [...getProducts(storage), { name, price, quantity }];

  this.$storage.produce(
    { [PRODUCT_ADD]: newItems },
    {
      [PURCHASE_MENU]: { ...storage.read(PURCHASE_MENU), [PRODUCT_ADD]: newItems },
    },
  );
};
