import { showAll } from "./views/common/showAll.js";
import { createAll } from "./controllers/common/createAll.js";

class VendingMachine {
  constructor() {
    showAll();
    createAll();
    this.importCss();
  }

  // css 파일 추가
  importCss() {
    document.head.innerHTML += `
      <link rel="stylesheet" href="src/index.css">
    `;
  }
}

new VendingMachine();
