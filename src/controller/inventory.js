export class Inventory {
  saveItem(name, price, quantity) {
    // const newProduct = new Product(name, price, quantity);
    localStorage.setItem(name, `${price}-${quantity}`);
  }
}
