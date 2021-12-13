import { ID } from '../constants/index.js';
import addProduct from './tabs/addProduct.js';
import manageMachine from './tabs/manageMachine.js';
import purchaseProduct from './tabs/purchaseProduct.js';

const Content = ({ tabID }) => {
  switch (tabID) {
    case ID.PRDCT_ADD:
      return addProduct;

    case ID.MCHNE_MANAGE:
      return manageMachine;

    case ID.PRDCT_PURCHASE:
      return purchaseProduct;
  }
};

export default Content;
