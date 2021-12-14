import Component from "../common/component.js";
import EntrySection from "./entrySection.js";
import Table from "./table.js";

export default class AddMenuContainer extends Component {
  template() {
    return `
      <div id="product-add-menu-entry"></div>
      <div id="product-add-menu-table"></div>
    `;
  }

  componentDidMount() {
    const $entrySelector = this.$target.querySelector(
      "#product-add-menu-entry"
    );
    const $tableSelector = this.$target.querySelector(
      "#product-add-menu-table"
    );

    new EntrySection($entrySelector, {
      title: "상품 추가하기",
      inputInfo: [
        { type: "text", id: "product-name-input", placeholder: "상품명" },
        { type: "number", id: "product-price-input", placeholder: "가격" },
        { type: "number", id: "product-quantity-input", placeholder: "수량" },
      ],
      buttonInfo: {
        id: "product-add-button",
        value: "추가하기",
      },
    });

    new Table($tableSelector, {
      title: "상품 현황",
      tableHeaders: ["상품명", "가격", "수량"],
      tableContents: this.$props.menuItems,
    });
  }

  setEvent() {
    this.$target.addEventListener("click", this.$props.onClickButton);
  }
}
