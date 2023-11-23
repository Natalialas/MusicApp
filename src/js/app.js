import {settings, select, classNames} from './settings.js';
import Home from './components/Home.js';
import Discover from './components/Discover.js';
import Search from './components/Search.js';


const app = {
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

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.database;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
        
        thisApp.data = parsedResponse;

        thisApp.initContent();
      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  customizeSongSource: function() {
    const thisApp = this;

    for (const song of thisApp.data.songs) {
      song.src = `./songs/${song.filename}`;
    }
  },

  initHome: function () {
    const thisApp = this;
  
    const homeElem = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeElem, thisApp.dataHome);
  },

  initDiscover: function () {
    const thisApp = this;

    const discoverElem = document.querySelector(select.containerOf.discover);
    thisApp.discover = new Discover(discoverElem, thisApp.data);
  },

  initSearch: function () {
    const thisApp = this;

    const searchElem = document.querySelector(select.containerOf.search);
    thisApp.search = new Search(searchElem, thisApp.data);
  },

  initContent: function() {
    const thisApp = this;
    
    thisApp.customizeSongSource();
    thisApp.initHome();
    thisApp.initSearch();
    thisApp.initDiscover();
  },

  init: function(){
    const thisApp = this;
  
    thisApp.initPages();
    thisApp.initData();
  }
};


app.init();