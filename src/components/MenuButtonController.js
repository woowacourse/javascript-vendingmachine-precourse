import ProductAddView from './ProductAddView.js';
import MachineManageView from './MachineManageView.js';
import ProductPurchaseView from './ProductPurchaseView.js';
import { CHANGE, VALUES, PRODUCT, USER_CHARGE } from '../utils/constants.js';

export default class MenuButtonController {
  static menuButtonEvent() {
    document.addEventListener('click', (e) => {
      const targetId = e.target.id;

    //   const userInput = JSON.parse(localStorage.getItem(USER_CHARGE));

        
      // 나중에 함수로 분리

      if (targetId === 'product-add-menu') {
        ProductAddView.render();
        ProductAddView.addEvent();
        // if(localStorage.getItem(PRODUCT) !== null) {
        // ProductAddView.showTable();
        // }
      }
      if (targetId === 'vending-machine-manage-menu') {
        MachineManageView.render();
        MachineManageView.addEvent();
        // MachineManageView.showTable();
        // const change = JSON.parse(localStorage.getItem(CHANGE));
        // if(change[VALUES] !== null){
        //     document.getElementById('vending-machine-charge-amount').innerHTML = change[VALUES];
        // }
      }
      if (targetId === 'product-purchase-menu') {
        ProductPurchaseView.render();
        ProductPurchaseView.addEvent();
        // if(localStorage.getItem(USER_CHARGE !== null)){
        //     console.log("asd");
        //   ProductPurchaseView.showUserCharge(userInput);
        // }
        if(localStorage.getItem(PRODUCT) !== null) {
          ProductPurchaseView.showProductTable();
        }
        ProductPurchaseView.addReturnEvent();
        // ProductPurchaseView.purchase();
        // ProductPurchaseView.showUserCharge();
        // 이벤트 리스너 추가
      }
    });
  }
}
