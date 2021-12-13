export default function chargeChanges() {
  let chargeChangesHtml = `<div>
      <h2>자판기 동전 추가하기</h2>
      <form>
        <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액" />
   
        <button id="vending-machine-charge-button">충전하기</button>
      </form>
      <span id="vending-machine-charge-amount>보유 금액: 원</span>
    </div>
    <div>
      <h2>자판기가 보유한 동전</h2>
      <table>
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
            
          </tr>
        </thead>
       
      </table>
    </div>
    `;
  return chargeChangesHtml;
}
