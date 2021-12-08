import { $ } from '../dom/dom.js';
import { APP_TITLE, TAB_INFO_LIST } from '../constants/constants.js';

function createTabContentContainer() {
  const tabContentContainer = document.createElement('div');
  tabContentContainer.className = 'tab-content-container';
  return tabContentContainer;
}

function createButtonElement({ id, title }) {
  const button = document.createElement('button');
  button.id = id;
  button.innerText = title;
  button.style.marginRight = '10px';
  return button;
}

function createtabElementList() {
  const tabElementListContainer = document.createElement('div');
  const buttonIdList = TAB_INFO_LIST;
  buttonIdList.forEach((item) => {
    tabElementListContainer.appendChild(createButtonElement(item));
  });
  return tabElementListContainer;
}

function createtitleElement() {
  const titleContainer = document.createElement('h1');
  titleContainer.innerText = APP_TITLE;
  titleContainer.style.marginBottom = '40px';
  return titleContainer;
}

export default function initRender() {
  $('#app').appendChild(createtitleElement());
  $('#app').appendChild(createtabElementList());
  $('#app').appendChild(createTabContentContainer());
}
