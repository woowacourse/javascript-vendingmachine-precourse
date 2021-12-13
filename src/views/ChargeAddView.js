import ChargeAddController from "../controllers/ChargeAddController.js";
import { chargeAddTemplete } from "../utils/dom/chargeAddTemplete.js";
import { chargeAddValiate } from "../utils/validation/chargeAddEvent.js";

export default class ChargeAddView extends ChargeAddController {

  render () {
    this.chargeAddField.innerHTML = chargeAddTemplete;
    this.$app.append(this.chargeAddField);
  }

  setEvent() {
    this.chargeAddField.querySelector('#vending-machine-charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.addCoin = this.chargeAddField.querySelector('input').value;
      chargeAddValiate(this.addCoin) && 
      this.renderCharge(), this.getChargeCoin();
    })
  }

  renderCharge() {
    const $chargeWrap = document.querySelector('#vending-machine-charge-amount');
    this.localTotalCharge && !this.addCoin ? $chargeWrap.innerText = this.localTotalCharge : "";
    !this.localTotalCharge && this.addCoin ? $chargeWrap.innerText = this.addCoin : "";
    this.localTotalCharge && this.addCoin ? $chargeWrap.innerText = (Number(this.addCoin) + Number(this.localTotalCharge)) : "";
    !this.localTotalCharge && !this.addCoin ? $chargeWrap.innerText = this.localTotalCharge : "";
  }

}