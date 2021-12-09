import { setInitialPresent } from "./storage/initialPresent.js";

export default function Vendingmachine() {
    this.init = () => {
        setInitialPresent();
    };
}

const vending = new Vendingmachine();
vending.init();
