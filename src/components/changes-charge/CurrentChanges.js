import { ELEMENT_ID } from '../../constants/index.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Label from '../base/Label.js';
import TextNode from '../base/TextNode.js';

const amountProp = {
  id: ELEMENT_ID.CHANGES_CHARGE_CHARGE_AMOUNT,
};

class CurrentChanges extends Component {
  $label;

  $amount;

  constructor() {
    super($tag('div'));

    this.$label = new TextNode('보유 금액: ');
    this.$amount = new Label('span', 0, amountProp);
    this.children = [this.$label, this.$amount];

    this.setEvent();
  }

  beforeRender() {
    this.$amount = new Label('span', this.state.amount, amountProp);
    this.children = [this.$label, this.$amount];
  }
}

export default CurrentChanges;
