var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['swiper', 'views/base/view', 'models/carousel/carousel-model', 'text!templates/carousel/carousel-item-list-view.hbs'], function(Swiper, BaseView, CarouselModel, template) {
  'use strict';
  var CarouselItemView;
  return CarouselItemView = (function(superClass) {
    extend(CarouselItemView, superClass);

    function CarouselItemView() {
      return CarouselItemView.__super__.constructor.apply(this, arguments);
    }

    CarouselItemView.prototype.initialize = function() {
      return CarouselItemView.__super__.initialize.apply(this, arguments);
    };

    CarouselItemView.prototype.model = CarouselModel;

    CarouselItemView.prototype.className = 'swiper-slide';

    CarouselItemView.prototype.autoRender = true;

    CarouselItemView.prototype.autoAttach = true;

    CarouselItemView.prototype.afterRender = function() {
      return setTimeout(function() {
        return new Swiper('.swiper-container', {
          direction: 'horizontal',
          autoplay: 6000,
          parallax: true,
          loop: false,
          paginationClickable: true,
          keyboardControl: true,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
        });
      }, 100);
    };

    CarouselItemView.prototype.template = template;

    template = null;

    return CarouselItemView;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/carousel/carousel-item-list-view.js.map