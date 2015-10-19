var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'text!templates/blog/blog-view.hbs'], function(BaseCollectionView, template) {
  'use strict';
  var BlogView;
  return BlogView = (function(superClass) {
    extend(BlogView, superClass);

    function BlogView() {
      return BlogView.__super__.constructor.apply(this, arguments);
    }

    BlogView.prototype.initialize = function() {
      return BlogView.__super__.initialize.apply(this, arguments);
    };

    BlogView.prototype.className = 'blog__container';

    BlogView.prototype.id = 'blog';

    BlogView.prototype.autoRender = true;

    BlogView.prototype.template = template;

    template = null;

    return BlogView;

  })(BaseCollectionView);
});

//# sourceMappingURL=../../maps/views/blog/blog-view.js.map