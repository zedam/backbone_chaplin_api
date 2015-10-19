var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'text!templates/about/about-view.hbs'], function(BaseCollectionView, template) {
  'use strict';
  var AboutView;
  return AboutView = (function(superClass) {
    extend(AboutView, superClass);

    function AboutView() {
      return AboutView.__super__.constructor.apply(this, arguments);
    }

    AboutView.prototype.initialize = function() {
      return AboutView.__super__.initialize.apply(this, arguments);
    };

    AboutView.prototype.className = 'about-container';

    AboutView.prototype.id = 'about';

    AboutView.prototype.autoRender = true;

    AboutView.prototype.template = template;

    template = null;

    return AboutView;

  })(BaseCollectionView);
});

//# sourceMappingURL=../../maps/views/about/about-view.js.map