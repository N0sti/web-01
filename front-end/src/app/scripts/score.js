import template from "../views/score.html";
import { parseUrl } from './utils.js';

// TODO #class: use the ES6 class keyword
/* class ScoreComponent constructor */
export function ScoreComponent() {
  // TODO #extends: call super(template)
  var params = parseUrl();
  this.name = params.name;
  this.size = parseInt(params.size);
  this.time = parseInt(params.time);
  this.template = template;
}

// TODO #class: turn function into a method of ScoreComponent
/* method ScoreComponent.init */
ScoreComponent.prototype.init = function init() {
  document.getElementById("name").innerText = this.name;
  document.getElementById("size").innerText = this.size;
  document.getElementById("time").innerText = this.time;
};