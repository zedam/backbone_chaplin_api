var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['models/base/model'], function(Model) {
  'use strict';
  var CarouselModel;
  return CarouselModel = (function(superClass) {
    extend(CarouselModel, superClass);

    function CarouselModel() {
      return CarouselModel.__super__.constructor.apply(this, arguments);
    }

    CarouselModel.prototype.defaults = {
      image: '',
      image_2x: '',
      title: '',
      subtitle: '',
      action: '',
      action_url: ''
    };

    return CarouselModel;

  })(Model);
});

//# sourceMappingURL=../../maps/models/carousel/carousel-model.js.map