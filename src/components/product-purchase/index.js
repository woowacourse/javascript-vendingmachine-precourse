import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import TextNode from '../base/TextNode.js';

class ProductPurchase extends Component {
  constructor() {
    super($tag('div'));
    this.children = [new TextNode('TODO: 상품 구매')];
  }
}

export default ProductPurchase;
