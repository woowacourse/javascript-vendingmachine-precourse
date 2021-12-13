import Component from "./root/Component.js";

export default class Menu extends Component {
  template() {
    return `
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
    `;
  }

  mounted() {
    this.addEvent("click", this.$target, (e) => this.onClickHandler(e));
  }

  onClickHandler(e) {
    const { changeTab } = this.$props;
    const { tagName, id } = e.target;

    if (tagName === "BUTTON") changeTab(id);
  }
}
