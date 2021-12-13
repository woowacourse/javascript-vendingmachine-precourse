export default class ProductPurchaseModel {
  constructor() {
    this.totalInsertMoney;
  }

  setLocalInsertMoney(money) {
    const localInsertMoney = JSON.parse(localStorage.getItem("INSERT_MONEY"));  
    localInsertMoney 
    ? this.totalInsertMoney = Number(localInsertMoney) + Number(money)
    : this.totalInsertMoney = Number(money);
    localStorage.setItem("INSERT_MONEY", JSON.stringify(this.totalInsertMoney));
  }

  getLocalInsertMoney () {
    const localTotalInsertMoney = localStorage.getItem("INSERT_MONEY");
    const parseLocalTotalInsertMoney = JSON.parse(localTotalInsertMoney);
    
    return parseLocalTotalInsertMoney;
  }

  getLocalProductList() {
    const localProductList = localStorage.getItem("PRODUCT_LIST");
    const parseLocalProductList = JSON.parse(localProductList);

    return parseLocalProductList;
  }

  setPurchaseProduct(selectProduct) {
    const localProductList = JSON.parse(localStorage.getItem("PRODUCT_LIST"));
    let localTotalInsertMoney = JSON.parse(localStorage.getItem("INSERT_MONEY"));
    localProductList.map(product => product[0] === selectProduct[0] 
      ? (product[2] = (Number(product[2])-1), localTotalInsertMoney -= Number(product[1])) 
      : "" );
    localStorage.setItem("PRODUCT_LIST", JSON.stringify(localProductList));
    localStorage.setItem("INSERT_MONEY", JSON.stringify(localTotalInsertMoney));
  }

  getPurchaseResult() {
    const localProductList = JSON.parse(localStorage.getItem("PRODUCT_LIST"));

    return localProductList;
  }

  getPuchaseMoneyResult() {
    const localTotalInsertMoney = JSON.parse(localStorage.getItem("INSERT_MONEY"));

    return localTotalInsertMoney;
  }

}