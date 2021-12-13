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
    this.onClickAddProduct(); // 상품 관리 탭 - 추가하기 버튼 클릭 시
    this.onClickChargeBtn(); // 잔돈 충전 탭 - 충전하기 버튼 클릭 시
  }

  onClickTabBtn() {
    const { $manageTabBtn, $chargeTabBtn, $purchaseTabBtn } = this.view.buttons;

    $manageTabBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.view.showSelectedID("manage-tab");
    });

    $chargeTabBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.view.showSelectedID("charge-tab");
    });

    $purchaseTabBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.view.showSelectedID("purchase-tab");
    });
  }

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
      this.view.renderProductTable(this.vendingMachine.productList);
    });
  }

  onClickChargeBtn() {
    const { $chargeBtn } = this.view.buttons;
    const { $chargeCoin } = this.view.inputs;
    $chargeBtn.addEventListener("click", () => {
      if (!isValidCoin($chargeCoin.value)) {
        alert("다시 입력하세요.");
      }
      this.vendingMachine.makeRandomChange(parseInt($chargeCoin.value, 10));
    });
  }
}
