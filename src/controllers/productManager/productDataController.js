const addProduct = (name, price, quantity) => {
  const products = JSON.parse(localStorage.getItem("products"));
  const productInfo = `${name}/${price}/${quantity}`;
  let strOfProducts = "";

  if (products === null) {
    strOfProducts = JSON.stringify(productInfo);
  } else {
    strOfProducts = JSON.stringify(`${products},${productInfo}`);
  }

  localStorage.setItem("products", strOfProducts);
};

export { addProduct };
