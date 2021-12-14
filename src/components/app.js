import VendingMachine from "../class/vendingMachine.js";
import Component from "../common/component.js";
import AddMenuContainer from "./addMenuContainer.js";
import ButtonTabs from "./buttonTabs.js";
import CoinManageMenuContainer from "./coinManageMenuContainer.js";
import Header from "./header.js";
import PurchaseMenuContainer from "./purchaseMenuContainer.js";

export default class App extends Component {
  initialize() {
    this.$vendingMachine = new VendingMachine();
    this.$state = {
      activeTab: "product-add-menu",
      products: this.$vendingMachine.getProducts(),
      userMoney: this.$vendingMachine.getRemainingUserMoney(),
      coins: this.$vendingMachine.getVendingMachineCoins(),
      change: [
        [500, 0],
        [100, 0],
        [50, 0],
        [10, 0],
      ],
    };
  }

  template() {
    return `
      <h1 id="title"></h1>
      <ul id="button-tabs"></ul>
      <div id="content"></div>
    `;
  }

  componentDidMount() {
    this.mountHeader();
    this.mountButtonTabs();
    this.mountContents();
  }

  mountHeader() {
    const $titleSelector = this.$target.querySelector("#title");

    new Header($titleSelector, {
      title: "자판기",
      imageSrc: "../../images/beverage_icon.png",
    });
  }

  mountButtonTabs() {
    const $buttonTabsSelector = this.$target.querySelector("#button-tabs");

    new ButtonTabs($buttonTabsSelector, {
      buttonList: [
        { name: "상품 관리", id: "product-add-menu" },
        { name: "잔돈 충전", id: "vending-machine-manage-menu" },
        { name: "상품 구매", id: "product-purchase-menu" },
      ],
    });
  }

  mountContents() {
    const $contentSelector = this.$target.querySelector("#content");

    if (this.$state.activeTab === "product-purchase-menu") {
      new PurchaseMenuContainer($contentSelector, {
        menuItems: this.$state.products,
        userMoney: this.$state.userMoney,
        change: this.$state.change,
      });
    } else if (this.$state.activeTab === "vending-machine-manage-menu") {
      new CoinManageMenuContainer($contentSelector, {
        coins: this.$state.coins,
      });
    } else {
      new AddMenuContainer($contentSelector, {
        menuItems: this.$state.products,
      });
    }
  }

  setEvent() {
    this.$target.addEventListener("click", this.onClickButton.bind(this));
  }

  onClickButton(event) {
    const { target } = event;

    if (target.tagName !== "BUTTON") return;

    if (target.className === "tab") this.setState({ activeTab: target.id });
    else if (target.id === "product-add-button") this.onClickAddProduct();
    else if (target.id === "vending-machine-charge-button") {
      this.onClickAddVendingMachineCoins();
    } else if (target.id === "charge-button") this.onClickAddUserMoney();
    else if (target.className === "purchase-button") {
      this.onClickPurchase(target.getAttribute("data-product-name"));
    } else if (target.id === "coin-return-button") this.onClickGetChange();
  }

  onClickAddProduct() {
    const name = document.getElementById("product-name-input").value;
    const price = document.getElementById("product-price-input").value;
    const quantity = document.getElementById("product-quantity-input").value;
    this.$vendingMachine.addProduct(name, price, quantity);
    this.setState({
      products: this.$vendingMachine.getProducts(),
    });
  }

  onClickAddVendingMachineCoins() {
    const amount = document.getElementById(
      "vending-machine-charge-input"
    ).value;
    this.$vendingMachine.addVendingMachineCoins(amount);
    this.setState({
      coins: this.$vendingMachine.getVendingMachineCoins(),
    });
  }

  onClickAddUserMoney() {
    const amount = document.getElementById("charge-input").value;
    this.$vendingMachine.chargeUserMoney(parseInt(amount, 10));
    this.setState({
      userMoney: this.$vendingMachine.getRemainingUserMoney(),
    });
  }

  onClickPurchase(productName) {
    this.$vendingMachine.purchaseProduct(productName);
    this.setState({
      products: this.$vendingMachine.getProducts(),
      userMoney: this.$vendingMachine.getRemainingUserMoney(),
      coins: this.$vendingMachine.getVendingMachineCoins(),
    });
  }

  onClickGetChange() {
    this.setState({
      change: this.$vendingMachine.getChange(),
      coins: this.$vendingMachine.getVendingMachineCoins(),
      userMoney: this.$vendingMachine.getRemainingUserMoney(),
    });
  }
}
