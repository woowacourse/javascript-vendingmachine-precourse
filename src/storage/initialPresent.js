export const createTabs = () => {
    const $tabs = document.createElement("div");
    const $manageTab = document.createElement("button");
    const $chargeTab = document.createElement("button");
    const $purchaseTab = document.createElement("button");

    $tabs.appendChild($manageTab);
    $tabs.appendChild($chargeTab);
    $tabs.appendChild($purchaseTab);
};
