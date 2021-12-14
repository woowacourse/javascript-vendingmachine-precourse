import { initialViews, showProductList } from "./views/views.js";
import { initialEvent } from "./controllers/eventController.js"
import { state,updateState } from "./models/state.js";

updateState();
initialViews();
initialEvent();
showProductList();

console.log(state);