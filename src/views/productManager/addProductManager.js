const addProductForm = () => {
  return `
    <form>
      <input id="product-name-input" placeholder="상품명" />
      <input id="product-price-input" type="number" placeholder="가격" />
      <input id="product-quantity-input" type="number" placeholder="수량" />
      <button id="product-add-button">추가하기</button>
    </form>
  `;
};

const addProductManager = () => {
  const $app = document.getElementById("app");

  $app.innerHTML += `
    <div id="product-manager" hidden>
      <h3>상품 추가하기</h3>
      ${addProductForm()}
      <h3>상품 현황</h3>
      <table id="product-table" border="1"></table>
    </div>
  `;
};

export { addProductManager };
