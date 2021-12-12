import Component from "../common/component.js";
import ButtonTabs from "./buttonTabs.js";
import Header from "./header.js";

const buttonIdToIndex = {
  "product-purchase-menu": 0,
  "vending-machine-manage-menu": 1,
  "product-add-menu": 2,
};

export default class App extends Component {
  initialize() {
    this.$state = { activeTab: 0 };
  }

  template() {
    return `
      <h1 id="title"></h1>
      <ul id="button-tabs"></ul>
      <div id="content"></div>
    `;
  }

  componentDidMount() {
    const $titleSelector = this.$target.querySelector("#title");
    const $buttonTabsSelector = this.$target.querySelector("#button-tabs");
    const $contentSelector = this.$target.querySelector("#content");

    new Header($titleSelector, {
      title: "자판기",
      imageSrc: "../../images/beverage_icon.png",
    });

    new ButtonTabs($buttonTabsSelector, {
      buttonList: [
        { name: "상품 구매", id: "product-purchase-menu" },
        { name: "잔돈 충전", id: "vending-machine-manage-menu" },
        { name: "상품 관리", id: "product-add-menu" },
      ],
      onClickCallback: this.onClickTab.bind(this),
    });
  }

  onClickTab(event) {
    const { target } = event;

    if (target.tagName !== "BUTTON") return;

    this.setState({ activeTab: this.getNewActiveTabIndex(target.id) });
  }

  getNewActiveTabIndex(buttonId) {
    return buttonIdToIndex[buttonId];
  }
}
