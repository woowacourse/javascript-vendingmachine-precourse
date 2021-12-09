import $ from './utils/dom.js';
import renderProductAdd from './views/renderProductAdd.js';
import renderVendingMachine from './views/renderVendingMachine.js';
import renderProductPurchase from './views/renderProductPurchase.js';

function VendingMachineApp() {
  this.init = () => {
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
  $('#app').addEventListener('click', e => {
    if (e.target.id === 'product-add-menu') {
      renderProductAdd();
    }

    if (e.target.id === 'vending-machine-manage-menu') {
      renderVendingMachine();
    }

    if (e.target.id === 'product-purchase-menu') {
      renderProductPurchase();
    }
  });
}

const app = new VendingMachineApp();
app.init();
