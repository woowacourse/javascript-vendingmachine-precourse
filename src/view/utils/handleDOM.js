const hideWithID = (id) => {
  document.getElementById(id).style.display = "none";
};

const showWithID = (id) => {
  document.getElementById(id).style.display = "";
};

export { hideWithID, showWithID };
