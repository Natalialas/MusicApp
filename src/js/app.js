import {settings, select, classNames} from './settings.js';
import Home from './components/Home.js';
import Discover from './components/Discover.js';
import Search from './components/Search.js';
import HomeSongs from './components/HomeSongs.js';


const app = {
  initHome: function () {
    const thisApp = this;
  
    thisApp.homeElem = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(thisApp.homeElem, thisApp.dataHome);
  },

  initDiscover: function () {
    const thisApp = this;

    const discoverElem = document.querySelector(select.containerOf.discover);
    thisApp.discover = new Discover(discoverElem);
  },

  initSearch: function () {
    const thisApp = this;

    const searchElem = document.querySelector(select.containerOf.search);
    thisApp.search = new Search(searchElem);
  },

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id; 

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
      
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initHomeSongs: function () {

    const thisApp = this;
    for(let songData in thisApp.data.songs){
      new HomeSongs(thisApp.data.songs[songData].id, thisApp.data.songs[songData]);
    }
  },

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.songs;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
        
        thisApp.data.songs = parsedResponse;
        
        thisApp.initHomeSongs();
      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));
  },


  init: function(){
    const thisApp = this;
    thisApp.initData();
    thisApp.initHome();
    thisApp.initPages();
    thisApp.initDiscover();
    thisApp.initSearch();
  }
};

app.init();