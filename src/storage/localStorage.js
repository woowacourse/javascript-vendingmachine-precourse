import { COIN } from "../utils/constants.js";

const setOwnChange = (ownChange) => {
  localStorage.setItem("ownChange", JSON.stringify(ownChange));
};

const getOwnChange = () => {
  if (localStorage.getItem("ownChange") === null) {
    setOwnChange(new Array(COIN.length).fill(0));
  }

  return JSON.parse(localStorage.getItem("ownChange"));
};

export { getOwnChange, setOwnChange };
