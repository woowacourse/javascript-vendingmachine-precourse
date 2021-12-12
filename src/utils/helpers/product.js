import Product from '../../core/class/Product.js';

const deserializeToProductInstance = products =>
  products.map(data => new Product(data));

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

export const hasDuplicatedProductName = (productName, products) =>
  products.find(product => {
    const { name } = product.getInformation();
    return name === productName;
  });
