var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['models/base/model'], function(Model) {
  'use strict';
  var CommentModel;
  return CommentModel = (function(superClass) {
    extend(CommentModel, superClass);

    function CommentModel() {
      return CommentModel.__super__.constructor.apply(this, arguments);
    }

    CommentModel.prototype.urlRoot = 'comments/';

    CommentModel.prototype.defaults = {
      name: '',
      email: '',
      comment: ''
    };

    return CommentModel;

  })(Model);
});

//# sourceMappingURL=../../maps/models/comment/comment-model.js.map