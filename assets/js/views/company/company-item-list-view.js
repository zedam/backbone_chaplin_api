var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['views/base/view', 'models/company/company-model', 'text!templates/company/company-item-list-view.hbs'], function(BaseView, CompanyModel, template) {
  'use strict';
  var CompanyItemView;
  return CompanyItemView = (function(superClass) {
    extend(CompanyItemView, superClass);

    function CompanyItemView() {
      return CompanyItemView.__super__.constructor.apply(this, arguments);
    }

    CompanyItemView.prototype.model = CompanyModel;

    CompanyItemView.prototype.className = 'company-item-list__container';

    CompanyItemView.prototype.autoRender = true;

    CompanyItemView.prototype.template = template;

    template = null;

    return CompanyItemView;

  })(BaseView);
});

//# sourceMappingURL=../../maps/views/company/company-item-list-view.js.map