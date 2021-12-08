import Main from './Main.js';

export default class Header {
  constructor(element) {
    this.$element = element;

    this.render();
  }

  template() {
    return `
    <div>
      <h1>🥤자판기🥤</h1>
      <nav>
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
      </nav>
    </div>
    `;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.mount();
  }

  mount() {
    document.querySelector('nav').addEventListener('click', ({ target }) => {
      if (!target.matches('button')) return;
      new Main(document.querySelector('main'), { component: target.id });
    });
  }
}
