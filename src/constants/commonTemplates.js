export const commonTemplates = {
  tabs: `<h2>🥤자판기🥤</h2>
      <nav id="nav">
        <button
          id="product-purchase-menu"
          class="nav-tab"
          data-tab-name="addMenu"
        >
          상품 관리
        </button>
        <button
          id="vending-machine-manage-menu"
          class="nav-tab"
          data-tab-name="change"
        >
          잔돈 충전
        </button>
        <button id="product-add-menu" class="nav-tab" data-tab-name="purchase">
          상품 구매
        </button>
      </nav>
      <h3 id="tab-title"></h3>
      <form id="input_form"></form>
      <div id="contents"></div>
      `,
};
