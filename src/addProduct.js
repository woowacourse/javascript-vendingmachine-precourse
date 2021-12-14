import Product from './product.js';

export default function addProduct() {
  const productNameInput = document.querySelector('#product-name-input');
  const productPriceInput = document.querySelector('#product-price-input');
  const productQuantityInput = document.querySelector(
    '#product-quantity-input'
  );

  const product = new Product();
  product.name = productNameInput.value;
  product.price = productPriceInput.value;
  product.quantity = productQuantityInput.value;

  return product;
}
