import {templates} from '../settings.js';
import utils from '../utils.js';

class Search {
  constructor(element) {
    const thisSearch = this;    

    thisSearch.render(element);
  }

  render(element) {
    const thisSearch = this;

    thisSearch.dom = {};

    thisSearch.dom.wrapper = element;

    const generatedHTML = templates.search(thisSearch.dom.wrapper);

    const generatedDOM = utils.createDOMFromHTML(generatedHTML);

    thisSearch.dom.wrapper.appendChild(generatedDOM);
  
  }
}

export default Search; 