import ChargeAddController from "../controllers/ChargeAddController.js";
import { NOTHING, NUMBER } from "../utils/constants.js";
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
      : NOTHING;
      this.validAddCoin = NUMBER.ZERO;
    })
  }

  renderCharge() {
    const $chargeWrap = document.querySelector('#vending-machine-charge-amount');
    !this.validAddCoin ? $chargeWrap.innerText = this.localTotalCharge : NOTHING;
    !this.localTotalCharge && this.validAddCoin ? $chargeWrap.innerText = this.validAddCoin : NOTHING;
    this.localTotalCharge && this.validAddCoin ? $chargeWrap.innerText = (Number(this.validAddCoin) + Number(this.localTotalCharge)) : NOTHING;
  }

  renderRandomCoin() {
    this.localRandomCoin && renderContainRandomCoin(this.localRandomCoin);
  }

  

}