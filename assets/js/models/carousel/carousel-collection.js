var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['module', 'models/base/collection', 'models/carousel/carousel-model'], function(module, BaseCollection, CarouselModel) {
  'use strict';
  var CarouselCollection;
  return CarouselCollection = (function(superClass) {
    extend(CarouselCollection, superClass);

    function CarouselCollection() {
      return CarouselCollection.__super__.constructor.apply(this, arguments);
    }

    CarouselCollection.prototype.model = CarouselModel;

    CarouselCollection.prototype.url = 'carousel/';

    return CarouselCollection;

  })(BaseCollection);
});

//# sourceMappingURL=../../maps/models/carousel/carousel-collection.js.map