import { createTabs } from "./storage/initialPresent.js";

export default function Vendingmachine() {
    this.init = () => {
        createTabs();
    };

    this.init();
}

const vending = new Vendingmachine();

vending();
