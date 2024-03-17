// Import the HTML template
import template from './footer.component.html';

// Import CSS styles
//import './footer.component.css';

// Define the FooterComponent class
export default class FooterComponent extends HTMLElement {
  constructor() {
    super();
    // Assign the HTML template to innerHTML
    this.innerHTML = template;
    // Additional constructor logic can be added here
  }
}