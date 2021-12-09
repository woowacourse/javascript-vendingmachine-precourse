import Controller from "./Controller/Controller.js";
import View from "./View/View.js";
import Model from "./Model/Model.js";

const app = new Controller(new Model(), new View());
