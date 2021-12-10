import Component from '../base/Component.js';

class ProductManage extends Component {
  constructor() {
    super(document.createElement('div'));
  }

  render() {
    this.renderText('TODO: 상품 관리');
  }
}

export default ProductManage;
