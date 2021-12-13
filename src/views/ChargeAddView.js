import ChargeAddController from "../controllers/ChargeAddController.js";
import { chargeAddTemplete } from "../utils/dom/chargeAddTemplete.js";

export default class ChargeAddView extends ChargeAddController {

  render () {
    this.chargeAddField.innerHTML = chargeAddTemplete;
    this.$app.append(this.chargeAddField);
  }

  setEvent() {
    this.chargeAddField.querySelector('#vending-machine-charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.chargeCoin = this.chargeAddField.querySelector('input').value;
      this.renderCharge();
    })
  }

  renderCharge() {
    const $chargeWrap = document.querySelector('#vending-machine-charge-amount');
    this.chargeCoin ? $chargeWrap.innerText = this.chargeCoin : "";
  }

}