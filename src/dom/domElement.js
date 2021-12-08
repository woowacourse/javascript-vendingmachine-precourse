export const app = document.getElementById('app');

export const getMenuButtons = () => {
  const productAddMenuButton = document.getElementById('product-add-menu');
  const vendingMachineManageMenuButton = document.getElementById(
    'vending-machine-manage-menu'
  );
  const productPurchaseMenuButton = document.getElementById(
    'product-purchase-menu'
  );

  return [
    productAddMenuButton,
    vendingMachineManageMenuButton,
    productPurchaseMenuButton,
  ];
};

export const getManagers = () => {
  const productManager = document.getElementById('product-manager');
  const vendingMachineChargeManager = document.getElementById(
    'vending-machine-manager'
  );
  const purchaseManager = document.getElementById('purchase-manager');

  return [productManager, vendingMachineChargeManager, purchaseManager];
};
