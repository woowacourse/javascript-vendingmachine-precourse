import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';

class ProductPurchase extends Component {
  constructor() {
    super($tag('div'));
  }

  render() {
    this.renderText('TODO: 상품 구매');
  }
}

export default ProductPurchase;
