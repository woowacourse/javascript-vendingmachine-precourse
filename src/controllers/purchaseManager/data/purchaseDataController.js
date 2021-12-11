import {
  getItemFromLocalStorage,
  setItemFromLocalStorage,
} from "../../../utils/itemFromLocalStorage.js";

const purchaseProduct = (name, price, money) => {
  const products = getItemFromLocalStorage("products").split(",");
  const newProducts = [];

  products.forEach(product => {
    const productInfo = product.split("/");
    if (productInfo[0] === name) {
      productInfo[2]--;
    }
    newProducts.push(productInfo.join("/"));
  });

  setItemFromLocalStorage("products", newProducts.join(","));
  setItemFromLocalStorage("money", money - price);
};

export { purchaseProduct };
