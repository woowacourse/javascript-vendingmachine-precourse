export default function Product(name, price, quantity) {
  this.name = name;
  this.price = Number(price);
  this.quantity = Number(quantity);

  this.getProduct = () => {
    return [this.name, this.price, this.quantity];
  };
}
