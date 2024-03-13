import template from "../views/welcome.html";
// TODO #class: use the ES6 class keyword
/* class WelcomeComponent constructor  */
export class WelcomeComponent {
  // TODO #extends: call super(template)
  constructor() {
    this.template = template;
  }


  init() {
    let form = document.querySelector("form.form-signin");

    form.addEventListener(
      "submit",
      // TODO #arrow-function: use arrow function instead.
      (event) => {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          let name = event.target.querySelector("#nickname").value;
          let size = parseInt(event.target.querySelector("#size").value);

          this._startGame(name, size);
        }
      },
      false
    );

    return this;
  }


  // TODO #class: turn function into a method of WelcomeComponent
  _startGame(name, size) {
    let gamePage = "./#game";
    // TODO #template-literals:  use template literals (backquotes)
    window.location = `${gamePage}?name=${name}&size=${size}`;
  }

}