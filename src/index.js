import { initialViews } from "./views/views.js";
import { rendering } from "./views/render.js";
import { initialEvent } from "./controllers/eventController.js"
import { state, updateState } from "./models/state.js";

updateState();
initialViews();
initialEvent();
rendering();