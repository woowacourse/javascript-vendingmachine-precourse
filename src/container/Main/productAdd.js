import { PRODUCT_ADD, PURCHASE_MENU } from '../../constants/index.js';

/**
 * 상품 관리 탭의 데이터를 반환합니다.
 *
 * @param {Storage} storage
 * @returns
 */
export const getProducts = storage => storage.read(PRODUCT_ADD);

/**
 * 상품 관리 탭의 아이템을 생성합니다.
 *
 * @param {*} storage
 * @param {*} elements
 */
export const createAddProduct = (storage, elements) => {
  const [{ value: name }, { value: price }, { value: quantity }] = elements;
  const newItems = [...getProducts(storage), { name, price, quantity }];

  storage.produce(
    { [PRODUCT_ADD]: newItems },
    {
      [PURCHASE_MENU]: { ...storage.read(PURCHASE_MENU), [PRODUCT_ADD]: newItems },
    },
  );
};
