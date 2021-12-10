export class PRODUCT {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getName(){
        console.log(this.name)
        console.log(this.price)
        console.log(this.quantity)
    }
}