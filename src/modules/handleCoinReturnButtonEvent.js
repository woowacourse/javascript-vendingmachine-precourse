import updateVendingCoinStorage from '../storage/updateVendingCoinStorage.js';
import renderReturnCoinTable from '../views/renderReturnCoinTable.js';
import computeReturnCoinCount from './computeReturnCoinCount.js';
export default function handleCoinReturnButtonEvent() {
  const returnCoinObject = computeReturnCoinCount();
  renderReturnCoinTable(returnCoinObject);
  updateVendingCoinStorage(returnCoinObject);
}
