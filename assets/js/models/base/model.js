var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['chaplin'], function(Chaplin) {
  var Model;
  return Model = (function(superClass) {
    extend(Model, superClass);

    function Model() {
      return Model.__super__.constructor.apply(this, arguments);
    }

    Model.prototype.sync = function(method, collection, options) {
      options = options || {};
      options.beforeSend = function(xhr) {
        return xhr.setRequestHeader('Authorization', 'Token ' + 'fccb3a073f9e7e53e01838d4693d1302e5857cf3');
      };
      return Backbone.sync.call(this, method, collection, options);
    };

    return Model;

  })(Chaplin.Model);
});

//# sourceMappingURL=../../maps/models/base/model.js.map