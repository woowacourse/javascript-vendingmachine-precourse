import { createTabs } from "./storage/initialPresent.js";

export default function Vendingmachine() {
    this.init = () => {
        createTabs();
    };
}

const vending = new Vendingmachine();
vending.init();
