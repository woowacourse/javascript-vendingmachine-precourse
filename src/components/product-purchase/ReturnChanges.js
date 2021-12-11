import { ELEMENT_ID } from '../../constants/index.js';
import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Button from '../base/Button.js';
import Component from '../base/Component.js';
import Label from '../base/Label.js';
import ChangesTable from './ChangesTable.js';

const buttonProp = {
  id: ELEMENT_ID.PRODUCT_PURCHASE_COIN_RETURN_BUTTON,
};

class ReturnChanges extends Component {
  $title;

  $button;

  $table;

  onReturn;

  constructor() {
    super($tag('div'));

    this.$title = new Label('h3', '잔돈');
    this.$button = new Button('반환하기', buttonProp);
    this.$table = new ChangesTable();
    this.children = [this.$title, this.$button, this.$table];
    this.setEvent();
    this.update();
  }

  setEvent() {
    this.$button.addOnClick(() => {
      this.onReturn?.();
    });
  }

  update() {
    const coins = VendingMachineStore.instance.user.returnedCoinStorage.items;
    this.$table.setState({ dataset: coins });
  }
}

export default ReturnChanges;
