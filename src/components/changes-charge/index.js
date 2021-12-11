import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Charge from './Charge.js';
import ChangesStatus from './ChangesStatus.js';

class ChangesCharge extends Component {
  $charge;

  $status;

  constructor() {
    super($tag('div'));
    this.$charge = new Charge();
    this.$status = new ChangesStatus();

    this.setEvent();
    this.children = [this.$charge, this.$status];
  }

  setEvent() {
    this.$charge.onSubmit = ({ amount }) => {
      VendingMachineStore.instance.chargeChanges(amount);
      this.$charge.resetInputs();
      this.$status.update();
    };
  }

  update() {
    this.$status.update();
  }
}

export default ChangesCharge;
