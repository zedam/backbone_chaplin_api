var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['module', 'models/base/collection', 'models/company/company-model'], function(module, BaseCollection, CompanyModel) {
  'use strict';
  var CompanyCollection;
  return CompanyCollection = (function(superClass) {
    extend(CompanyCollection, superClass);

    function CompanyCollection() {
      return CompanyCollection.__super__.constructor.apply(this, arguments);
    }

    CompanyCollection.prototype.model = CompanyModel;

    CompanyCollection.prototype.url = 'company/';

    return CompanyCollection;

  })(BaseCollection);
});

//# sourceMappingURL=../../maps/models/company/company-collection.js.map