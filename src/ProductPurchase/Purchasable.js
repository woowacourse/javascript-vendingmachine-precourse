import { getProductsFromLocalStorage } from '../ProductManage/CreateTable.js';

function getPurchasableFromProductList() {
  const purchasableFromProductList = [];
  const products = getProductsFromLocalStorage();
  products.forEach((product) => {
    const productPrice = product.가격;
    const amountHave = localStorage.getItem('투입한 금액');

    if (productPrice * 1 <= amountHave * 1) {
      purchasableFromProductList.push(product);
    }
  });

  return purchasableFromProductList;
}

function createNewPurchasable() {
  const newPurchasables = [];
  const purchasableFromProductList = getPurchasableFromProductList();
  purchasableFromProductList.forEach((product) => {
    const [name, price, count] = [product.상품명, product.가격, product.수량];
    const newPurchasable = {
      상품명: name,
      가격: price,
      수량: count,
    };
    newPurchasables.push(newPurchasable);
  });

  return newPurchasables;
}

export function updatePurchasableToLocalStorage() {
  const purchasable = [];

  const newPurchasable = createNewPurchasable();
  newPurchasable.forEach((product) => purchasable.push(product));

  localStorage.setItem('구매할 수 있는 상품 현황', JSON.stringify(purchasable));
}

export function getPurchasableFromLocalStorage() {
  let purchasable = [];

  if (localStorage.getItem('구매할 수 있는 상품 현황')) {
    purchasable = JSON.parse(localStorage.getItem('구매할 수 있는 상품 현황'));
  }

  const purchasableFromLocalStorage = [];
  purchasable.forEach((product) => purchasableFromLocalStorage.push(product));

  return purchasableFromLocalStorage;
}
