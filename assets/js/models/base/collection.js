var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['chaplin', 'backbone', 'models/base/model'], function(Chaplin, Backbone, Model) {
  var Collection;
  return Collection = (function(superClass) {
    extend(Collection, superClass);

    function Collection() {
      return Collection.__super__.constructor.apply(this, arguments);
    }

    Collection.prototype.model = Model;

    Collection.prototype.parse = function(response) {
      return response.results;
    };

    Collection.prototype.sync = function(method, collection, options) {
      options = options || {};
      options.beforeSend = function(xhr) {
        this.url = API_ROOT_URL + this.url;
        return xhr.setRequestHeader('Authorization', 'Token ' + 'fccb3a073f9e7e53e01838d4693d1302e5857cf3');
      };
      return Backbone.sync.call(this, method, collection, options);
    };

    return Collection;

  })(Chaplin.Collection);
});

//# sourceMappingURL=../../maps/models/base/collection.js.map