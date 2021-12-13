import Product from "./product.js";

export default class ProductList {
  constructor() {
    this.products = [];
  }

  findIndex(product) {
    let index = -1;
    let count = 0;
    this.products.forEach(element => {
      const compareResult = element.name.localeCompare(product.name);
      if(compareResult === 0) {
        index = count;
      }
      count += 1;
    });
    return index;
  }

  addProduct(product) {
    const index = this.findIndex(product);
    if(index === -1) {
      this.products.push(product);
      localStorage.setItem(`product-${product.name}`, `${product.price}-${product.quantity}`);
    } else {
      let quantity = Number(this.products[index].quantity);
      quantity += Number(product.quantity);
      this.changePrice(index, product);
      localStorage.setItem(`product-${product.name}`, `${this.products[index].price}-${quantity}`);
      this.updateProducts();
    }
  }

  removeProduct(product) {
    const index = this.findIndex(product);  
    if( index === -1) {
      alert('해당 상품은 없습니다.');//상수화 필요 
    } else {
      let quantity = Number(this.products[index].quantity);
      quantity -= Number(product.quantity);
      localStorage.setItem(`product-${product.name}`, `${product.price}-${quantity}`);
      this.updateProducts()
    }  
  }

  changePrice(index, product) {
    const compareResult = this.products[index].price.localeCompare(product.price);
    if(compareResult !== 0) {
      this.products[index].price = product.price;
    }
  }

  updateProducts() {
    this.products = [];
    for(let i = 0; i < localStorage.length; i += 1) {
      if( this.isProduct(localStorage.key(i)) ) {
        const [,name] = localStorage.key(i).split('-');
        const [price, quantity] = localStorage.getItem(localStorage.key(i)).split('-'); 
        this.products.push(new Product(name, price, quantity));
      }
    }
  }

  isProduct(key) {
    return key.includes('product-');
  }
}