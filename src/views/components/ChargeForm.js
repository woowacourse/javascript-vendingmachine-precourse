export default class ChargeForm extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <form>
            <input type="number" id="${this.getAttribute(
              'inputid',
            )}" placeholder="${this.getAttribute('placeholder')}" />
            <button id="${this.getAttribute('buttonid')}">
                ${this.getAttribute('buttontext')}
            </button>
        </form>
        <div style="margin-top:15px;">${this.getAttribute('labeltext')}
            <span id="${this.getAttribute('chargeid')}"></span>
            <span id="${this.getAttribute('monetaryid')}"></span>
        </div>`;
  }
}

window.customElements.define('charge-form', ChargeForm);
