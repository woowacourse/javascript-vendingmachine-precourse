import { KEY } from "./key.js";

export default class Api {
  constructor() {
    console.log("------------------API");
  }

  setup() {
    console.log("------------setup api");
    const data = {
      currentTabId: "product-add-menu",
      products: [],
      tabIdList: [
        "product-add-menu",
        "vending-machine-manage-menu",
        "product-purchase-menu",
      ],
      chargeAmount: 0,
      coins: {
        coin500: 0,
        coin100: 0,
        coin50: 0,
        coin10: 0,
      },
      returnedCoins: {
        coin500: 0,
        coin100: 0,
        coin50: 0,
        coin10: 0,
      },
      purchaseChargeAmount: 0,
    };

    if (!this.getVendingMachine()) {
      console.log("------setting");
      localStorage.setItem(KEY, JSON.stringify(data));
    }
  }

  getVendingMachine() {
    console.log("----------getVendingMachine");
    return JSON.parse(localStorage.getItem(KEY));
  }

  setVendingMachine(payload) {
    console.log("------**----setVendingMachine", payload);
    const newData = {
      ...this.getVendingMachine(),
      ...payload,
    };
    localStorage.setItem(KEY, JSON.stringify(newData));
  }
}