export default class Item{
  state = {
    name:"",
    price:0,
    count:0,
  }
  constructor(_n,_p,_c){
    this.state.name(_n);
    this.state.price(_p);
    this.state.count(_c);
  }
  checkoutCount(){
    this.state.count--;
  }
}