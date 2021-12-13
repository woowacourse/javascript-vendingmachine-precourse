export const app = document.getElementById('app');

export const getMenuButtons = () => [
  document.getElementById('product-add-menu'),
  document.getElementById('vending-machine-manage-menu'),
  document.getElementById('product-purchase-menu'),
];

export const getManagers = () => [
  document.getElementById('product-manager'),
  document.getElementById('vending-machine-manager'),
  document.getElementById('purchase-manager'),
];

export const getProductAddButton = () =>
  document.getElementById('product-add-button');

export const getProductManagerProductTableBody = () =>
  document.getElementById('product-manager-product-table-body');

export const getVendingMachineChargeButton = () =>
  document.getElementById('vending-machine-charge-button');

export const getVendingMachineChargeAmount = () =>
  document.getElementById('vending-machine-charge-amount');

export const getVendingMachineCoinTableData = () => {
  return {
    500: document.getElementById('vending-machine-coin-500-quantity'),
    100: document.getElementById('vending-machine-coin-100-quantity'),
    50: document.getElementById('vending-machine-coin-50-quantity'),
    10: document.getElementById('vending-machine-coin-10-quantity'),
  };
};

export const getChargeButton = () => document.getElementById('charge-button');

export const getChargeAmount = () => document.getElementById('charge-amount');

export const getPurchaseManagerPurchaseTableBody = () =>
  document.getElementById('purchase-manager-purchase-table-body');

export const getPurchaseButtonCollection = () =>
  document.getElementsByClassName('purchase-button');

export const getProductPurchaseItemCollection = () =>
  document.getElementsByClassName('product-purchase-item');

export const getPurchasedItemQuantity = name => {
  const purchaseItems = getProductPurchaseItemCollection();

  for (let item of purchaseItems) {
    if (item.dataset.productPurchaseItem === name) {
      return item.getElementsByClassName('product-purchase-quantity')[0];
    }
  }
};

export const getProductManagerItemCollection = () =>
  document.getElementsByClassName('product-manage-item');

export const getPurchasedProductManagerItemQuantity = name => {
  const productItems = getProductManagerItemCollection();

  for (let item of productItems) {
    if (item.dataset.productItem === name) {
      return item.getElementsByClassName('product-manage-quantity')[0];
    }
  }
};

export const getCoinReturnButton = () =>
  document.getElementById('coin-return-button');

export const getReturnCoinTableData = () => {
  return {
    500: document.getElementById('coin-500-quantity'),
    100: document.getElementById('coin-100-quantity'),
    50: document.getElementById('coin-50-quantity'),
    10: document.getElementById('coin-10-quantity'),
  };
};
