const purchaseProduct = (name, price, money) => {
  const products = JSON.parse(localStorage.getItem("products")).split(",");
  const newProducts = [];

  products.forEach(product => {
    const productInfo = product.split("/");
    if (productInfo[0] === name) {
      productInfo[2]--;
    }
    newProducts.push(productInfo.join("/"));
  });

  localStorage.setItem("products", JSON.stringify(newProducts.join(",")));
  localStorage.setItem("money", JSON.stringify(money - price));
};

export { purchaseProduct };
