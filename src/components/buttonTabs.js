import Component from "../common/component.js";

export default class ButtonTabs extends Component {
  template() {
    return this.$props.buttonList
      .map((button) => this.getSingleButtonItem(button.name, button.id))
      .join("");
  }

  setEvent() {
    this.$target.addEventListener("click", this.$props.onClickCallback);
  }

  getSingleButtonItem(buttonName, buttonId) {
    return `<button id=${buttonId}>${buttonName}</button>`;
  }
}
