import {templates, select} from '../settings.js';

class HomeSongs {
  constructor(id, data) {
    const thisHomeSongs = this;

    thisHomeSongs.id = id;
    thisHomeSongs.data = data;

    thisHomeSongs.render();
  }

  render() {
    const thisHomeSongs = this;

    // Clear the container before appending new songs
    const homeSongsContainer = document.querySelector(select.containerOf.songs);
    homeSongsContainer.innerHTML = '';

    // Iterate through each song and render its view
    thisHomeSongs.data.songs.forEach(song => {
      const songView = thisHomeSongs.createSongView(song);
      homeSongsContainer.appendChild(songView);
    });
  }

  createSongView(song) {
    const thisHomeSongs = this;
    // Create a new element for the song
    const songElement = document.createElement('div');
    songElement.classList.add('song-item');

    // Populate the element with song details using the template
    const generatedHTML = templates.songs({ songs: [song] });
    songElement.innerHTML = generatedHTML;

    // Initialize Green Audio Player for the current song
    GreenAudioPlayer.init({
      selector: `.player-${thisHomeSongs.id} .green-audio-player`,
      stopOthersOnPlay: true,
    });

    return songElement;
  }
}

export default HomeSongs;