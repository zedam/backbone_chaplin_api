var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['chaplin', 'controllers/base/controller', 'models/carousel/carousel-collection', 'views/carousel/carousel-collection-view', 'models/company/company-collection', 'views/company/company-collection-view', 'models/comment/comment-collection', 'views/comment/comment-collection-view', 'views/comment/comment-form-view'], function(Chaplin, Controller, CarouselCollection, CarouselCollectionView, CompanyCollection, CompanyCollectionView, CommentCollection, CommentCollectionView, CommentFormView) {
  'use strict';
  var ProfileController;
  return ProfileController = (function(superClass) {
    extend(ProfileController, superClass);

    function ProfileController() {
      return ProfileController.__super__.constructor.apply(this, arguments);
    }

    ProfileController.prototype.beforeAction = function() {
      ProfileController.__super__.beforeAction.apply(this, arguments);
      this.reuse('carouselCollection', {
        compose: function() {
          this.item = new CarouselCollection;
          return this.item.fetch();
        }
      });
      this.reuse('companyCollection', {
        compose: function() {
          this.item = new CompanyCollection;
          return this.item.fetch();
        }
      });
      return this.reuse('commentCollection', {
        compose: function() {
          this.item = new CommentCollection;
          return this.item.fetch();
        }
      });
    };

    ProfileController.prototype.index = function() {
      this.carouselView = new CarouselCollectionView({
        collection: this.reuse('carouselCollection'),
        region: 'top'
      });
      this.companyView = new CompanyCollectionView({
        collection: this.reuse('companyCollection'),
        region: 'main'
      });
      this.commentFormView = new CommentFormView({
        region: 'main'
      });
      return this.commentView = new CommentCollectionView({
        collection: this.reuse('commentCollection'),
        region: 'main'
      });
    };

    return ProfileController;

  })(Controller);
});

//# sourceMappingURL=../maps/controllers/home-controller.js.map