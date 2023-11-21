export const select = {
  templateOf: {
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
    songs: 'songs',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParam: 'repeat=false',
    repeatParam: 'repeat_ne=false',
  },
};

export const templates = {
  search: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML),
  discover: Handlebars.compile(document.querySelector(select.templateOf.discover).innerHTML),
  home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
};