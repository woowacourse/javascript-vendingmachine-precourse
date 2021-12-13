class VendingMachine {
    constructor() {
        this.coin500 = 0;
        this.coin100 = 0;
        this.coin50 = 0;
        this.coin10 = 0;
    }

    chargeChange(money) {
        this.coin10 += money/10;
    }

    getTotalChange() {
        return (this.coin500)*500 + (this.coin100)*100 + (this.coin50)*50 + (this.coin10)*10;
    }

    getFromLocalStorage() {
        this.coin500 = JSON.parse(localStorage.getItem("vendingMachine500"));
        this.coin100 = JSON.parse(localStorage.getItem("vendingMachine100"));
        this.coin50 = JSON.parse(localStorage.getItem("vendingMachine50"));
        this.coin10 = JSON.parse(localStorage.getItem("vendingMachine10"));
    }
}

export default VendingMachine;
