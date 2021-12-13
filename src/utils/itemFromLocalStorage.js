// localStorage의 item을 변환하여 반환
const getItemFromLocalStorage = name => {
  return JSON.parse(localStorage.getItem(name));
};

// localStorage에 item을 변환하여 저장
const setItemFromLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

// localStorage에서 아이템 삭제
const removeItemFromLocalStorage = name => {
  localStorage.removeItem(name);
};

export {
  getItemFromLocalStorage,
  setItemFromLocalStorage,
  removeItemFromLocalStorage,
};
