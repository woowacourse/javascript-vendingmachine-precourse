import { TITLE_TEXT, MARGIN_SIZE, MENU_TAP_INFORMATION } from "./constants.js";

const makeTitle = () => {
  const title = document.createElement("h2");
  title.innerText = TITLE_TEXT;

  return title;
};

const resetViewContainer = () => {
  const $view_container = document.getElementById("view-container");
  $view_container.innerHTML = "";
};

const makeMenuButton = menuInformation => {
  const [text, id] = menuInformation;
  const button = document.createElement("button");
  button.innerText = text;
  button.id = id;
  button.style.margin = MARGIN_SIZE;
  button.addEventListener("click", resetViewContainer);

  return button;
};

const makeNavigationTap = () => {
  const nav = document.createElement("nav");
  MENU_TAP_INFORMATION.forEach(menuInformation =>
    nav.appendChild(makeMenuButton(menuInformation))
  );

  return nav;
};

const makeHeader = () => {
  const header = document.createElement("div");
  header.appendChild(makeTitle());
  header.appendChild(makeNavigationTap());

  return header;
};

const makeView = () => {
  const view = document.createElement("div");
  view.id = "view-container";

  return view;
};

export const initializeHeader = () => {
  const $app = document.getElementById("app");
  $app.appendChild(makeHeader());
  $app.appendChild(makeView());
};
