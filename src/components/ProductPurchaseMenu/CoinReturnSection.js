import Component from '../../core/Component.js';

export default class CoinReturnSection extends Component {
  setup() {
    const { returnedCoins } = this.props;
    this.state = { returnedCoins: returnedCoins.toObject() };
  }

  template() {
    const { returnedCoins } = this.state;

    // TODO: returnedCoins 목록 직접 접근 안하게 수정
    return `
      <h3>잔돈</h3>
      <button type='submit' id='coin-return-button'>반환하기</button>
      <table>
        <th>동전</th>
        <th>개수</th>
        <tr>
          <td>500원</td>
          <td id='coin-500-quantity'>${returnedCoins['500']}개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id='coin-100-quantity'>${returnedCoins['100']}개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id='coin-50-quantity'>${returnedCoins['50']}개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id='coin-10-quantity'>${returnedCoins['10']}개</td>
        </tr>
      </table>
    `;
  }

  setEvent() {
    // TODO: 동전이 없을 경우 예외 처리, 잔돈 반환 후 동전 상태 저장, 다른 탭에 갔다 왔을 때 잔돈 상태 유지
    this.addEvent('click', '#coin-return-button', () => {
      this.props.returnChange();
    });
  }
}
