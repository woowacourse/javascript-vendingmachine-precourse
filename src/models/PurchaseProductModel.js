const initInputMOney = () => {
  return JSON.parse(localStorage.getItem('inputMoney'))
    ? JSON.parse(localStorage.getItem('inputMoney'))
    : 0;
};
export default {
  inputMoney: initInputMOney(),
};
