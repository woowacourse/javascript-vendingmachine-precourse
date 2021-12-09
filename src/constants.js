export const SELECTOR = {
  // 공통
  vendingMachineApp: 'app',

  // 탭 메뉴 버튼
  productPurchaseMenuId: 'product-purchase-menu',
  vendingMachineManageMenuId: 'vending-machine-manage-menu',
  productAddMenuId: 'product-add-menu',

  // 상품 관리(추가) 메뉴
  productNameInputId: 'product-name-input',
  productPriceInputId: 'product-price-input',
  productQuantityInputId: 'product-quantity-input',
  productAddButtonId: 'product-add-button',
  productManageItemClass: 'product-manage-item',
  productManageNameClass: 'product-manage-name',
  productManagePriceClass: 'product-manage-price',
  productManageQuantityClass: 'product-manage-quantity',

  // 잔돈 충전(자판기 보유 동전) 메뉴
  vendingMachineChargeInputId: 'vending-machine-charge-input',
  vendingMachineChargeButtonId: 'vending-machine-charge-button',
  vendingMachineChargeAmountId: 'vending-machine-charge-amount',
  vendingMachineCoin500QuantityId: 'vending-machine-coin-500-quantity',
  vendingMachineCoin100QuantityId: 'vending-machine-coin-100-quantity',
  vendingMachineCoin50QuantityId: 'vending-machine-coin-50-quantity',
  vendingMachineCoin10QuantityId: 'vending-machine-coin-10-quantity',

  // 상품 구매 메뉴
  chargeInputId: 'charge-input',
  chargeButtonId: 'charge-button',
  chargeAmountId: 'charge-amount',
  coinReturnButtonId: 'coin-return-button',
  coin500QuantityId: 'coin-500-quantity',
  coin100QuantityId: 'coin-100-quantity',
  coin50QuantityId: 'coin-50-quantity',
  coin10QuantityId: 'coin-10-quantity',
  productPurchaseItemClass: 'product-purchase-item',
  purchaseButtonClass: 'purchase-button',
  productPurchaseNameClass: 'product-purchase-name',
  productPurchasePriceClass: 'product-purchase-price',
  productPurchaseQuantityClass: 'product-purchase-quantity',
  dataProductNameDataset: 'data-product-name',
  dataProductPriceDataset: 'data-product-price',
  dataProductQuantityDataset: 'data-product-quantity',
};

export const TAB_BUTTONS = [
  {
    text: '상품 관리',
    id: SELECTOR.productAddMenuId,
  },
  {
    text: '잔돈 충전',
    id: SELECTOR.productPurchaseMenuId,
  },
  {
    text: '상품 구매',
    id: SELECTOR.productPurchaseMenuId,
  },
];
