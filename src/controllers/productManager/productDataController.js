import { ALERT_MSG } from "../../utils/constants.js";

// 같은 이름과 가격을 가진 상품이 있으면 해당 상품의 위치를, 없으면 -1을 반환
const checkIsSameProduct = (strOfProducts, name, price) => {
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
const addIfDuplicateProduct = (index, quantity) => {
  const products = JSON.parse(localStorage.getItem("products")).split(",");
  const info = products[index].split("/");

  info[2] = parseInt(info[2], 10) + parseInt(quantity, 10);
  products[index] = info.join("/");

  localStorage.setItem("products", JSON.stringify(products.join(",")));
};

const duplicateName = (strOfProducts, name) => {
  const products = strOfProducts.split(",");
  const productNames = [];

  products.forEach(product => {
    productNames.push(product.split("/")[0]);
  });

  return productNames.includes(name);
};

// 기존 상품 목록에 새 상품 추가하기
const addProductInProducts = (name, price, quantity, products) => {
  const index = checkIsSameProduct(products, name, price);

  if (index !== -1) {
    addIfDuplicateProduct(index, quantity);
  } else if (duplicateName(products, name)) {
    alert(ALERT_MSG.wrongProductName);
  } else {
    localStorage.setItem(
      "products",
      JSON.stringify(`${products},${name}/${price}/${quantity}`),
    );
  }
};

const addProduct = (name, price, quantity) => {
  const products = JSON.parse(localStorage.getItem("products"));
  const productInfo = `${name}/${price}/${quantity}`;

  if (products === null) {
    localStorage.setItem("products", JSON.stringify(productInfo));
  } else {
    addProductInProducts(name, price, quantity, products);
  }
};

export { addProduct };
