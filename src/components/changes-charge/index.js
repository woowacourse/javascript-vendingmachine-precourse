import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Charge from './Charge.js';
import CurrentChanges from './CurrentChanges.js';

class ChangesCharge extends Component {
  $charge;

  constructor() {
    super($tag('div'));
    this.$charge = new Charge();
    this.$currentChanges = new CurrentChanges();

    this.setEvent();
    this.children = [this.$charge, this.$currentChanges];
  }

  setEvent() {
    this.$charge.onSubmit = ({ amount }) => {
      VendingMachineStore.instance.chargeChanges(amount);
      this.$charge.resetInputs();
      this.$currentChanges.setState({
        amount: VendingMachineStore.instance.coinStorage.getTotalAmount(),
      });
    };
  }
}

export default ChangesCharge;
