import Component from "../common/component.js";

export default class EntrySection extends Component {
  template() {
    return `
      <h2>${this.$props.title}</h2>
      <div>
        ${this.getInputTextbox()}
        ${this.getSubmitButton()}
      </div>
      ${this.getAdditionalElements()}
    `;
  }

  setEvent() {
    this.$target
      .querySelector("button")
      .addEventListener("click", this.$props.buttonInfo.callBack);
  }

  getTableHeader() {
    return this.$props.tableHeaders
      .map((header) => `<th>${header}</th>`)
      .join("");
  }

  getInputTextbox() {
    return this.$props.inputInfo
      .map((inputInfo) => this.getInputElementString(inputInfo))
      .join("");
  }

  getInputElementString(inputInfo) {
    return `<input type=${inputInfo.type} id=${inputInfo.id} placeholder="${inputInfo.placeholder}" />`;
  }

  getSubmitButton() {
    return `<button id="${this.$props.buttonInfo.id}">${this.$props.buttonInfo.value}</button>`;
  }

  getAdditionalElements() {
    if (this.$props.moneyInfo !== undefined) {
      return this.getCurrentMoneyAmountSpan(this.$props.moneyInfo);
    }
    return "";
  }

  getCurrentMoneyAmountSpan(moneyInfo) {
    return `<span id=${moneyInfo.id}>${moneyInfo.type}한 금액: ${
      moneyInfo.value ? moneyInfo.value : ""
    }</span>`;
  }
}
