import { parseUrl } from "../../../scripts/utils.js";
//import { Component } from "../../../scripts/component";

import template from "./score.component.html";
import "./score.component.css";

export class ScoreComponent {
  constructor() {
    let params = parseUrl();
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
    this.template = template;
  }

  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  }
}

export default ScoreComponent;