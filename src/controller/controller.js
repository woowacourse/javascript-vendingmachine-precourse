import View from "../view/view.js";
import VendingMachine from "../model/vendingMachine.js";
import {
  isVaildPrice,
  isValidName,
  isValidQuantity,
  isValidCoin,
} from "../utils/validation.js";

export default class Controller {
  constructor() {
    this.vendingMachine = new VendingMachine();
    this.view = new View();
  }

  init() {
    this.onClickTabBtn();
    this.onClickAddProduct();
    this.onClickChargeBtn();
    this.onClickPayBtn();
    this.onClickReturn();
  }

  // 3가지 탭 메뉴 클릭 이벤트
  onClickTabBtn() {
    const { $manageTabBtn, $chargeTabBtn, $purchaseTabBtn } = this.view.buttons;

    $manageTabBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.view.showSelectedID("manage-tab");
      this.view.renderManageTab(this.vendingMachine.productList);
    });

    $chargeTabBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.view.showSelectedID("charge-tab");
      this.view.renderChargeTab(this.vendingMachine.ownChange);
    });

    $purchaseTabBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.view.showSelectedID("purchase-tab");
      this.view.renderReturn(this.vendingMachine);
      this.view.renderUserMoney(this.vendingMachine.userMoney);
      this.view.renderProductTable(this.vendingMachine.productList);

      if (this.vendingMachine.productList.length > 0) {
        this.onClickPurchase();
      }
    });
  }

  // 상품 관리 탭 - 추가하기 버튼 클릭 시
  onClickAddProduct() {
    const { $addProductBtn } = this.view.buttons;
    const { $addName, $addPrice, $addQuantity } = this.view.inputs;

    $addProductBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        !isValidName($addName.value) ||
        !isVaildPrice($addPrice.value) ||
        !isValidQuantity($addQuantity.value)
      ) {
        alert("다시 입력하세요.");
        return;
      }
      this.vendingMachine.addProduct(
        $addName.value,
        parseInt($addPrice.value, 10),
        parseInt($addQuantity.value, 10)
      );
      this.view.renderManageTab(this.vendingMachine.productList);
    });
  }

  // 잔돈 충전 탭 - 충전하기 버튼 클릭 시
  onClickChargeBtn() {
    const { $chargeBtn } = this.view.buttons;
    const { $chargeCoin } = this.view.inputs;

    $chargeBtn.addEventListener("click", () => {
      if (!isValidCoin($chargeCoin.value)) {
        alert("다시 입력하세요.");
        return;
      }
      this.vendingMachine.makeRandomChange(parseInt($chargeCoin.value, 10));
      this.view.renderChargeTab(this.vendingMachine.ownChange);
    });
  }

  // 상품 구매 탭 - 투입하기 버튼 클릭 시
  onClickPayBtn() {
    const { $payBtn } = this.view.buttons;
    const { $buyMoney } = this.view.inputs;

    $payBtn.addEventListener("click", () => {
      if (!isVaildPrice($buyMoney.value)) {
        alert("다시 입력하세요.");
        return;
      }
      this.vendingMachine.getMoney(parseInt($buyMoney.value, 10));
      this.view.renderUserMoney(this.vendingMachine.userMoney);
    });
  }

  // 상품 구매 탭 - 반환하기 버튼 클릭 시
  onClickReturn() {
    const { $coinReturnBtn } = this.view.buttons;

    $coinReturnBtn.addEventListener("click", () => {
      this.vendingMachine.returnChange();
      this.view.renderReturn(this.vendingMachine);
      this.view.renderUserMoney(this.vendingMachine.userMoney);
    });
  }

  // 상품 구매 탭 - 구매하기 버튼 클릭 시
  onClickPurchase() {
    document.querySelectorAll(".purchase-button").forEach((item) => {
      item.addEventListener("click", (e) => {
        const parent = e.target.parentNode;
        const name = parent.children[0].dataset.productName;
        const quantity = parent.children[2];

        if (this.vendingMachine.buyProduct(name)) {
          quantity.dataset.productQuantity -= 1;
          quantity.innerHTML = quantity.dataset.productQuantity;
          this.view.renderUserMoney(this.vendingMachine.userMoney);
          return;
        }
        alert("살 수 없습니다.");
      });
    });
  }
}
