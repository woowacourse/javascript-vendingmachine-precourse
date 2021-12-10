export const $ = (selector) => document.querySelector(selector);

export const $create = (tag) => document.createElement(tag);

export const siblings = ($) => [...$.parentElement.children].filter((element) => element != $);
