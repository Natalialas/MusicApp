export const select = {
  templateOf: {
    home: '#template-home',
  },
  containerOf: {
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
  home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
};