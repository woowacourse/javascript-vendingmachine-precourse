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
    };

    localStorage.setItem("VENDING_MACHINE", JSON.stringify(data));
  }
}
