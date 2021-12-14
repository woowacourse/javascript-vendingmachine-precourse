import { $, $closest, isEquals } from '../../common/helper.js';
import {
  CHARGE_AMOUNT,
  DEFAULT_VALUES,
  MACHINE_MANAGE,
  PRODUCT_ADD,
  PURCHASE_MENU,
  ZERO,
} from '../../constants/index.js';

/**
 * 상품 구매 탭 데이터를 반환합니다.
 *
 * @param {Storage} storage
 * @returns
 */
export const getPurchaseMenu = storage => storage.read(PURCHASE_MENU);

/**
 * 상품 구매 탭: 금액을 투입합니다.
 *
 * @param {object} storageItem
 * @param {HTMLInputElement} elements
 * @returns
 */
export const purchase = (storageItem, elements) => {
  const [{ value: charge }] = elements;
  const currentAmount = storageItem[CHARGE_AMOUNT] || ZERO;
  return +charge + +currentAmount;
};

/**
 * 상품 구매 탭의 아이템을 생성합니다.
 *
 * @param {Storage} storage
 * @param {HTMLElement} elements
 * @param {object} item
 */
export const createPurchaseMenu = (storage, elements, item) => {
  storage.create(PURCHASE_MENU, {
    ...getPurchaseMenu(storage),
    [CHARGE_AMOUNT]: purchase(item, elements),
  });
};

/**
 * 상품 구매에 따른 잔돈과 수량을 반환합니다.
 *
 * @param {object} param
 * @param {object} tabData
 * @returns
 */
const calculateProduct = ({ name, quantity, price }, tabData) => [
  tabData[PRODUCT_ADD].map(item => {
    if (isEquals(item.name, name)) return { ...item, quantity: quantity - 1 };
    return item;
  }),
  +tabData[CHARGE_AMOUNT] - +price,
];

/**
 * 잔돈을 계산합니다.
 *
 * @param {number} remainCount
 * @param {number} changes
 * @param {number} coin
 * @returns
 */
const getChangesCount = (remainCount, changes, coin) => {
  if (coin > changes) return ZERO;
  if (remainCount < 1) return ZERO;
  const count = Math.floor(changes / coin);
  return remainCount - count < ZERO ? remainCount : count;
};

/**
 * dataset으로 엘리먼트를 조회한 데이터를 배열로 반환합니다.
 *
 * @param {*} element
 * @param {*} targets
 * @returns
 */
const getDataProduct = (element, targets) =>
  targets.reduce(
    (result, target) => [...result, $(`[data-product-${target}]`, $closest(element, 'tr'))],
    [],
  );

/**
 * 상품 구매 탭: 상품을 구매하고 그 결과를 적용합니다.
 *
 * @param {HTMLTableRowElement} element
 * @param {object} tabData
 * @returns
 */
export const applyProduct = (element, tabData) => {
  const [{ textContent: name }, { textContent: price }, { textContent: quantity }] = getDataProduct(
    element,
    ['name', 'price', 'quantity'],
  );

  const [product, changes] = calculateProduct({ name, quantity, price }, tabData);

  return { name, quantity, product, changes };
};

/**
 * 재귀함수로 잔돈을 교환합니다.
 *
 * @param {*} changes
 * @param {*} index
 * @param {*} charges
 * @param {*} items
 * @returns
 */
const exchange = (changes, index, charges, items) => {
  let leftChanges = changes;
  const manageItems = [...charges];
  const purchaseItems = [...items];

  if (leftChanges <= ZERO || index >= charges.length)
    return [manageItems, purchaseItems, leftChanges];

  const { description, count } = manageItems[index];
  const leftChangesCount = getChangesCount(count, leftChanges, +description);

  if (leftChangesCount <= ZERO) return exchange(leftChanges, index + 1, manageItems, purchaseItems);

  leftChanges -= +description * leftChangesCount;
  manageItems[index] = { ...manageItems[index], count: count - leftChangesCount };
  purchaseItems[index] = { ...purchaseItems[index], count: leftChangesCount };
  return exchange(leftChanges, index, manageItems, purchaseItems);
};

/**
 * 탐욕법을 적용하여 잔돈을 교환합니다.
 *
 * @param {number} changes
 * @param {object[]} charges
 * @returns
 */
export const coinExchange = (changes, charges) =>
  exchange(changes, 0, charges, DEFAULT_VALUES[MACHINE_MANAGE]);
