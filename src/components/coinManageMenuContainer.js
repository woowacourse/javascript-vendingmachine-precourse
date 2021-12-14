import Component from "../common/component.js";
import EntrySection from "./entrySection.js";
import Table from "./table.js";

export default class CoinManageMenuContainer extends Component {
  template() {
    return `
      <div id="coin-manage-menu-entry"></div>
      <div id="coin-manage-menu-table"></div>
    `;
  }

  componentDidMount() {
    const $entrySelector = this.$target.querySelector(
      "#coin-manage-menu-entry"
    );
    const $tableSelector = this.$target.querySelector(
      "#coin-manage-menu-table"
    );

    new EntrySection($entrySelector, {
      title: "자판기 동전 충전하기",
      inputInfo: [
        {
          type: "number",
          id: "vending-machine-charge-input",
          placeholder: "자판기가 보유할 금액",
        },
      ],
      buttonInfo: {
        id: "vending-machine-charge-button",
        value: "충전하기",
      },
      moneyInfo: {
        id: "vending-machine-charge-amount",
        type: "보유",
        value: this.$props.coins.reduce(
          (sum, coin) => sum + coin[0] * coin[1],
          0
        ),
      },
    });

    new Table($tableSelector, {
      title: "자판기가 보유한 동전",
      tableHeaders: ["동전", "개수"],
      tableContents: this.$props.coins,
    });
  }
}
