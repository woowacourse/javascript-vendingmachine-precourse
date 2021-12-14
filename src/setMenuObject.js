export const getMenuObject = () => JSON.parse(localStorage.getItem('menuObject'));

export const getMenuObjectKey = () => {
    const tmpObj = getMenuObject();
    const tmpObjKey = [];
    for (const key in tmpObj) {
        tmpObjKey.push(key);
    }
    return tmpObjKey;
};

export const pushMenuObject = (productAddMenuFlag, vendingMachineManageMenuFlag, productPurchaseMenuFlag) => {
    localStorage.setItem('menuObject', JSON.stringify({ productAddMenu: productAddMenuFlag, vendingMachineManageMenu: vendingMachineManageMenuFlag, productPurchaseMenu: productPurchaseMenuFlag }));
};