export const app = document.getElementById('app');

export const getMenuButtons = () => {
  return [
    document.getElementById('product-add-menu'),
    document.getElementById('vending-machine-manage-menu'),
    document.getElementById('product-purchase-menu'),
  ];
};

export const getManagers = () => {
  return [
    document.getElementById('product-manager'),
    document.getElementById('vending-machine-manager'),
    document.getElementById('purchase-manager'),
  ];
};

export const getProductAddButton = () => {
  return document.getElementById('product-add-button');
};

export const getProductManagerProductTableBody = () => {
  return document.getElementById('product-manager-product-table-body');
};

export const getVendingMachineChargeButton = () => {
  return document.getElementById('vending-machine-charge-button');
};

export const getVendingMachineChargeAmount = () => {
  return document.getElementById('vending-machine-charge-amount');
};

export const getVendingMachineCoinTableData = () => {
  return {
    500: document.getElementById('vending-machine-coin-500-quantity'),
    100: document.getElementById('vending-machine-coin-100-quantity'),
    50: document.getElementById('vending-machine-coin-50-quantity'),
    10: document.getElementById('vending-machine-coin-10-quantity'),
  };
};

export const getChargeButton = () => {
  return document.getElementById('charge-button');
};

export const getChargeAmount = () => {
  return document.getElementById('charge-amount');
};
