import ProductPurchaseCheck from "./ProductPurchaseCheck.js";
import ProductPurchaseView from "./ProductPurchaseView.js";
import { ERROR_MESSAGE, USER_CHARGE, VALUES, CHANGE, COINS, USER_COINS, FIVE_HUNDRED, ONE_HUNDRED, FIFTY, TEN, ZERO} from '../utils/constants.js';


export default class ProductPurchaseEvent {
    static addEvent() {
        this.addUserChargeEvent();
        this.addReturnEvent();
    }

    static storeUserCharge(userCharge) {
        const userMoney = JSON.parse(localStorage.getItem(USER_CHARGE));
    
        if(localStorage.getItem(USER_CHARGE) === null) {
            localStorage.setItem(USER_CHARGE, JSON.stringify({values: userCharge}));
        } else {
            userMoney[VALUES] = parseInt(userMoney[VALUES]) + parseInt(userCharge);
            localStorage.setItem(USER_CHARGE, JSON.stringify(userMoney));
        }
    }

    static checkResult(userCharge, productPurchaseCheck) {
        if(productPurchaseCheck.checkAll()){
            this.storeUserCharge(userCharge);
            ProductPurchaseView.showUserCharge();
        } else {
            alert(ERROR_MESSAGE);
        }
    }

    static addUserChargeEvent() {
        document.getElementById('charge-button').addEventListener('click', (e) => {
          e.preventDefault();
          const userCharge = document.getElementById('charge-input').value;
          const productPurchaseCheck = new ProductPurchaseCheck(userCharge);
    
          this.checkResult(userCharge, productPurchaseCheck);
        })
    }

    static checkUserCharge(userMoney) {
        if(userMoney[VALUES] === 0) {
          alert("투입한 금액이 없습니다!")
          return false;
        }
    
        return true;
    }

    static checkChange(coins, change) {
        if(coins === null || parseInt(change[VALUES]) === 0) {
            ProductPurchaseView.showUserCoinTable();
          alert("거스름돈이 없습니다!");
          return false;
        }
    
        return true;
    }

    static makeEmpty(coins, userCoins, change, userMoney) {
        let list = [FIVE_HUNDRED, ONE_HUNDRED, FIFTY, TEN];
    
        list.forEach((element) => {
          userCoins[element] = coins[element];
          coins[element] = ZERO;
        });
    
        userMoney[VALUES] -= change[VALUES];
        change[VALUES] = 0;
    }

    static storeAllResult(coins, userCoins, change, userMoney) {
        localStorage.setItem(COINS, JSON.stringify(coins));
        localStorage.setItem(USER_COINS, JSON.stringify(userCoins));
        localStorage.setItem(CHANGE, JSON.stringify(change));
        localStorage.setItem(USER_CHARGE, JSON.stringify(userMoney));
    }

    static listInit(temp, real) {
        this.temp = temp;
        this.real = real;
        let list = [temp, real];
    
        return list;
    }

    static makeUserCoins(num, list, coins, userCoins) {
        userCoins[num] += 1;
        coins[num] -= 1;
        list[0] -= num;
        list[1] += num;
    
        return list;
    }

    static minimumCoin(coins, userCoins, change, userMoney) {
        let list = this.listInit(userMoney[VALUES], 0);
        while(list[0] >= 0) {
          if(list[0] >= 500 && coins[500] >= 1) {
            list = this.makeUserCoins(FIVE_HUNDRED, list, coins, userCoins);
          } else if(list[0] >= 100 && coins[100] >= 1) {
            list = this.makeUserCoins(ONE_HUNDRED, list, coins, userCoins);
          } else if(list[0] >= 50 && coins[50] >= 1) {
            list = this.makeUserCoins(FIFTY, list, coins, userCoins);
          } else if(list[0] >= 10 && coins[10] >= 1) {
            list = this.makeUserCoins(TEN, list, coins, userCoins);
          } else {
            change[VALUES] = parseInt(change[VALUES]) - list[1];
            userMoney[VALUES] -= list[1];
            break;
          }
        }
    }

    static checkChangeCase(coins, userCoins, change, userMoney) {
        if(parseInt(change[VALUES]) <= parseInt(userMoney[VALUES]) && parseInt(change[VALUES]) !== 0) {
          this.makeEmpty(coins, userCoins, change, userMoney);
        } else {
          this.minimumCoin(coins, userCoins, change, userMoney);
        }
        this.storeAllResult(coins, userCoins, change, userMoney);
    }

    static addReturnEvent() {
        document.getElementById('coin-return-button').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem(USER_COINS, JSON.stringify({ [FIVE_HUNDRED]: 0, [ONE_HUNDRED]: 0, [FIFTY]: 0, [TEN]: 0}));
        const coins = JSON.parse(localStorage.getItem(COINS));
        const userCoins = JSON.parse(localStorage.getItem(USER_COINS));
        const change = JSON.parse(localStorage.getItem(CHANGE));
        const userMoney = JSON.parse(localStorage.getItem(USER_CHARGE));

        if(!(this.checkUserCharge(userMoney)) || !(this.checkChange(coins, change))) {
        return;
        }
        this.checkChangeCase(coins, userCoins, change, userMoney);
        ProductPurchaseView.showUserCharge();
        ProductPurchaseView.showUserCoinTable();
        })
    }
}