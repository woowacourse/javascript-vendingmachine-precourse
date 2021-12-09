import { makeHeader, makeView } from "../views/publicView.js";

export const initializeHeader = () => {
  const $app = document.getElementById("app");
  $app.appendChild(makeHeader());
  $app.appendChild(makeView());
};
