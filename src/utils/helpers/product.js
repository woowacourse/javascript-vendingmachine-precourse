import Product from '../../core/class/Product.js';
import { MESSAGE } from '../constants.js';

const generateProduct = productData => new Product(productData);

const deserializeToProductInstance = products => products.map(generateProduct);

export const deserializeProductsData = data => {
  return data
    ? {
        products: deserializeToProductInstance(data.products),
      }
    : null;
};

export const filterPurchaseableProduct = (money, products) =>
  products.filter(item => {
    const { price, quantity } = item.getInformation();
    return price <= money && quantity > 0;
  });

export const sellProduct = (productName, products) =>
  products.map(item => {
    const { name } = item.getInformation();
    if (name === productName) item.sellProduct();
    return item;
  });

const hasSamePrice = (inputedPrice, product) => {
  const { price } = product.getInformation();
  return inputedPrice === price;
};

export const findDuplicatedProduct = (productName, products) =>
  products.find(product => {
    const { name } = product.getInformation();
    return name === productName;
  });

export const isChangeableProduct = (newPrice, duplicatedProduct) =>
  !duplicatedProduct ||
  hasSamePrice(newPrice, duplicatedProduct) ||
  window.confirm(MESSAGE.ASK_CHANGE_PRICE);

const updateProduct = ({ price, quantity }, product) => {
  product.changePrice(price);
  product.addQuantity(quantity);
};

export const generateUpdatedProducts = (
  productData,
  products,
  duplicatedProduct
) => {
  if (duplicatedProduct) {
    updateProduct(productData, duplicatedProduct);
    return [...products];
  }
  return [...products, generateProduct(productData)];
};
