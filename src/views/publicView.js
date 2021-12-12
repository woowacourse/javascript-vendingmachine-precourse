import {
  TITLE_TEXT,
  MARGIN_SIZE,
  MENU_TAP,
  VIEW_CONTAINER,
} from "../utils/constants.js";
import { renderManageProductMenuView } from "./manageProductView.js";
import { renderChargeChangeMenuView } from "./chargeChangeView.js";
import { renderPurchaseProductMenuView } from "./purchaseProductView.js";
import { onClickMenuButton } from "../utils/utils.js";

const renderArray = [
  renderManageProductMenuView,
  renderChargeChangeMenuView,
  renderPurchaseProductMenuView,
];
const menuTapInformations = MENU_TAP.map((information, index) => [
  ...information,
  renderArray[index],
]);

const makeTitle = () => {
  const title = document.createElement("h2");
  title.innerText = TITLE_TEXT;

  return title;
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
  view.id = VIEW_CONTAINER;

  return view;
};
