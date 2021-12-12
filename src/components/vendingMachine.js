function VendingMachine() {
  this.products = [];

  this.addProduct = (product) => {
    this.products.push(product);
    localStorage.setItem('product', JSON.stringify(this.products));

    console.log(this.products);
  };
}

export const vendingMachine = new VendingMachine();
