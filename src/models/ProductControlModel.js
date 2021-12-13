export default class ProductControlModel {

  setLoacalProductList(product) {
    const productList = JSON.parse(localStorage.getItem("PRODUCT_LIST"));  
    productList 
    ? localStorage.setItem("PRODUCT_LIST", JSON.stringify(productList.concat(product)))
    : localStorage.setItem("PRODUCT_LIST", JSON.stringify(product));
  }
  
  getLoacalProductList() {
    const localProductList = localStorage.getItem("PRODUCT_LIST");
    const parseLocalProductList = JSON.parse(localProductList);
    
    return parseLocalProductList;
  }
}