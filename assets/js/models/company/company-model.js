var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['models/base/model'], function(Model) {
  'use strict';
  var CompanyModel;
  return CompanyModel = (function(superClass) {
    extend(CompanyModel, superClass);

    function CompanyModel() {
      return CompanyModel.__super__.constructor.apply(this, arguments);
    }

    CompanyModel.prototype.defaults = {
      name: '',
      website: '',
      logo: '',
      logo_2x: ''
    };

    return CompanyModel;

  })(Model);
});

//# sourceMappingURL=../../maps/models/company/company-model.js.map