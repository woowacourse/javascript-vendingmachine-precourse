export const Product = function (name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;

    const setAmount = () => {
        if (this.amount > 0) this.amount -= 1;
        else alert();
    };
};
