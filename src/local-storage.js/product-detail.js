export const saveProductToStorage = function (
  productNameValue,
  productPriceValue,
  productQuantityValue
) {
  let newProduct = {}; // 추가할 값

  newProduct.name = productNameValue;
  newProduct.price = productPriceValue;
  newProduct.quantity = productQuantityValue;

  // localStorage 저장된 값을 분해해서
  let prevProductList = JSON.parse(localStorage.getItem('productList'));
  if (prevProductList === null) {
    prevProductList = [];
  }

  let finalProductList = prevProductList.concat(newProduct);

  localStorage.setItem('productList', JSON.stringify(finalProductList));
};
