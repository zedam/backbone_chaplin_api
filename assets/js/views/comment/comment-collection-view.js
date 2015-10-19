var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['swiper', 'views/base/collection-view', 'views/comment/comment-item-list-view', 'text!templates/comment/comment-list-view.hbs', 'views/comment/comment-form-view'], function(Swiper, BaseCollectionView, CommentItemListView, template) {
  'use strict';
  var CommentCollectionView;
  return CommentCollectionView = (function(superClass) {
    extend(CommentCollectionView, superClass);

    function CommentCollectionView() {
      return CommentCollectionView.__super__.constructor.apply(this, arguments);
    }

    CommentCollectionView.prototype.initialize = function() {
      CommentCollectionView.__super__.initialize.apply(this, arguments);
      return this.subscribeEvent('updateComments', this.addComment);
    };

    CommentCollectionView.prototype.tagName = 'div';

    CommentCollectionView.prototype.className = 'comment-list-container';

    CommentCollectionView.prototype.id = 'comment-container';

    CommentCollectionView.prototype.listSelector = '#comments-container';

    CommentCollectionView.prototype.itemView = CommentItemListView;

    CommentCollectionView.prototype.autoRender = true;

    CommentCollectionView.prototype.renderItems = true;

    CommentCollectionView.prototype.template = template;

    CommentCollectionView.prototype.addComment = function(comment) {
      return this.collection.add(comment);
    };

    template = null;

    return CommentCollectionView;

  })(BaseCollectionView);
});

//# sourceMappingURL=../../maps/views/comment/comment-collection-view.js.map