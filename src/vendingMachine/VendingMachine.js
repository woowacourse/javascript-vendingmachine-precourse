class VendingMachine {
    constructor() {
        this.coin500 = 0;
        this.coin100 = 0;
        this.coin50 = 0;
        this.coin10 = 0;
    }

    chargeChange(money) {
        while(money > 0) {
            let coin = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
            if(coin <= money) {
                this.addCoin(coin);
                money -= coin;
            }
        }
    }

    addCoin(coin) {
        switch (coin) {
            case 10:
                this.coin10++;
                break;
            case 50:
                this.coin50++;
                break;
            case 100:
                this.coin100++;
                break;
            case 500:
                this.coin500++;
                break;
            default:
                console.log("잘못된 입력 값 : " + coin);
        }
    }

    getCoins() {
        const coins = {
            coin500: this.coin500,
            coin100: this.coin100,
            coin50: this.coin50,
            coin10: this.coin10
        }
        return coins;
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
