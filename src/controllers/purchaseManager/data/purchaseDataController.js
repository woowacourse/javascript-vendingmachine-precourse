import {
  getProducts,
  setMoneyCustomer,
  setProducts,
} from "../../../utils/getSetItems.js";

const purchaseProduct = (name, price, money) => {
  const products = getProducts().split(",");
  const newProducts = [];

  products.forEach(product => {
    const productInfo = product.split("/");
    if (productInfo[0] === name) {
      productInfo[2]--;
    }
    newProducts.push(productInfo.join("/"));
  });

  setProducts(newProducts.join(","));
  setMoneyCustomer(money - price);
};

export { purchaseProduct };
