var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['swiper', 'views/base/collection-view', 'views/carousel/carousel-item-list-view', 'text!templates/carousel/carousel-list-view.hbs'], function(Swiper, BaseCollectionView, CarouselItemListView, template) {
  'use strict';
  var CarouselCollectionView;
  return CarouselCollectionView = (function(superClass) {
    extend(CarouselCollectionView, superClass);

    function CarouselCollectionView() {
      return CarouselCollectionView.__super__.constructor.apply(this, arguments);
    }

    CarouselCollectionView.prototype.initialize = function() {
      return CarouselCollectionView.__super__.initialize.apply(this, arguments);
    };

    CarouselCollectionView.prototype.tagName = 'div';

    CarouselCollectionView.prototype.className = 'swiper-container';

    CarouselCollectionView.prototype.id = 'swiper-container';

    CarouselCollectionView.prototype.listSelector = '#swiper-wrapper';

    CarouselCollectionView.prototype.autoRender = true;

    CarouselCollectionView.prototype.renderItems = true;

    CarouselCollectionView.prototype.itemView = CarouselItemListView;

    CarouselCollectionView.prototype.template = template;

    template = null;


    /*
    addProfile: (profile) ->
      @collection.add(profile)
     */

    return CarouselCollectionView;

  })(BaseCollectionView);
});

//# sourceMappingURL=../../maps/views/carousel/carousel-collection-view.js.map