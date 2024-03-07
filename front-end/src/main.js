import { Router } from "./app/scripts/router";
import { WelcomeComponent } from "./app/scripts/welcome";
import { GameComponent } from "./app/scripts/game";
import { ScoreComponent } from "./app/scripts/score";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";

const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet);
console.log("test routeur 1")
console.log(outlet);
router
  .register("", {
    component: WelcomeComponent,
  })
  .register("welcome", {
    component: WelcomeComponent,
  })
  .register("game", {
    component: GameComponent,
  })
  .register("score", {
    component: ScoreComponent,
  });
  //console.log("comp", component, "templateUrl", templateUrl)
