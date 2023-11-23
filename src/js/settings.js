export const select = {
  templateOf: {
    songs: '#template-songs',
    searchBar: '#template-searchbar',
    search: '#template-search',
    discover: '#template-discover',
    home: '#template-home',
  },
  containerOf: {
    search: '#search-wrapper',
    discover: '#discover-wrapper',
    pages: '#pages',
    home: '#home-wrapper',
  },
  nav: {
    links: '.navigation a',
    discover: 'a[href="#discover"]',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    database: 'database',
  },
};

export const templates = {
  search: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML),
  discover: Handlebars.compile(document.querySelector(select.templateOf.discover).innerHTML),
  songs: Handlebars.compile(document.querySelector(select.templateOf.songs).innerHTML),
  home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
};