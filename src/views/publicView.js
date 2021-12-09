import {
  TITLE_TEXT,
  MARGIN_SIZE,
  MENU_TAP_INFORMATION,
} from "../utils/constants.js";
import { renderManageProductMenuView } from "./manageProductView.js";
import { renderChargeChangeMenuView } from "./chargeChangeView.js";

const renderArray = [renderManageProductMenuView, renderChargeChangeMenuView];
const menuTapInformations = MENU_TAP_INFORMATION.map((information, index) => [
  ...information,
  renderArray[index],
]);

const makeTitle = () => {
  const title = document.createElement("h2");
  title.innerText = TITLE_TEXT;

  return title;
};

const resetViewContainer = () => {
  const $view_container = document.getElementById("view-container");
  $view_container.innerHTML = "";
};

const onClickMenuButton = buttonEvent => {
  event.preventDefault();
  resetViewContainer();
  buttonEvent();
};

const makeMenuButton = buttonInformation => {
  const [text, id, buttonEvent] = buttonInformation;
  const button = document.createElement("button");
  button.innerText = text;
  button.id = id;
  button.style.margin = MARGIN_SIZE;
  button.addEventListener("click", () => {
    onClickMenuButton(buttonEvent);
  });

  return button;
};

const makeNavigationTap = () => {
  const nav = document.createElement("nav");
  menuTapInformations.forEach(information =>
    nav.appendChild(makeMenuButton(information))
  );

  return nav;
};

export const makeHeader = () => {
  const header = document.createElement("div");
  header.appendChild(makeTitle());
  header.appendChild(makeNavigationTap());

  return header;
};

export const makeView = () => {
  const view = document.createElement("div");
  view.id = "view-container";

  return view;
};
