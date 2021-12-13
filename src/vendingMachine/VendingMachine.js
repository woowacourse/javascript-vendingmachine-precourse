class VendingMachine {
    constructor() {
        this.coin500 = 0;
        this.coin100 = 0;
        this.coin50 = 0;
        this.coin10 = 0;
    }

    getFromLocalStorage() {
        this.coin500 = JSON.parse(localStorage.getItem("vendingMachine500"));
        this.coin100 = JSON.parse(localStorage.getItem("vendingMachine100"));
        this.coin50 = JSON.parse(localStorage.getItem("vendingMachine50"));
        this.coin10 = JSON.parse(localStorage.getItem("vendingMachine10"));
    }
}

export default VendingMachine;
