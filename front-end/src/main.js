import { Router } from "./scripts/router";
import { WelcomeComponent } from "./app/components/welcome/welcome.component";
import { GameComponent } from "./app/components/game/game.component";
import { ScoreComponent } from "./app/components/score/score.component";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";
import NavbarComponent from './app/components/navbar/navbar.component';
customElements.define("my-navbar", NavbarComponent);
import FooterComponent from './app/components/footer/footer.component';
customElements.define("my-footer", FooterComponent);

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
