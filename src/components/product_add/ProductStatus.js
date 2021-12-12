import Component from "../root/Component.js";

export default class ProductStatus extends Component {
  setup() {
    console.log("product status", this);
  }

  template() {
    return `<h3>상품 현황</h3>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        <thdead>
        <tbody>
          <tr>
            <td>111</td>
            <td>22</td>
            <td>333</td>
          <tr>
        </tbody>
      </table>`;
  }

  mounted() {
    this.setStyled();
  }

  setStyled() {
    this.$target.querySelectorAll("table, td, th").forEach((element) =>
      element.setAttribute(
        "style",
        `border: 1px solid #000; 
          border-collapse: collapse;
          padding: 20px 40px;
          text-align: center`
      )
    );
  }
}
