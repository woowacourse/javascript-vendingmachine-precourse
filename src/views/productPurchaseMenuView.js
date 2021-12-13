import { ID } from '../constants/selector.js';
import {
  Container,
  SubTitle,
  Span,
  SpanWithId,
  Button,
} from '../components/elements.js';
import {
  createAddMoneyForm,
  createProductPurchaseTable,
  createCoinTable,
} from '../components/productPurchaseMenu.js';

export default function ProductPurchaseMenuView(container) {
  this.productPurchaseMenu = () => {
    const container = Container('product-purchase-view');
    const addMoneySubTitle = SubTitle('금액 투입');
    const productSubTitle = SubTitle('구매할 수 있는 상품 현황');
    const changeSubTitle = SubTitle('잔돈');
    const addMoneyForm = createAddMoneyForm(this.onClickAddMoneyButton);
    const insertSpan = Span('투입한 금액: ');
    const moneySpan = SpanWithId('', ID.CHARGE_AMOUNT);
    const productPurchaseTable = createProductPurchaseTable();
    const coinTable = createCoinTable();
    const returnButton = Button(
      '반환하기',
      ID.COIN_RETURN_BUTTON,
      this.onClickReturnCoinButton
    );

    container.append(
      addMoneySubTitle,
      addMoneyForm,
      insertSpan,
      moneySpan,
      productSubTitle,
      productPurchaseTable,
      changeSubTitle,
      returnButton,
      coinTable
    );
    container.setAttribute('class', 'invisible');

    return container;
  };

  this.onClickAddMoneyButton = (e) => {
    e.preventDefault();
  };

  this.onClickReturnCoinButton = (e) => {
    e.preventDefault();
  };

  this.render = () => {
    container.append(this.productPurchaseMenu());
  };
}
