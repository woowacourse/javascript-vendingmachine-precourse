import $ from '../utils/dom.js';

const renderNavbar = () => {
  $('#app').innerHTML = `
      <header>
        <h1>🥤 자판기 🥤</h1>
        <nav id="menu-wrap">
          <ul id="menu-button-wrap">
            <button id="product-add-menu" type="button">상품 관리</button>
            <button id="vending-machine-manage-menu" type="button">잔돈 충전</button>
            <button id="product-purchase-menu" type="button">상품 구매</button>
          </ul>
        </nav>
      </header>
      <section>
      </section>
    `;
};

export default renderNavbar;
