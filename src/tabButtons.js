export default function tabButtons() {
  let tabButtonsHtml = `<div>
      <h1>자판기</h1>
      <form>
        <button id="product-add-menu" type="button" >상품 관리</button>
        <button id="vending-machine-manage-menu" type="button">잔돈 충전</button>
        
        <button id="product-purchase-menu" type="button">상품 구매</button>
      </form>
    </div>
    
    `;
  return tabButtonsHtml;
}
