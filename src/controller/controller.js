import View from "../view/view.js";
import VendingMachine from "../model/vendingMachine.js";
import {
  isVaildPrice,
  isValidName,
  isValidQuantity,
} from "../utils/validation.js";

export default class Controller {
  constructor() {
    this.vendingMachine = "";
    this.view = "";
  }

  init() {
    if (this.view === "") {
      this.view = new View();
    }
    if (this.vendingMachine === "") {
      this.vendingMachine = new VendingMachine();
    }
    this.onClickTabBtn();

    this.onClickAddProduct(); // 상품 관리 탭 - 추가하기 버튼 클릭 시
  }

  onClickTabBtn() {
    const { $manageTabBtn, $chargeTabBtn, $purchaseTabBtn } = this.view.buttons;

    $manageTabBtn.addEventListener("click", () => {
      this.view.showSelectedID("manage-tab");
    });

    $chargeTabBtn.addEventListener("click", () => {
      this.view.showSelectedID("charge-tab");
    });

    $purchaseTabBtn.addEventListener("click", () => {
      this.view.showSelectedID("purchase-tab");
    });
  }

  onClickAddProduct() {
    const { $addProductBtn } = this.view.buttons;
    const { $addName, $addPrice, $addQuantity } = this.view.inputs;

    $addProductBtn.addEventListener("click", () => {
      if (
        !isValidName($addName.value) ||
        !isVaildPrice($addPrice.value) ||
        !isValidQuantity($addQuantity.value)
      ) {
        alert("다시 입력하세요.");
      }
      this.vendingMachine.addProduct(
        $addName.value,
        parseInt($addPrice.value, 10),
        parseInt($addQuantity.value, 10)
      );
    });
  }
}
