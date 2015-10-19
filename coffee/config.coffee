API_ROOT_URL = 'https://recruitment.elements.nl:8080/v1/'
DEBUG = true if typeof DEBUG == 'undefined'

require.config
  baseUrl: './assets/js/'

  paths:
    'jquery'        : '../../bower_components/jquery/jquery',
    'underscore'    : '../../bower_components/lodash/dist/lodash',
    'backbone'      : '../../bower_components/backbone/backbone',
    'handlebars'    : '../../bower_components/handlebars/handlebars',
    'text'          : '../../bower_components/requirejs-text/text',
    'chaplin'       : '../../bower_components/chaplin/chaplin',
    'swiper'        : '../../bower_components/Swiper/dist/js/swiper.jquery.umd',
    'lazysizes'     : 'lib/lazysizes'
    'inview'        : 'lib/jquery.inview'
    'lbset'         : 'lib/ls.bgset.min'

  shim:
    'underscore':
      exports  : '_'
    'backbone':
      deps :
        ['underscore', 'jquery']
      exports : 'Backbone'
    'handlebars':
      exports: 'Handlebars'

    'swiper' :
      deps :
        ['jquery']
      exports: 'Swiper'

    'inview' :
      deps :
        ['jquery']
      exports: 'inview'

    'lbset' :
      degs :
        ['lazysizes']

  urlArgs: 'bust=' +  (new Date()).getTime()

require(['assets/js/main.js']);

