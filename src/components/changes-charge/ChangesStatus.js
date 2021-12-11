import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Label from '../base/Label.js';
import ChangesTable from './ChangesTable.js';
import CurrentChanges from './CurrentChanges.js';

class ChangesStatus extends Component {
  $title;

  $table;

  constructor() {
    super($tag('div'));

    this.$currentChanges = new CurrentChanges();
    this.$title = new Label('h3', '자판기가 보유한 동전');
    this.$table = new ChangesTable();
    this.children = [this.$currentChanges, this.$title, this.$table];
    this.update();
  }

  update() {
    const coins = VendingMachineStore.instance.coinStorage.items;
    const totalAmount =
      VendingMachineStore.instance.coinStorage.getTotalAmount();

    this.$table.setState({ dataset: coins });
    this.$currentChanges.setState({ amount: totalAmount });
  }
}

export default ChangesStatus;
