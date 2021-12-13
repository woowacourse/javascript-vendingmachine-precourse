import Coin from '../Coin/Coin.js';
import CoinInputCheck from '../VendingMachineManage/CoinInputCheck.js';

export default class ProductPurcahseTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.productPurchaseScreen = document.createElement('div');
    this.app.append(this.productPurchaseScreen);
    this.coin = new Coin();
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.spendMoney = document.createElement('div');
    this.productStatus = document.createElement('div');
    this.smallChange = document.createElement('div');
    this.productPurchaseScreen.append(
      this.spendMoney,
      this.productStatus,
      this.smallChange
    );
    this.makeSpendMoneyTemplate();
    document.getElementById('charge-button').onclick =
      this.submitChargeInput.bind(this);
  }

  makeSpendMoneyTemplate() {
    this.spendMoneyTitle = document.createElement('h2');
    this.spendMoneyTitle.innerText = '금액 투입';
    this.spendMoneyForm = document.createElement('form');
    this.spendMoneyForm.innerHTML =
      '<input type="text" placeholder="투입할 금액" id="charge-input" /><button type="submit" id="charge-button">투입하기</button>';
    this.spendMoneyParagraph = document.createElement('p');
    this.spendMoneyParagraph.id = 'charge-amount';
    this.spendMoneyParagraph.textContent = '투입한 금액: ';
    this.spendMoney.append(
      this.spendMoneyTitle,
      this.spendMoneyForm,
      this.spendMoneyParagraph
    );
  }

  submitChargeInput(e) {
    e.preventDefault();
    const inputCharge = document.getElementById('charge-input').value;
    console.log(inputCharge);
    if (CoinInputCheck(inputCharge)) {
      this.chargeInsert(Number(inputCharge));
    }
  }

  chargeInsert(inputCharge) {
    const totalChageCost = this.coin.additionalInputCharge(inputCharge);
    this.spendMoneyParagraph.textContent = `투입한 금액: ${totalChageCost}`;
  }

  template() {
    return this.productPurchaseScreen;
  }
}
