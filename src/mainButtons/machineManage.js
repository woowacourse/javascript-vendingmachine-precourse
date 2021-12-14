import ManageMode from '../mode/manageMode.js';

export default function MachineManage() {
  const machineManage = document.createElement('button');
  machineManage.id = "vending-machine-manage-menu";
  machineManage.innerText = "잔돈 충전";
  machineManage.style = "margin-right:10px";
  machineManage.addEventListener("click", ManageMode);
  return machineManage;
}