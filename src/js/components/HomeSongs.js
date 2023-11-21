import {templates, select} from '../settings.js';
import utils from '../utils.js';

class HomeSongs {
  constructor(id, data) {
    const thisHomeSongs = this;

    thisHomeSongs.id = id;
    thisHomeSongs.data = data;

    thisHomeSongs.render();
  }

  render() {
    const thisHomeSongs = this;

    const generatedHTML = templates.songs(thisHomeSongs.data);

    thisHomeSongs.element = utils.createDOMFromHTML(generatedHTML);

    const homeSongsContainer = document.querySelector(select.containerOf.songs);

    homeSongsContainer.appendChild(thisHomeSongs.element);
  }
}

export default HomeSongs; 