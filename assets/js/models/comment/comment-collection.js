var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['module', 'models/base/collection', 'models/comment/comment-model'], function(module, BaseCollection, CommentModel) {
  'use strict';
  var CommentCollection;
  return CommentCollection = (function(superClass) {
    extend(CommentCollection, superClass);

    function CommentCollection() {
      return CommentCollection.__super__.constructor.apply(this, arguments);
    }

    CommentCollection.prototype.model = CommentModel;

    CommentCollection.prototype.url = 'comments/';

    return CommentCollection;

  })(BaseCollection);
});

//# sourceMappingURL=../../maps/models/comment/comment-collection.js.map