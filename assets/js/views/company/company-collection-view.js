var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/collection-view', 'views/company/company-item-list-view', 'text!templates/company/company-list-view.hbs'], function(BaseCollectionView, CompanyItemListView, template) {
  'use strict';
  var CompanyCollectionView;
  return CompanyCollectionView = (function(superClass) {
    extend(CompanyCollectionView, superClass);

    function CompanyCollectionView() {
      return CompanyCollectionView.__super__.constructor.apply(this, arguments);
    }

    CompanyCollectionView.prototype.tagName = 'div';

    CompanyCollectionView.prototype.id = 'carrers';

    CompanyCollectionView.prototype.listSelector = '#company-container';

    CompanyCollectionView.prototype.className = 'company-collection-view';

    CompanyCollectionView.prototype.autoRender = true;

    CompanyCollectionView.prototype.renderItems = true;

    CompanyCollectionView.prototype.itemView = CompanyItemListView;

    CompanyCollectionView.prototype.template = template;

    template = null;

    return CompanyCollectionView;

  })(BaseCollectionView);
});

//# sourceMappingURL=../../maps/views/company/company-collection-view.js.map