var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'models/comment/comment-model', 'text!templates/comment/comment-form-view.hbs'], function(BaseView, CommentModel, template) {
  'use strict';
  var CommentView;
  return CommentView = (function(superClass) {
    extend(CommentView, superClass);

    function CommentView() {
      return CommentView.__super__.constructor.apply(this, arguments);
    }

    CommentView.prototype.initialize = function() {
      CommentView.__super__.initialize.apply(this, arguments);
      return this.delegateEvents({
        'submit': this.submitForm
      });
    };

    CommentView.prototype.animationDuration = 2000;

    CommentView.prototype.autoRender = true;

    CommentView.prototype.id = 'blog';

    CommentView.prototype.className = 'comment__container';

    CommentView.prototype.submitForm = function(e) {
      e.preventDefault();
      if ($('#form-name').val() !== '' && $('#form-email').val() !== '' && $('#form-comment').val() !== '') {
        this.model = new CommentModel({
          name: $('#form-name').val(),
          email: $('#form-email').val(),
          comment: $('#form-comment').val()
        });
        this.model.save();
      } else {
        alert('Please fill all the fields');
      }
      return this.publishEvent('updateComments', this.model);
    };

    CommentView.prototype.template = template;

    template = null;

    return CommentView;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/comment/comment-form-view.js.map