const productList = [];
export const pushProductObject = (Name, Price, Quantity) => {
  const tmpProductObject = JSON.parse(localStorage.getItem(`${Name}`));
  if (tmpProductObject == null) {
    localStorage.setItem(`${Name}`, JSON.stringify({ productName: Name, productPrice: parseInt(Price), productQuantity: parseInt(Quantity) }));
    addProductList(Name);
  } else {
    tmpProductObject.productPrice += parseInt(Price);
    tmpProductObject.productQuantity += parseInt(Quantity);
    localStorage.setItem(`${Name}`, JSON.stringify(tmpProductObject));
  }
};

const addProductList = (Name) => {
  productList.push(Name);
  localStorage.setItem('productList', JSON.stringify({ productList }));
};
