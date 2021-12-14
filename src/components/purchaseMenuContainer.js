import Component from "../common/component.js";
import EntrySection from "./entrySection.js";
import PurchaseTable from "./purchaseTable.js";
import CoinTable from "./coinTable.js";

export default class PurchaseMenuContainer extends Component {
  template() {
    return `
      <div id="purchase-money-entry"></div>
      <div id="purchase-menu-table"></div>
      <div id="coin-return-table"></div>
    `;
  }

  componentDidMount() {
    const $entrySelector = this.$target.querySelector("#purchase-money-entry");
    const $menuTableSelector = this.$target.querySelector(
      "#purchase-menu-table"
    );
    const $coinTableSelector = this.$target.querySelector("#coin-return-table");

    new EntrySection($entrySelector, {
      title: "금액 투입",
      inputInfo: [
        {
          type: "number",
          id: "charge-input",
          placeholder: "투입할 금액",
        },
      ],
      buttonInfo: {
        id: "charge-button",
        value: "충전하기",
      },
      moneyInfo: {
        id: "charge-amount",
        type: "투입",
        value: this.$props.userMoney,
      },
    });

    new PurchaseTable($menuTableSelector, {
      title: "구매할 수 있는 상품 현황",
      tableHeaders: ["상품명", "가격", "수량", "구매"],
      tableContents: this.$props.menuItems,
    });

    new CoinTable($coinTableSelector, {
      title: "잔돈",
      tableHeaders: ["동전", "개수"],
      tableContents: this.$props.change,
      buttonInfo: {
        id: "coin-return-button",
        value: "반환하기",
      },
      getQuantityId: (amount) => `coin-${amount}-quantity`,
    });
  }
}
