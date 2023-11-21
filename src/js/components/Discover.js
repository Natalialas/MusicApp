import {templates} from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(element) {
    const thisDiscover = this;

    thisDiscover.render(element);
  }

  render(element) {
    const thisDiscover = this;

    thisDiscover.dom = {};

    thisDiscover.dom.wrapper = element;

    const generatedHTML = templates.discover(thisDiscover.dom.wrapper);

    const generatedDOM = utils.createDOMFromHTML(generatedHTML);

    thisDiscover.dom.wrapper.appendChild(generatedDOM);
  
  }
}

export default Discover; 