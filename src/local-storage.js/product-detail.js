class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

export const saveProductToStorage = function (
  productNameValue,
  productPriceValue,
  productQuantityValue
) {
  let productList = [];

  productList.push(
    new Product(productNameValue, productPriceValue, productQuantityValue)
  );
  localStorage.setItem('productList', JSON.stringify(productList));
  //   const product = JSON.parse(localStorage.getItem('productDetail'));

  for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem('productList'));
  }
};
