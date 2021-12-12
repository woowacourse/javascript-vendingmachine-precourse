function VendingMachine() {
  this.products = [];
  this.charge = 0;

  this.addProduct = (product) => {
    this.products.push(product);
    localStorage.setItem('product', JSON.stringify(this.products));
  };

  this.addCharge = (charge) => {
    this.charge += charge;
    localStorage.setItem('charge', JSON.stringify(this.charge));
  };
}

export const vendingMachine = new VendingMachine();
