export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

const show = (selector) => (document.querySelector(selector).style.display = 'block');
const hide = (selector) => (document.querySelector(selector).style.display = 'none');

export const showManageTab = () => {
  show('#manage-tab');
  hide('#change-tab');
  hide('#purchase-tab');
};

export const showChangeTab = () => {
  hide('#manage-tab');
  show('#change-tab');
  hide('#purchase-tab');
};

export const showPurchaseTab = () => {
  hide('#manage-tab');
  hide('#change-tab');
  show('#purchase-tab');
};
