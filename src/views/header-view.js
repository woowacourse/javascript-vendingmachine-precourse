import { htmlToElement } from '../utils.js';

class HeaderView {
  static template = `
    <div class="header">
      <h1>
        <img src="/images/beverage_icon.png"><span>자판기</span><img src="/images/beverage_icon.png">
      </h1>
    </div>
  `;

  constructor($container) {
    this.$container = $container;
  }

  mount() {
    const header = htmlToElement(HeaderView.template);
    this.$container.appendChild(header);
  }
}

export default HeaderView;
