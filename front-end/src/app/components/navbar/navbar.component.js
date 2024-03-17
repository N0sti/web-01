// Import the HTML template
import template from './navbar.component.html';

// Import CSS styles
import './navbar.component.css';

// Define the NavbarComponent class
export default class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    // Assign the HTML template to innerHTML
    this.innerHTML = template;
    // Additional constructor logic can be added here
  }
}

