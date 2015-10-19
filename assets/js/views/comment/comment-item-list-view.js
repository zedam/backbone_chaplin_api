var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['swiper', 'views/base/view', 'models/comment/comment-model', 'text!templates/comment/comment-item-list-view.hbs'], function(Swiper, BaseView, CommentModel, template) {
  'use strict';
  var CommentItemView;
  return CommentItemView = (function(superClass) {
    extend(CommentItemView, superClass);

    function CommentItemView() {
      return CommentItemView.__super__.constructor.apply(this, arguments);
    }

    CommentItemView.prototype.initialize = function() {
      return CommentItemView.__super__.initialize.apply(this, arguments);
    };

    CommentItemView.prototype.model = CommentModel;

    CommentItemView.prototype.className = 'comment-item-list-view';

    CommentItemView.prototype.autoRender = true;

    CommentItemView.prototype.template = template;

    template = null;

    return CommentItemView;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/comment/comment-item-list-view.js.map