import ChargeAddController from "../controllers/ChargeAddController.js";
import { chargeAddTemplete } from "../utils/dom/chargeAddTemplete.js";
import { chargeAddValiate, renderContainRandomCoin } from "../utils/validation/chargeAddEvent.js";

export default class ChargeAddView extends ChargeAddController {

  render () {
    this.chargeAddField.innerHTML = chargeAddTemplete;
    this.$app.append(this.chargeAddField);
  }

  setEvent() {
    this.chargeAddField.querySelector('#vending-machine-charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      const addCoin = this.chargeAddField.querySelector('input').value;
      chargeAddValiate(addCoin) 
      ? (this.validAddCoin = addCoin, this.renderCharge(), this.getChargeCoin(), this.renderRandomCoin())
      : "";
      this.validAddCoin = 0;
    })
  }

  renderCharge() {
    const $chargeWrap = document.querySelector('#vending-machine-charge-amount');
    !this.validAddCoin ? $chargeWrap.innerText = this.localTotalCharge : "";
    !this.localTotalCharge && this.validAddCoin ? $chargeWrap.innerText = this.validAddCoin : "";
    this.localTotalCharge && this.validAddCoin ? $chargeWrap.innerText = (Number(this.validAddCoin) + Number(this.localTotalCharge)) : "";
  }

  renderRandomCoin() {
    this.localRandomCoin && renderContainRandomCoin(this.localRandomCoin);
  }

  

}