import template from "../views/score.html";
import { parseUrl } from './utils.js';

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