/* global GreenAudioPlayer */
import { select, templates} from '../settings.js';
import utils from '../utils.js';

class HomeSongs {
  constructor(id, data) {
    const thisHomeSongs = this;
  
    thisHomeSongs.id = id;
    thisHomeSongs.data = data;
  
    thisHomeSongs.render();
    // thisHomeSongs.createSongView();
    thisHomeSongs.initializeAudioPlayer();
  }

  render() {
    const thisHomeSongs = this;

    const generatedHTML = templates.songs(thisHomeSongs.data);

    thisHomeSongs.element = utils.createDOMFromHTML(generatedHTML);

    const songContainer = document.querySelector(select.containerOf.songs);

    songContainer.appendChild(thisHomeSongs.element);
  }


  initializeAudioPlayer() {
    // const thisHomeSongs = this;

    GreenAudioPlayer.init({
      selector: '.player',
      stopOthersOnPlay: true
    });
  }
}
  
export default HomeSongs;
