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
      .map((textbox) => `<input type="${textbox.type}" id="${textbox.id}"/>`)
      .join("");
  }

  getSubmitButton() {
    return `<button id="${this.$props.buttonInfo.id}">${this.$props.buttonInfo.value}</button>`;
  }

  getAdditionalElements() {
    return "";
  }
}
