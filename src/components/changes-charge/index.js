import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import TextNode from '../base/TextNode.js';

class ChangesCharge extends Component {
  constructor() {
    super($tag('div'));
    this.children = [new TextNode('TODO: 잔돈 충전')];
  }
}

export default ChangesCharge;
