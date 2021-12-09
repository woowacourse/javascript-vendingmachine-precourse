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
