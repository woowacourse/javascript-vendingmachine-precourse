import Component from "../common/component.js";
import AddMenuContainer from "./addMenuContainer.js";
import ButtonTabs from "./buttonTabs.js";
import CoinManageMenuContainer from "./coinManageMenuContainer.js";
import Header from "./header.js";
import PurchaseMenuContainer from "./purchaseMenuContainer.js";

export default class App extends Component {
  initialize() {
    this.$state = { activeTab: "product-add-menu" };
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
      onClickCallback: this.onClickTab.bind(this),
    });
  }

  mountContents() {
    const $contentSelector = this.$target.querySelector("#content");

    if (this.$state.activeTab === "product-purchase-menu") {
      new PurchaseMenuContainer($contentSelector, { menuItems: [] });
    } else if (this.$state.activeTab === "vending-machine-manage-menu") {
      new CoinManageMenuContainer($contentSelector);
    } else {
      new AddMenuContainer($contentSelector);
    }
  }

  onClickTab(event) {
    const { target } = event;

    if (target.tagName !== "BUTTON") return;

    this.setState({ activeTab: target.id });
  }
}
