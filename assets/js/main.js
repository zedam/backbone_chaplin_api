require(['application', 'routes', 'inview', 'lazysizes', 'lbset'], function(Application, routes, inview) {
  new Application({
    routes: routes,
    controllerSuffix: '-controller'
  });
  document.addEventListener('lazybeforeunveil', function(e) {
    var bg;
    bg = e.target.getAttribute('data-bg');
    if (bg) {
      return e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });
  $(document).on('inview', '.animated', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      if (visiblePartY === 'top') {
        return $(this).addClass('animated-loaded');
      } else if (visiblePartY === 'bottom') {

      } else {

      }
    }
  });
  return $(document).on('click', '.header__nav--link', function(e) {
    var id;
    e.preventDefault();
    id = $(this).attr('href');
    return $('body, html').animate({
      scrollTop: $(id).position().top - 110
    }, 500);
  });
});

//# sourceMappingURL=maps/main.js.map