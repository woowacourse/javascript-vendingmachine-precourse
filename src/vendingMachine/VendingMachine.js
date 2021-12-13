import { MSG, NUMBER } from "../constant/Constant.js";

class VendingMachine {
    constructor() {
        this.coin500 = 0;
        this.coin100 = 0;
        this.coin50 = 0;
        this.coin10 = 0;
        this.userInputMoney = 0;
    }

    chargeChange(money) {
        while(money > 0) {
            let coin = MissionUtils.Random.pickNumberInList([NUMBER.COIN_10, NUMBER.COIN_50, NUMBER.COIN_100, NUMBER.COIN_500]);
            if(coin <= money) {
                this.addCoin(coin);
                money -= coin;
            }
        }
        this.setLocalStorage();
    }

    addCoin(coin) {
        switch (coin) {
            case NUMBER.COIN_10:
                this.coin10++;
                break;
            case NUMBER.COIN_50:
                this.coin50++;
                break;
            case NUMBER.COIN_100:
                this.coin100++;
                break;
            case NUMBER.COIN_500:
                this.coin500++;
                break;
            default:
                console.log(MSG.INVALID_INPUT + coin);
        }
    }

    chargeUserInputMoney(input) {
        this.userInputMoney += input;
        this.setLocalStorage();
    }

    getUserInputMoney() {
        return this.userInputMoney;
    }

    reduceUserInputMoney(amount) {
        this.userInputMoney -= amount;
        this.setLocalStorage();
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
        return (this.coin500)*NUMBER.COIN_500 + (this.coin100)*NUMBER.COIN_100 + (this.coin50)*NUMBER.COIN_50 + (this.coin10)*NUMBER.COIN_10;
    }

    returnCharge() {
        let returnCoins = {
            coin500: 0,
            coin100: 0,
            coin50: 0,
            coin10: 0
        }

        if(this.getTotalChange() > 0) {
            while(this.coin500 > 0 && this.userInputMoney >= NUMBER.COIN_500) {
                this.coin500--;
                this.userInputMoney -= 500;
                returnCoins.coin500++;
            }
            while(this.coin100 > 0 && this.userInputMoney >= NUMBER.COIN_100) {
                this.coin100--;
                this.userInputMoney -= 100;
                returnCoins.coin100++;
            }
            while(this.coin50 > 0 && this.userInputMoney >= NUMBER.COIN_50) {
                this.coin50--;
                this.userInputMoney -= 50;
                returnCoins.coin50++;
            }
            while(this.coin10 > 0 && this.userInputMoney >= NUMBER.COIN_10) {
                this.coin10--;
                this.userInputMoney -= 10;
                returnCoins.coin10++;
            }
        }

        this.setLocalStorage();
        return returnCoins;
    }

    getFromLocalStorage() {
        this.coin500 = JSON.parse(localStorage.getItem("vendingMachine500")) ?? 0;
        this.coin100 = JSON.parse(localStorage.getItem("vendingMachine100")) ?? 0;
        this.coin50 = JSON.parse(localStorage.getItem("vendingMachine50")) ?? 0;
        this.coin10 = JSON.parse(localStorage.getItem("vendingMachine10")) ?? 0;
        this.userInputMoney = JSON.parse(localStorage.getItem("userInputMoney")) ?? 0;
    }

    setLocalStorage() {
        localStorage.setItem("vendingMachine500", this.coin500);
        localStorage.setItem("vendingMachine100", this.coin100);
        localStorage.setItem("vendingMachine50", this.coin50);
        localStorage.setItem("vendingMachine10", this.coin10);
        localStorage.setItem("userInputMoney", this.userInputMoney);
    }
}

export default VendingMachine;
