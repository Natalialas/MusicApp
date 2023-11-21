import {templates, select} from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(id, data) {
    const thisHome = this;

    thisHome.id = id;
    thisHome.data = data;

    thisHome.render();
  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.home(thisHome.data);

    thisHome.element = utils.createDOMFromHTML(generatedHTML);

    const homeContainer = document.querySelector(select.containerOf.home);

    homeContainer.appendChild(thisHome.element);
  }
}

export default Home; 