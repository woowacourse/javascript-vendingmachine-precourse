import ChargeAddController from "../controllers/ChargeAddController.js";
import { chargeAddTemplete } from "../utils/dom/chargeAddTemplete.js";

export default class ChargeAddView extends ChargeAddController {

  render () {
    this.chargeAddField.innerHTML = chargeAddTemplete;
    this.$app.append(this.chargeAddField);
  }

}