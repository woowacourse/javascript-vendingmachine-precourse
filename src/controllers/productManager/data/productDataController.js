import { ALERT_MSG } from "../../../utils/constants.js";
import { getProducts, setProducts } from "../../../utils/getSetItems.js";

// 같은 이름과 가격을 가진 상품이 있으면 해당 상품의 위치를, 없으면 -1을 반환
const isSameProductInProducts = (strOfProducts, name, price) => {
  const products = strOfProducts.split(",");
  let index = -1;

  for (let i = 0; i < products.length; i++) {
    const info = products[i].split("/");
    if (info[0] === name && info[1] === price) {
      index = i;
      break;
    }
  }

  return index;
};

// 상품명과 가격이 같은 상품이면 재고와 새로 추가한 수량을 더하여 저장
const addIfDuplicateProduct = (strOfProducts, index, quantity) => {
  const products = strOfProducts.split(",");
  const info = products[index].split("/");

  info[2] = parseInt(info[2], 10) + parseInt(quantity, 10);
  products[index] = info.join("/");

  setProducts(products.join(","));
};

const duplicateName = (strOfProducts, name) => {
  const products = strOfProducts.split(",");
  const productNames = [];

  products.forEach(product => {
    productNames.push(product.split("/")[0]);
  });

  return productNames.includes(name);
};

// 상품 가격 및 재고 변경
const changeProductInfo = (strOfProducts, name, price, quantity) => {
  const products = strOfProducts.split(",");

  for (let i = 0; i < products.length; i++) {
    const info = products[i].split("/");
    if (info[0] === name) {
      info[1] = price;
      info[2] = quantity;
      products[i] = info.join("/");
      break;
    }
  }

  return products;
};

// 상품명이 같은데 가격이 다르다면, 변경 여부 물어보기
const askToChangeProductInfo = (products, name, price, quantity) => {
  const { askChangeProduct, wrongProductName } = ALERT_MSG;

  if (confirm(askChangeProduct)) {
    const changedProducts = changeProductInfo(products, name, price, quantity);
    setProducts(changedProducts.join(","));
  } else {
    alert(wrongProductName);
  }
};

// 기존 상품 목록에 새 상품 추가하기
const addProductInProducts = (name, price, quantity, products) => {
  const index = isSameProductInProducts(products, name, price);

  if (index !== -1) {
    addIfDuplicateProduct(products, index, quantity);
  } else if (duplicateName(products, name)) {
    askToChangeProductInfo(products, name, price, quantity);
  } else {
    setProducts(`${products},${name}/${price}/${quantity}`);
  }
};

const addProduct = (name, price, quantity) => {
  const products = getProducts();
  const productInfo = `${name}/${price}/${quantity}`;

  if (products === null) {
    setProducts(productInfo);
  } else {
    addProductInProducts(name, price, quantity, products);
  }
};

export { addProduct };
