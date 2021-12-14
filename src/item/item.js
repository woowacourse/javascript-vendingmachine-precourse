export default class Item{
  constructor(_name, _price, _count) {
    this.name = _name;
    this.price = _price;
    this.count = _count;
  }
  checkoutCount(){
    this.state.count--;
  }
}