require ['application', 'routes', 'inview', 'lazysizes', 'lbset'], (Application, routes, inview) ->
  new Application
    routes: routes
    controllerSuffix: '-controller'

  document.addEventListener 'lazybeforeunveil', (e) ->
    bg = e.target.getAttribute('data-bg');
    if (bg)
      e.target.style.backgroundImage = 'url(' + bg + ')'

  $(document).on 'inview', '.animated', (event, isInView, visiblePartX, visiblePartY) ->
    if (isInView)
      if (visiblePartY == 'top')
        $(@).addClass('animated-loaded')
      else if (visiblePartY == 'bottom')
      else

  $(document).on 'click', '.header__nav--link', (e) ->
    e.preventDefault()

    id = $(@).attr('href')

    $('body, html').animate
      scrollTop: $(id).position().top - 110
    , 500





