import { showAll } from "./views/common/showAll.js";
import { createAll } from "./controllers/common/createAll.js";

class VendingMachine {
  constructor() {
    showAll();
    createAll();
  }
}

new VendingMachine();
