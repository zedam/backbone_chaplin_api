var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['handlebars', 'chaplin', 'lib/view-helper'], function(Handlebars, Chaplin) {
  'use strict';
  var View;
  return View = (function(superClass) {
    extend(View, superClass);

    function View(options) {
      if (options == null) {
        options = {};
      }
      this.afterRender = bind(this.afterRender, this);
      this.render = bind(this.render, this);
      this.beforeRender = bind(this.beforeRender, this);
      View.__super__.constructor.apply(this, arguments);
      this.render = _.wrap(this.render, (function(_this) {
        return function(render) {
          _this.beforeRender();
          render();
          _this.afterRender();
          return _this;
        };
      })(this));
    }

    View.prototype.beforeRender = function() {
      return this;
    };

    View.prototype.render = function() {
      return View.__super__.render.apply(this, arguments);
    };

    View.prototype.afterRender = function() {
      return this;
    };

    View.prototype.getTemplateFunction = function() {
      var template, templateFunc;
      template = this.template;
      if (typeof template === 'string') {
        templateFunc = Handlebars.compile(template);
        this.constructor.prototype.template = templateFunc;
      } else {
        templateFunc = template;
      }
      return templateFunc;
    };

    return View;

  })(Chaplin.View);
});

//# sourceMappingURL=../../maps/views/base/view.js.map