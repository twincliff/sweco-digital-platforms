"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('sweco-bootstrap/app', ['exports', 'ember', 'sweco-bootstrap/resolver', 'ember-load-initializers', 'sweco-bootstrap/config/environment'], function (exports, _ember, _swecoBootstrapResolver, _emberLoadInitializers, _swecoBootstrapConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _swecoBootstrapConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _swecoBootstrapConfigEnvironment['default'].podModulePrefix,
    Resolver: _swecoBootstrapResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _swecoBootstrapConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('sweco-bootstrap/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'sweco-bootstrap/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _swecoBootstrapConfigEnvironment) {

  var name = _swecoBootstrapConfigEnvironment['default'].APP.name;
  var version = _swecoBootstrapConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('sweco-bootstrap/components/bootstrap-modal', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		tagName: 'div',
		classNames: ['modal fade'],

		closeBtnText: 'Cancel',
		sendBtnText: 'Send',

		actions: {
			send: function send() {
				this.sendAction();
			},

			close: function close() {
				this.set('sending', false);
			}
		}
	});
});
define("sweco-bootstrap/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define("sweco-bootstrap/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("sweco-bootstrap/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("sweco-bootstrap/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("sweco-bootstrap/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("sweco-bootstrap/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("sweco-bootstrap/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("sweco-bootstrap/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('sweco-bootstrap/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("sweco-bootstrap/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("sweco-bootstrap/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define('sweco-bootstrap/components/progress-js', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['progressjs-navbar'],

    loadingStateChanged: _ember['default'].observer('isLoading', function () {
      if (this.get('isLoading')) {
        progressJs('.progressjs-container').start();
        progressJs('.progressjs-container').autoIncrease(1, 500);
      } else {
        progressJs('.progressjs-container').end();
      }
    })
  });
});
define('sweco-bootstrap/components/sweco-formgroup', ['exports', 'ember', 'sweco-bootstrap/mixins/form-validator'], function (exports, _ember, _swecoBootstrapMixinsFormValidator) {
  exports['default'] = _ember['default'].Component.extend(_swecoBootstrapMixinsFormValidator['default'], {

    classNames: ['form-group'],
    classNameBindings: ['isInputFilled:input-filled'],
    isInputFilled: false,
    inputId: (function () {
      return this.get('elementId') + "_input";
    }).property('elementId'),

    hasNoValue: _ember['default'].computed.empty('model'),

    setup: (function () {
      if (!_ember['default'].isEmpty(this.get('model'))) {
        this.setClass();
      }
    }).observes('model').on('init'),

    actions: {
      setClass: function setClass() {
        this.setClass();
      },
      removeClass: function removeClass() {
        this.removeClass();
      }
    },

    setClass: function setClass() {
      this.set('isInputFilled', true);
    },

    removeClass: function removeClass() {
      if (this.get('hasNoValue')) {
        this.set('isInputFilled', false);
      }
    }

  });
});
define('sweco-bootstrap/components/sweco-input', ['exports', 'ember', 'sweco-bootstrap/components/sweco-formgroup'], function (exports, _ember, _swecoBootstrapComponentsSwecoFormgroup) {
  exports['default'] = _swecoBootstrapComponentsSwecoFormgroup['default'].extend({
    classNameBindings: ['submitErrors.model.firstObject:input-error'],
    customClass: 'form-control',
    enabled: true,
    disabled: _ember['default'].computed.not('enabled'),

    validations: {
      model: {
        presence: true
      }
    },

    click: function click() {
      if (this.get('type') === 'radio') {
        if (this.get('checked')) {
          this.sendAction('checked', this.get('model'));
        }
      }
    }
  });
});
define('sweco-bootstrap/components/sweco-label', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		tagName: 'label',
		attributeBindings: ['for'],
		classNames: 'control-label',

		'for': _ember['default'].computed.alias('inputId'),

		click: function click() {
			this.sendAction();
		}
	});
});
define('sweco-bootstrap/components/sweco-search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    customClass: 'form-control',

    actions: {
      search: function search() {
        var value = this.get('value');
        this.sendAction('search', value);
      },

      clear: function clear() {
        this.set('value', '');
        this.sendAction('clear');
      }
    }
  });
});
define('sweco-bootstrap/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    init: function init() {
      this._super();

      $.browserDetection({
        addClasses: true
      });
    }

  });
});
define('sweco-bootstrap/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    actions: {

      frontPage: function frontPage() {
        $('.front-page').fadeOut(200);
        window.scrollTo(0, 0);
        $('body').removeClass('body-front-page');
        $('.search').fadeIn(200);
        $('.navbar-south').removeClass('in');
      },

      start: function start() {
        $('.front-page').fadeIn(200);
        window.scrollTo(0, 0);
        $('body').addClass('body-front-page');
        $('.search').fadeOut(200);
        $('.navbar-south').addClass('in');
      },

      openModal: function openModal() {
        this.set('isModalVisible', true);
      },

      closeModal: function closeModal() {
        this.set('isModalVisible', false);
      }

    }

  });
});
define('sweco-bootstrap/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('sweco-bootstrap/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('sweco-bootstrap/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sweco-bootstrap/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _swecoBootstrapConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_swecoBootstrapConfigEnvironment['default'].APP.name, _swecoBootstrapConfigEnvironment['default'].APP.version)
  };
});
define('sweco-bootstrap/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('sweco-bootstrap/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('sweco-bootstrap/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('sweco-bootstrap/initializers/export-application-global', ['exports', 'ember', 'sweco-bootstrap/config/environment'], function (exports, _ember, _swecoBootstrapConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_swecoBootstrapConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _swecoBootstrapConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_swecoBootstrapConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('sweco-bootstrap/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("sweco-bootstrap/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {
  (0, _liquidFireEmberInternals.registerKeywords)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('sweco-bootstrap/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('sweco-bootstrap/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("sweco-bootstrap/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('sweco-bootstrap/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('sweco-bootstrap/router', ['exports', 'ember', 'sweco-bootstrap/config/environment'], function (exports, _ember, _swecoBootstrapConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _swecoBootstrapConfigEnvironment['default'].locationType,
    rootURL: _swecoBootstrapConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/' });
  });

  exports['default'] = Router;
});
define('sweco-bootstrap/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("sweco-bootstrap/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define("sweco-bootstrap/templates/components/bootstrap-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.1",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "sweco-bootstrap/templates/components/bootstrap-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "fa fa-circle-o-notch fa-spin");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 6
          }
        },
        "moduleName": "sweco-bootstrap/templates/components/bootstrap-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal-dialog");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "close");
        dom.setAttribute(el4, "data-dismiss", "modal");
        dom.setAttribute(el4, "aria-label", "Close");
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "aria-hidden", "true");
        var el6 = dom.createTextNode("×");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        dom.setAttribute(el4, "class", "modal-title");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-body");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-footer");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-default");
        dom.setAttribute(el4, "data-dismiss", "modal");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element0, [5]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var morphs = new Array(9);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[3] = dom.createElementMorph(element4);
        morphs[4] = dom.createMorphAt(element4, 0, 0);
        morphs[5] = dom.createAttrMorph(element5, 'class');
        morphs[6] = dom.createElementMorph(element5);
        morphs[7] = dom.createMorphAt(element5, 1, 1);
        morphs[8] = dom.createMorphAt(element5, 3, 3);
        return morphs;
      },
      statements: [["element", "action", ["close"], [], ["loc", [null, [4, 82], [4, 100]]], 0, 0], ["content", "title", ["loc", [null, [5, 30], [5, 39]]], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [8, 6], [8, 15]]], 0, 0, 0, 0], ["element", "action", ["close"], [], ["loc", [null, [11, 73], [11, 91]]], 0, 0], ["content", "closeBtnText", ["loc", [null, [11, 92], [11, 108]]], 0, 0, 0, 0], ["attribute", "class", ["concat", ["btn btn-info ", ["subexpr", "if", [["get", "sending", ["loc", [null, [12, 53], [12, 60]]], 0, 0, 0, 0], "disabled"], [], ["loc", [null, [12, 48], [12, 73]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["send"], [], ["loc", [null, [12, 75], [12, 92]]], 0, 0], ["content", "sendBtnText", ["loc", [null, [13, 8], [13, 23]]], 0, 0, 0, 0], ["block", "if", [["get", "sending", ["loc", [null, [14, 14], [14, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 8], [16, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("sweco-bootstrap/templates/components/progress-js", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 40
          }
        },
        "moduleName": "sweco-bootstrap/templates/components/progress-js.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "progressjs-container");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("sweco-bootstrap/templates/components/sweco-help", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "sweco-bootstrap/templates/components/sweco-help.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "target", "_blank");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "helpUrl", ["loc", [null, [3, 15], [3, 22]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "help", ["loc", [null, [3, 42], [3, 50]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 2
            }
          },
          "moduleName": "sweco-bootstrap/templates/components/sweco-help.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "help", ["loc", [null, [5, 4], [5, 12]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "sweco-bootstrap/templates/components/sweco-help.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "help-block");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "helpUrl", ["loc", [null, [2, 8], [2, 15]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 2], [6, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("sweco-bootstrap/templates/components/sweco-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 2
          }
        },
        "moduleName": "sweco-bootstrap/templates/components/sweco-input.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "sweco-label", [], ["inputId", ["subexpr", "@mut", [["get", "inputId", ["loc", [null, [2, 12], [2, 19]]], 0, 0, 0, 0]], [], [], 0, 0], "label", ["subexpr", "@mut", [["get", "label", ["loc", [null, [3, 10], [3, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "icon", ["subexpr", "@mut", [["get", "icon", ["loc", [null, [4, 9], [4, 13]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 0], [5, 2]]], 0, 0], ["inline", "input", [], ["id", ["subexpr", "@mut", [["get", "inputId", ["loc", [null, [7, 7], [7, 14]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "model", ["loc", [null, [8, 10], [8, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "type", ["loc", [null, [9, 9], [9, 13]]], 0, 0, 0, 0]], [], [], 0, 0], "class", ["subexpr", "@mut", [["get", "customClass", ["loc", [null, [10, 10], [10, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [11, 13], [11, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "focus-out", "removeClass", "focus-in", "setClass", "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [14, 9], [14, 13]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [15, 13], [15, 21]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 0], [16, 2]]], 0, 0], ["inline", "sweco-help", [], ["helpUrl", ["subexpr", "@mut", [["get", "helpUrl", ["loc", [null, [18, 12], [18, 19]]], 0, 0, 0, 0]], [], [], 0, 0], "help", ["subexpr", "@mut", [["get", "help", ["loc", [null, [19, 9], [19, 13]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 0], [20, 2]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("sweco-bootstrap/templates/components/sweco-label", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 36
            },
            "end": {
              "line": 1,
              "column": 72
            }
          },
          "moduleName": "sweco-bootstrap/templates/components/sweco-label.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "icon", ["loc", [null, [1, 60], [1, 64]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 95
          }
        },
        "moduleName": "sweco-bootstrap/templates/components/sweco-label.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "control-label-content");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element1, 0, 0);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 42], [1, 46]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 36], [1, 79]]]], ["content", "label", ["loc", [null, [1, 79], [1, 88]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("sweco-bootstrap/templates/components/sweco-search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.1",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 2
            },
            "end": {
              "line": 21,
              "column": 2
            }
          },
          "moduleName": "sweco-bootstrap/templates/components/sweco-search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "close btn-search-reset");
          dom.setAttribute(el1, "aria-hidden", "true");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-times-circle");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["clear"], [], ["loc", [null, [20, 75], [20, 93]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 6
          }
        },
        "moduleName": "sweco-bootstrap/templates/components/sweco-search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "search");
        dom.setAttribute(el1, "class", "search");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "input-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "input-group-btn");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-search");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "tabindex", "2");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "fa fa-search");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" RESET START ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" RESET STOP ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [3, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(element1, 5, 5);
        return morphs;
      },
      statements: [["inline", "input", [], ["id", "searchInput", "name", "searchInput", "type", "text", "class", ["subexpr", "@mut", [["get", "customClass", ["loc", [null, [7, 12], [7, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [8, 12], [8, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "enter", "search", "autocomplete", "false", "tabindex", "1", "placeholder", "Test placeholder for search"], ["loc", [null, [3, 4], [13, 6]]], 0, 0], ["element", "action", ["search"], [], ["loc", [null, [15, 64], [15, 83]]], 0, 0], ["block", "if", [["get", "value", ["loc", [null, [19, 8], [19, 13]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [19, 2], [21, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("sweco-bootstrap/templates/index",["exports"],function(exports){exports["default"] = Ember.HTMLBars.template((function(){var child0=(function(){return {meta:{"revision":"Ember@2.8.1","loc":{"source":null,"start":{"line":31,"column":4},"end":{"line":33,"column":4}},"moduleName":"sweco-bootstrap/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("      ");dom.appendChild(el0,el1);var el1=dom.createComment("");dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment,contextualElement){var morphs=new Array(1);morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);return morphs;},statements:[["inline","component",[["get","modal.name",["loc",[null,[32,18],[32,28]]],0,0,0,0]],["on-cancel",["subexpr","action",["closeModal"],[],["loc",[null,[32,39],[32,60]]],0,0],"content",["subexpr","@mut",[["get","modal",["loc",[null,[32,69],[32,74]]],0,0,0,0]],[],[],0,0]],["loc",[null,[32,6],[32,76]]],0,0]],locals:[],templates:[]};})();return {meta:{"revision":"Ember@2.8.1","loc":{"source":null,"start":{"line":1,"column":0},"end":{"line":1296,"column":18}},"moduleName":"sweco-bootstrap/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createComment(" PAGE START ");dom.appendChild(el0,el1);var el1=dom.createTextNode("\n  ");dom.appendChild(el0,el1);var el1=dom.createElement("div");dom.setAttribute(el1,"id","page");var el2=dom.createTextNode("\n\n");dom.appendChild(el1,el2);var el2=dom.createComment(" NAVBAR NORTH START ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createComment("");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n");dom.appendChild(el1,el2);var el2=dom.createComment(" NAVBAR NORTH STOP ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n\n");dom.appendChild(el1,el2);var el2=dom.createComment(" FRONT PAGE START ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createElement("div");dom.setAttribute(el2,"class","front-page fade in");var el3=dom.createTextNode("\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","hero");var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","container");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","row");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","col-xs-10 offset-xs-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","jumbo");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("h1");var el9=dom.createTextNode("Sweco Digital Guidelines");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("p");dom.setAttribute(el8,"class","lead");var el9=dom.createTextNode("Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"class","btn btn-info btn-front-page");var el9=dom.createTextNode("Sweco Digital Guidelines");dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-right fa-angle-right");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n    ");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n");dom.appendChild(el1,el2);var el2=dom.createComment(" FRONT PAGE STOP ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n\n");dom.appendChild(el1,el2);var el2=dom.createComment(" NAVBAR SOUTH START ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createComment("");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n");dom.appendChild(el1,el2);var el2=dom.createComment(" NAVBAR SOUTH STOP ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n\n");dom.appendChild(el1,el2);var el2=dom.createComment(" MODAL START ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n");dom.appendChild(el1,el2);var el2=dom.createComment("");dom.appendChild(el1,el2);var el2=dom.createComment(" MODAL STOP ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n\n");dom.appendChild(el1,el2);var el2=dom.createComment(" OUTLET START ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createComment("");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n");dom.appendChild(el1,el2);var el2=dom.createComment(" OUTLET STOP ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n\n");dom.appendChild(el1,el2);var el2=dom.createComment(" CONTENT START ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createElement("section");dom.setAttribute(el2,"class","container");dom.setAttribute(el2,"id","content");var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well m-t-2");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" JUBOTRONE START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","jumbotron m-y-1");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("h1");dom.setAttribute(el5,"class","display-3");var el6=dom.createTextNode("Sweco digital guidelines");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("p");dom.setAttribute(el5,"class","lead");var el6=dom.createTextNode("Sweco digital guidelines is built on ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"href","http://v4-alpha.getbootstrap.com/");dom.setAttribute(el6,"target","_blank");var el7=dom.createTextNode("Bootstrap 4");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode(" the world’s most popular framework for building responsive, mobile-first sites and applications. Sweco digital guidelines contains layout options for structuring a Sweco application with Bootstrap 4, including global styles, required scaffolding, grid system. Containing styles for displaying content and HTML ");dom.appendChild(el5,el6);var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-html5");dom.appendChild(el5,el6);var el6=dom.createTextNode(" elements, including normalization, typography, tables, and more. Over a dozen components built to provide buttons, dropdowns, input groups, navigation and much more.");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" JUBOTRONE STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" INTRODUCTION START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","colors");var el5=dom.createTextNode("Introduction");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Quick start");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("Sweco digital guidelines can come in one of two forms, as precompiled or source code. Looking to quickly add Sweco digital guidelines to your project? ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#download");var el8=dom.createTextNode("Download precompiled code");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(". For more advanced usage ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#download-source");var el8=dom.createTextNode("download source code, clone or fork");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(". To be sure to have your pages set up with the latest design and development standards use the ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#starter-template");var el8=dom.createTextNode("starter template");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(".");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Sweco digital guidelines without Bootstrap");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("Part of Sweco digital guidelines job is to provide an elegant, consistent, and simple Sweco styles baseline to build upon. You can use Sweco digital guidelines without Bootstrap HTML, classes and scripts. We use a collection of element-specific CSS changes to kickstart that. ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","http://v4-alpha.getbootstrap.com/content/reboot/#content");dom.setAttribute(el7,"target","_blank");var el8=dom.createTextNode("Read more about Reboot");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(".");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n         ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" INTRODUCTION STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" LOGOTYPE START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","logotype");var el5=dom.createTextNode("Sweco logotype");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("p");var el5=dom.createTextNode("The Sweco logotype is included in the css ");dom.appendChild(el4,el5);var el5=dom.createElement("code");var el6=dom.createTextNode(".logotype");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode(" and black ");dom.appendChild(el4,el5);var el5=dom.createElement("code");var el6=dom.createTextNode(".logotype-black");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode(". Sizes included ");dom.appendChild(el4,el5);var el5=dom.createElement("code");var el6=dom.createTextNode(".logotype-md");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode(" and ");dom.appendChild(el4,el5);var el5=dom.createElement("code");var el6=dom.createTextNode(".logotype-lg");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode(". SVG:s is also included in package.");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","logotype pink-dark m-y-1");dom.setAttribute(el6,"role","banner");var el7=dom.createTextNode("SWECO");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","logotype logotype-md pink-dark m-y-1");dom.setAttribute(el6,"role","banner");var el7=dom.createTextNode("SWECO");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","logotype logotype-lg pink-dark m-y-1");dom.setAttribute(el6,"role","banner");var el7=dom.createTextNode("SWECO");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","logotype logotype-black light-gray m-y-1");dom.setAttribute(el6,"role","banner");var el7=dom.createTextNode("SWECO");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","logotype logotype-black logotype-md light-gray m-y-1");dom.setAttribute(el6,"role","banner");var el7=dom.createTextNode("SWECO");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","logotype logotype-black logotype-lg light-gray m-y-1");dom.setAttribute(el6,"role","banner");var el7=dom.createTextNode("SWECO");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n");dom.appendChild(el3,el4);var el4=dom.createComment(" LOGOTYPE STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" COLORS START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","colors");var el5=dom.createTextNode("Sweco brand colors");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","colors");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("p");var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-star");dom.appendChild(el5,el6);var el6=dom.createTextNode(" Brand colors");dom.appendChild(el5,el6);var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-font m-l-1");dom.appendChild(el5,el6);var el6=dom.createTextNode(" Text color. If text color add ");dom.appendChild(el5,el6);var el6=dom.createElement("code");var el7=dom.createTextNode("-color");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode(" to class ");dom.appendChild(el5,el6);var el6=dom.createElement("code");var el7=dom.createTextNode(".colorname-color");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode(".");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","row");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","col-lg-3");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","color-black");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","color");var el9=dom.createTextNode(".black");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","ich");var el9=dom.createTextNode(".black-ich");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","light");var el9=dom.createTextNode(".black-light (Text)");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#3a3a3a");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-font");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","lighter");var el9=dom.createTextNode(".black-lighter");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","ultralight");var el9=dom.createTextNode(".black-ultralight");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","superlight");var el9=dom.createTextNode(".black-superlight");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","col-lg-3");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","color-dark-gray");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","color");var el9=dom.createTextNode(".dark-gray");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#4d535a");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-star");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","ich");var el9=dom.createTextNode(".dark-gray-ich");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","light");var el9=dom.createTextNode(".dark-gray-light");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","lighter");var el9=dom.createTextNode(".dark-gray-lighter");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","ultralight");var el9=dom.createTextNode(".dark-gray-ultralight");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","superlight");var el9=dom.createTextNode(".dark-gray-superlight");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","col-lg-3");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","color-gray");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","color");var el9=dom.createTextNode(".gray");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#a5a5a8");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-star");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","ich");var el9=dom.createTextNode(".gray-ich");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","light");var el9=dom.createTextNode(".gray-light");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","lighter");var el9=dom.createTextNode(".gray-lighter");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","ultralight");var el9=dom.createTextNode(".gray-ultralight");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","superlight");var el9=dom.createTextNode(".gray-superlight");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","col-lg-3");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","color-light-gray");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","color");var el9=dom.createTextNode(".light-gray");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#e2e0da");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-star");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","ich");var el9=dom.createTextNode(".light-gray-ich");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","light");var el9=dom.createTextNode(".light-gray-light");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","lighter");var el9=dom.createTextNode(".light-gray-lighter");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","ultralight");var el9=dom.createTextNode(".light-gray-ultralight");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","superlight");var el9=dom.createTextNode(".light-gray-superlight");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","row");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","col-md-4");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","color-ochre");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","dark");var el9=dom.createTextNode(".ochre-dark");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#a4852f");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-star");dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-font");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","color");var el9=dom.createTextNode(".ochre");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#dec55b");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-star");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","col-md-4");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","color-pink");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","dark");var el9=dom.createTextNode(".pink-dark");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#b586a4");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-star");dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-font");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","color");var el9=dom.createTextNode(".pink");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#f2b1dc");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-star");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","col-md-4");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","color-blue");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","dark");var el9=dom.createTextNode(".blue-dark");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#7e8dbb");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-star");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","color");var el9=dom.createTextNode(".blue");dom.appendChild(el8,el9);var el9=dom.createElement("code");var el10=dom.createTextNode("#8aa3b9");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-star");dom.appendChild(el8,el9);var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-font");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" COLORS STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" TYPOGRAPHY START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","typography");var el5=dom.createTextNode("Typography");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h1");var el7=dom.createTextNode("h1. Heading");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h2");var el7=dom.createTextNode("h2. Heading");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h3");var el7=dom.createTextNode("h3. Heading");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("h4. Heading");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("h5. Heading");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h6");var el7=dom.createTextNode("h6. Heading");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");dom.setAttribute(el6,"class","lead");var el7=dom.createTextNode("This is lead paragraph, sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("The standared paragraph, raw denim you probably haven't heard of them jean shorts Austin. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Cardigan american.");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","line-height-computed");var el7=dom.createTextNode("Line Height Computed");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createElement("span");dom.setAttribute(el7,"class","font-size-sm");var el8=dom.createTextNode("Font-size-sm");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" Font-size-base ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","font-size-lg");var el8=dom.createTextNode("Font-size-lg");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","font-size-xl");var el8=dom.createTextNode("Font-size-xl");dom.appendChild(el7,el8);dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h1");dom.setAttribute(el6,"class","display-1");var el7=dom.createTextNode("Display 1");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h1");dom.setAttribute(el6,"class","display-2");var el7=dom.createTextNode("Display 2");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h1");dom.setAttribute(el6,"class","display-3");var el7=dom.createTextNode("Display 3");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h1");dom.setAttribute(el6,"class","display-4");var el7=dom.createTextNode("Display 4");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h2");var el7=dom.createTextNode("Lists");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("hr");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("ul");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("UL integer molestie lorem at massa");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("Nulla volutpat aliquam velit\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("ul");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("li");var el10=dom.createTextNode("Phasellus iaculis neque");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("li");var el10=dom.createTextNode("Purus sodales ultricies");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("Faucibus porta lacus fringilla vel\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("ul");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("li");var el10=dom.createTextNode("Phasellus iaculis neque");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("li");var el10=dom.createTextNode("Purus sodales ultricies");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("Aenean sit amet erat nunc");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("ol");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("OL integer molestie lorem at massa");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("Nulla volutpat aliquam velit\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("ul");dom.setAttribute(el8,"class","list-unstyled");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("li");var el10=dom.createTextNode("Ul list unstyled");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("li");var el10=dom.createTextNode("Purus sodales ultricies");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("Faucibus porta lacus fringilla vel");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("Aenean sit amet erat nunc");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("dl");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("dt");var el8=dom.createTextNode("Description lists");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("dd");var el8=dom.createTextNode("A description list is perfect for defining terms.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("dt");var el8=dom.createTextNode("Euismod");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("dd");var el8=dom.createTextNode("Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("dd");var el8=dom.createTextNode("Donec id elit non mi porta gravida at eget metus.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("dt");var el8=dom.createTextNode("Malesuada porta");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("dd");var el8=dom.createTextNode("Etiam porta sem malesuada magna mollis euismod.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h2");var el7=dom.createTextNode("Inline text elements");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("hr");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("ul");dom.setAttribute(el6,"class","list-unstyled");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("This line has ");dom.appendChild(el7,el8);var el8=dom.createElement("a");dom.setAttribute(el8,"href","#");var el9=dom.createTextNode("inline link");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode(", how a default link is displayed.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("You can use the mark tag to ");dom.appendChild(el7,el8);var el8=dom.createElement("mark");var el9=dom.createTextNode("highlight");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode(" text.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("This is ");dom.appendChild(el7,el8);var el8=dom.createElement("small");dom.setAttribute(el8,"class","text-muted");var el9=dom.createTextNode("muted text");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode(".");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("del");var el9=dom.createTextNode("This line of text is meant to be treated as deleted text.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("s");var el9=dom.createTextNode("This line of text is meant to be treated as no longer accurate.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("ins");var el9=dom.createTextNode("This line of text is meant to be treated as an addition to the document.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("u");var el9=dom.createTextNode("This line of text will render as underlined");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("small");var el9=dom.createTextNode("This line of text is meant to be treated as fine print.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("strong");var el9=dom.createTextNode("This line rendered as bold text.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("em");var el9=dom.createTextNode("This line rendered as italicized text.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("This is ");dom.appendChild(el7,el8);var el8=dom.createElement("abbr");dom.setAttribute(el8,"title","attribute");var el9=dom.createTextNode("attr");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode(".");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("This is abbreviations ");dom.appendChild(el7,el8);var el8=dom.createElement("abbr");dom.setAttribute(el8,"title","HyperText Markup Language");dom.setAttribute(el8,"class","initialism");var el9=dom.createTextNode("HTML");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("Variables ");dom.appendChild(el7,el8);var el8=dom.createElement("var");var el9=dom.createTextNode("y");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode(" = ");dom.appendChild(el7,el8);var el8=dom.createElement("var");var el9=dom.createTextNode("m");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createElement("var");var el9=dom.createTextNode("x");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode(" + ");dom.appendChild(el7,el8);var el8=dom.createElement("var");var el9=dom.createTextNode("b");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("User inputs looks like this ");dom.appendChild(el7,el8);var el8=dom.createElement("kbd");var el9=dom.createElement("kbd");var el10=dom.createTextNode("ctrl");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode(" + ");dom.appendChild(el8,el9);var el9=dom.createElement("kbd");var el10=dom.createTextNode(",");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("The ");dom.appendChild(el7,el8);var el8=dom.createElement("code");var el9=dom.createTextNode("<code>");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode(" element.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("pre");var el9=dom.createElement("code");var el10=dom.createTextNode("<p>This is how code blocks is displayed</p>");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("blockquote");dom.setAttribute(el6,"class","blockquote");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");dom.setAttribute(el7,"class","m-b-0");var el8=dom.createTextNode("Blockquote lorem ipsum dolor sit amet.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("footer");dom.setAttribute(el7,"class","blockquote-footer");var el8=dom.createTextNode("Someone famous in ");dom.appendChild(el7,el8);var el8=dom.createElement("cite");dom.setAttribute(el8,"title","Source Title");var el9=dom.createTextNode("Source Title");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("blockquote");dom.setAttribute(el6,"class","blockquote blockquote-reverse");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");dom.setAttribute(el7,"class","m-b-0");var el8=dom.createTextNode("Blockquote-reverse consectetur adipiscing elit.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("footer");dom.setAttribute(el7,"class","blockquote-footer");var el8=dom.createTextNode("Someone famous in ");dom.appendChild(el7,el8);var el8=dom.createElement("cite");dom.setAttribute(el8,"title","Source Title");var el9=dom.createTextNode("Source Title");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" TYPOGRAPHY STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" TABLES START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","tables");var el5=dom.createTextNode("Tables");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","table-responsive");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("table");dom.setAttribute(el5,"class","table table-bordered table-striped table-hover");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("thead");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("tr");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("th");var el9=dom.createTextNode("#");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("th");var el9=dom.createTextNode("First Name");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("th");var el9=dom.createTextNode("Last Name");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("th");var el9=dom.createTextNode("Username");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("tbody");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("tr");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("th");dom.setAttribute(el8,"scope","row");var el9=dom.createTextNode("1");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("td");var el9=dom.createTextNode("Column content");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("td");var el9=dom.createTextNode("Column content");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("td");var el9=dom.createTextNode("Column content");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("tr");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("th");dom.setAttribute(el8,"scope","row");var el9=dom.createTextNode("2");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("td");var el9=dom.createTextNode("Column content");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("td");var el9=dom.createTextNode("Column content");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("td");var el9=dom.createTextNode("Column content");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("tr");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("th");dom.setAttribute(el8,"scope","row");var el9=dom.createTextNode("3");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("td");var el9=dom.createTextNode("Column content");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("td");var el9=dom.createTextNode("Column content");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("td");var el9=dom.createTextNode("Column content");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" TABLES STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" FORMS START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","forms");var el5=dom.createTextNode("Forms");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("p");var el5=dom.createTextNode("Remember, all inputs must have a ");dom.appendChild(el4,el5);var el5=dom.createElement("code");var el6=dom.createTextNode("type");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode(" attribute and class ");dom.appendChild(el4,el5);var el5=dom.createElement("code");var el6=dom.createTextNode("form-control");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode(".");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-lg-6");var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" INPUT TYPES START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("form");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("fieldset");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("h4");var el9=dom.createTextNode("Input");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-text-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Text");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","text");dom.setAttribute(el10,"placeholder","The placeholder");dom.setAttribute(el10,"value","");dom.setAttribute(el10,"id","example-text-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-search-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Search");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","search");dom.setAttribute(el10,"placeholder","The placeholder");dom.setAttribute(el10,"value","");dom.setAttribute(el10,"id","example-search-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-email-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Email");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","email");dom.setAttribute(el10,"value","test@example.com");dom.setAttribute(el10,"id","example-email-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-url-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("URL");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","url");dom.setAttribute(el10,"value","https://www.w3.org");dom.setAttribute(el10,"id","example-url-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-tel-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Telephone");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","tel");dom.setAttribute(el10,"value","1-(555)-555-5555");dom.setAttribute(el10,"id","example-tel-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-password-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Password");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","password");dom.setAttribute(el10,"value","hunter2");dom.setAttribute(el10,"id","example-password-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-number-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Number");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","number");dom.setAttribute(el10,"value","42");dom.setAttribute(el10,"id","example-number-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-datetime-local-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Date and time");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","datetime-local");dom.setAttribute(el10,"value","2016-08-19T13:45:00");dom.setAttribute(el10,"id","example-datetime-local-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-date-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Date");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","date");dom.setAttribute(el10,"value","2016-08-19");dom.setAttribute(el10,"id","example-date-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-month-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Month");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","month");dom.setAttribute(el10,"value","2016-08");dom.setAttribute(el10,"id","example-month-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-week-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Week");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","week");dom.setAttribute(el10,"value","2016-W33");dom.setAttribute(el10,"id","example-week-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","example-time-input");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Time");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"type","time");dom.setAttribute(el10,"value","13:45:00");dom.setAttribute(el10,"id","example-time-input");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","textArea");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Textarea");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("textarea");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"rows","3");dom.setAttribute(el10,"id","textArea");dom.setAttribute(el10,"placeholder","The placeholder");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","exampleSelect1");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Select");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("select");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"id","exampleSelect1");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("1");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("2");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("3");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("4");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("5");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","exampleSelect2");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Multiple select");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("select");dom.setAttribute(el10,"multiple","");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"id","exampleSelect2");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("1");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("2");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("3");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("4");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("5");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("File browser");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("label");dom.setAttribute(el10,"class","custom-file");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("input");dom.setAttribute(el11,"type","file");dom.setAttribute(el11,"id","file");dom.setAttribute(el11,"class","custom-file-input");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("span");dom.setAttribute(el11,"class","custom-file-control");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Checkbox");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","check");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("input");dom.setAttribute(el11,"type","checkbox");dom.setAttribute(el11,"id","check1");dom.setAttribute(el11,"value","option1");dom.setAttribute(el11,"checked","");dom.appendChild(el10,el11);var el11=dom.createElement("label");dom.setAttribute(el11,"for","check1");var el12=dom.createTextNode("Checkbox one");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","check");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("input");dom.setAttribute(el11,"type","checkbox");dom.setAttribute(el11,"id","check2");dom.setAttribute(el11,"value","option2");dom.appendChild(el10,el11);var el11=dom.createElement("label");dom.setAttribute(el11,"for","check2");var el12=dom.createTextNode("Checkbox two");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","check");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("input");dom.setAttribute(el11,"type","checkbox");dom.setAttribute(el11,"id","blankCheckbox");dom.setAttribute(el11,"value","option3");dom.setAttribute(el11,"aria-label","...");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("label");dom.setAttribute(el11,"for","blankCheckbox");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","check disabled");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("input");dom.setAttribute(el11,"type","checkbox");dom.setAttribute(el11,"id","check4");dom.setAttribute(el11,"value","option4");dom.setAttribute(el11,"disabled","");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("label");dom.setAttribute(el11,"for","check4");var el12=dom.createTextNode("Checkbox disabled");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Radio");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","radio");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("input");dom.setAttribute(el11,"type","radio");dom.setAttribute(el11,"name","exampleRadios");dom.setAttribute(el11,"id","exampleRadios1");dom.setAttribute(el11,"value","option1");dom.setAttribute(el11,"checked","");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("label");dom.setAttribute(el11,"for","exampleRadios1");var el12=dom.createTextNode("Radio one");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","radio");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("input");dom.setAttribute(el11,"type","radio");dom.setAttribute(el11,"name","exampleRadios");dom.setAttribute(el11,"id","exampleRadios2");dom.setAttribute(el11,"value","option2");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("label");dom.setAttribute(el11,"for","exampleRadios2");var el12=dom.createTextNode("Radio two");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","radio");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("input");dom.setAttribute(el11,"type","radio");dom.setAttribute(el11,"name","exampleRadios");dom.setAttribute(el11,"id","exampleRadios3");dom.setAttribute(el11,"value","option3");dom.setAttribute(el11,"aria-label","...");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("label");dom.setAttribute(el11,"for","exampleRadios3");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","radio disabled");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("input");dom.setAttribute(el11,"type","radio");dom.setAttribute(el11,"name","exampleRadios");dom.setAttribute(el11,"id","exampleRadios4");dom.setAttribute(el11,"value","option4");dom.setAttribute(el11,"disabled","");dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("label");dom.setAttribute(el11,"for","exampleRadios4");var el12=dom.createTextNode("Radio disabled");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","readonlyTextInput");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Readonly input");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"id","readonlyTextInput");dom.setAttribute(el10,"type","text");dom.setAttribute(el10,"placeholder","Readonly input");dom.setAttribute(el10,"readonly","");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","disabledTextInput");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Disabled input");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"type","text");dom.setAttribute(el10,"id","disabledTextInput");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"placeholder","Disabled input");dom.setAttribute(el10,"disabled","");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group row");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"for","disabledSelect");dom.setAttribute(el9,"class","col-xs-4 col-form-label text-xs-right");var el10=dom.createTextNode("Disabled select");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","col-xs-8");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("select");dom.setAttribute(el10,"id","disabledSelect");dom.setAttribute(el10,"class","form-control");dom.setAttribute(el10,"disabled","");var el11=dom.createTextNode("\n                      ");dom.appendChild(el10,el11);var el11=dom.createElement("option");var el12=dom.createTextNode("Disabled select");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","text-xs-right");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("button");dom.setAttribute(el9,"type","button");dom.setAttribute(el9,"class","btn btn-secondary");var el10=dom.createTextNode("Cancel");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("button");dom.setAttribute(el9,"type","submit");dom.setAttribute(el9,"class","btn btn-info");var el10=dom.createTextNode("Submit");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" INPUT TYPES STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-lg-6");var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" INPUT GROUP START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("form");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("fieldset");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("h4");var el9=dom.createTextNode("Input-group, sizes and addons");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group input-group input-group-lg");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("span");dom.setAttribute(el9,"class","input-group-addon");var el10=dom.createElement("i");dom.setAttribute(el10,"class","fa fa-group");dom.setAttribute(el10,"aria-hidden","true");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("input");dom.setAttribute(el9,"class","form-control form-control-lg");dom.setAttribute(el9,"type","text");dom.setAttribute(el9,"placeholder","Large input.form-control-lg");dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("span");dom.setAttribute(el9,"class","input-group-btn");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("button");dom.setAttribute(el10,"class","btn btn-info");dom.setAttribute(el10,"type","button");var el11=dom.createTextNode("Love it");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group input-group");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("span");dom.setAttribute(el9,"class","input-group-addon");var el10=dom.createElement("i");dom.setAttribute(el10,"class","fa fa-user");dom.setAttribute(el10,"aria-hidden","true");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("input");dom.setAttribute(el9,"class","form-control");dom.setAttribute(el9,"type","text");dom.setAttribute(el9,"placeholder","Default input .form-control");dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("span");dom.setAttribute(el9,"class","input-group-btn");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("button");dom.setAttribute(el10,"class","btn btn-info");dom.setAttribute(el10,"type","button");var el11=dom.createTextNode("Love it");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group input-group input-group-sm");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("span");dom.setAttribute(el9,"class","input-group-addon");var el10=dom.createElement("i");dom.setAttribute(el10,"class","fa fa-calendar");dom.setAttribute(el10,"aria-hidden","true");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("input");dom.setAttribute(el9,"class","form-control form-control-sm");dom.setAttribute(el9,"type","text");dom.setAttribute(el9,"placeholder","Small input .form-control-sm");dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("span");dom.setAttribute(el9,"class","input-group-btn");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("button");dom.setAttribute(el10,"class","btn btn-info");dom.setAttribute(el10,"type","button");var el11=dom.createTextNode("Love it");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("select");dom.setAttribute(el9,"class","form-control form-control-lg");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("Large select .form-control-lg");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("1");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("2");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("3");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("select");dom.setAttribute(el9,"class","form-control");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("Default select .form-control");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("1");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("2");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("3");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("select");dom.setAttribute(el9,"class","form-control form-control-sm");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("Small select .form-control-sm");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("1");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("2");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("option");var el11=dom.createTextNode("3");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" INPUT GROUP START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" INPUT VALIDATION START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("form");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("fieldset");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("h4");var el9=dom.createTextNode("Validation");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group has-success");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"class","col-form-label");dom.setAttribute(el9,"for","inputSuccess1");var el10=dom.createTextNode("Input with success");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("input");dom.setAttribute(el9,"type","text");dom.setAttribute(el9,"class","form-control form-control-success");dom.setAttribute(el9,"id","inputSuccess1");dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","form-control-feedback");var el10=dom.createTextNode("Success! You've done it.");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("small");dom.setAttribute(el9,"class","form-text text-muted");var el10=dom.createTextNode("Example help text that remains unchanged.");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group has-warning");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"class","col-form-label");dom.setAttribute(el9,"for","inputWarning1");var el10=dom.createTextNode("Input with warning");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("input");dom.setAttribute(el9,"type","text");dom.setAttribute(el9,"class","form-control form-control-warning");dom.setAttribute(el9,"id","inputWarning1");dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","form-control-feedback");var el10=dom.createTextNode("Shucks, check the formatting of that and try again.");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("small");dom.setAttribute(el9,"class","form-text text-muted");var el10=dom.createTextNode("Example help text that remains unchanged.");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group has-danger");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("label");dom.setAttribute(el9,"class","col-form-label");dom.setAttribute(el9,"for","inputDanger1");var el10=dom.createTextNode("Input with danger");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("input");dom.setAttribute(el9,"type","text");dom.setAttribute(el9,"class","form-control form-control-danger");dom.setAttribute(el9,"id","inputDanger1");dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","form-control-feedback");var el10=dom.createTextNode("Sorry, that username's taken. Try another?");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("small");dom.setAttribute(el9,"class","form-text text-muted");var el10=dom.createTextNode("Example help text that remains unchanged.");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","form-group");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","check has-success");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"type","checkbox");dom.setAttribute(el10,"id","checkboxSuccess");dom.setAttribute(el10,"value","option1");dom.setAttribute(el10,"checked","");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("label");dom.setAttribute(el10,"for","checkboxSuccess");var el11=dom.createTextNode("Checkbox with success");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","check has-warning");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"type","checkbox");dom.setAttribute(el10,"id","checkboxWarning");dom.setAttribute(el10,"value","option1");dom.setAttribute(el10,"checked","");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("label");dom.setAttribute(el10,"for","checkboxWarning");var el11=dom.createTextNode("Checkbox with warning");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","check has-danger");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("input");dom.setAttribute(el10,"type","checkbox");dom.setAttribute(el10,"id","checkboxDanger");dom.setAttribute(el10,"value","option1");dom.setAttribute(el10,"checked","");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("label");dom.setAttribute(el10,"for","checkboxDanger");var el11=dom.createTextNode("Checkbox with danger");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n");dom.appendChild(el7,el8);var el8=dom.createComment(" ALERTS START ");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("h4");var el9=dom.createTextNode("Alerts");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","alert alert-success");dom.setAttribute(el8,"role","alert");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("button");dom.setAttribute(el9,"type","button");dom.setAttribute(el9,"class","close");dom.setAttribute(el9,"data-dismiss","alert");var el10=dom.createElement("i");dom.setAttribute(el10,"class","fa fa-times-circle");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("strong");var el10=dom.createTextNode("Well done!");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode(" You successfully read this important alert message.\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","alert alert-warning");dom.setAttribute(el8,"role","alert");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("button");dom.setAttribute(el9,"type","button");dom.setAttribute(el9,"class","close");dom.setAttribute(el9,"data-dismiss","alert");var el10=dom.createElement("i");dom.setAttribute(el10,"class","fa fa-times-circle");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("strong");var el10=dom.createTextNode("Warning!");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode(" Better check yourself. ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"href","javascript:;");var el10=dom.createTextNode("Alert link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode(".\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","alert alert-danger");dom.setAttribute(el8,"role","alert");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("button");dom.setAttribute(el9,"type","button");dom.setAttribute(el9,"class","close");dom.setAttribute(el9,"data-dismiss","alert");var el10=dom.createElement("i");dom.setAttribute(el10,"class","fa fa-times-circle");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("strong");var el10=dom.createTextNode("Oh snap!");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode(" Change a few things up and try submitting again.\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n");dom.appendChild(el7,el8);var el8=dom.createComment(" ALERTS STOP ");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" INPUT VALIDATION STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n");dom.appendChild(el5,el6);var el6=dom.createComment(" TAG START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Tag");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","m-b-1");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-default");var el8=dom.createTextNode("Default");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-primary");var el8=dom.createTextNode("Primary");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-success");var el8=dom.createTextNode("Success");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-info");var el8=dom.createTextNode("Info");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-warning");var el8=dom.createTextNode("Warning");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-danger");var el8=dom.createTextNode("Danger");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Tag pill");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","m-b-1");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-pill tag-default");var el8=dom.createTextNode("Default");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-pill tag-primary");var el8=dom.createTextNode("Primary");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-pill tag-success");var el8=dom.createTextNode("Success");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-pill tag-info");var el8=dom.createTextNode("Info");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-pill tag-warning");var el8=dom.createTextNode("Warning");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","tag tag-pill tag-danger");var el8=dom.createTextNode("Danger");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" TAG STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" FORMS STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" BUTTONS START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","buttons");var el5=dom.createTextNode("Buttons");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-8");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("Button");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-paper-plane");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Secondary (Default)");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-info");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-rocket");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Info (Standard)");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-primary");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-cloud-upload");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Primary (Active, selected)");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-warning");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-exclamation-triangle");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Warning");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-danger");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-bolt");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Danger");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createComment(" button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i>Success</button ");dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("Button outline");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-outline-secondary");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-paper-plane");dom.appendChild(el7,el8);var el8=dom.createTextNode("Secondary");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-outline-info");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-rocket");dom.appendChild(el7,el8);var el8=dom.createTextNode("Info");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-outline-primary");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-cloud-upload");dom.appendChild(el7,el8);var el8=dom.createTextNode("Primary");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-outline-warning");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-exclamation-triangle");dom.appendChild(el7,el8);var el8=dom.createTextNode("Warning");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-outline-danger");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-bolt");dom.appendChild(el7,el8);var el8=dom.createTextNode("Danger");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createComment(" button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i>Success</button ");dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("Button disabled");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-secondary disabled");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-paper-plane");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Secondary");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-info disabled");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-info-circle");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Info");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-primary disabled");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-cloud-upload");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Primary");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-warning disabled");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-exclamation-triangle");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Warning");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-danger disabled");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-bolt");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Danger");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createComment(" button type=\"button\" class=\"btn btn-success disabled\" aria-hidden=\"true\">Success</button ");dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("Button group");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","btn-group");dom.setAttribute(el7,"role","group");dom.setAttribute(el7,"aria-label","Basic example");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-default");var el9=dom.createTextNode("Secondary");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-default dropdown-toggle dropdown-toggle-split");dom.setAttribute(el8,"data-toggle","dropdown");dom.setAttribute(el8,"aria-haspopup","true");dom.setAttribute(el8,"aria-expanded","false");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","dropdown-menu");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Action");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Another action");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Something else here");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","dropdown-divider");dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Separated link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","btn-group");dom.setAttribute(el7,"role","group");dom.setAttribute(el7,"aria-label","Basic example");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-info");var el9=dom.createTextNode("Info");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-info dropdown-toggle dropdown-toggle-split");dom.setAttribute(el8,"data-toggle","dropdown");dom.setAttribute(el8,"aria-haspopup","true");dom.setAttribute(el8,"aria-expanded","false");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","dropdown-menu");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Action");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Another action");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Something else here");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","dropdown-divider");dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Separated link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","btn-group");dom.setAttribute(el7,"role","group");dom.setAttribute(el7,"aria-label","Basic example");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-primary");var el9=dom.createTextNode("Primary");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-primary dropdown-toggle dropdown-toggle-split");dom.setAttribute(el8,"data-toggle","dropdown");dom.setAttribute(el8,"aria-haspopup","true");dom.setAttribute(el8,"aria-expanded","false");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","dropdown-menu");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Action");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Another action");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Something else here");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","dropdown-divider");dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","dropdown-item");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Separated link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","btn-group");dom.setAttribute(el7,"role","group");dom.setAttribute(el7,"aria-label","Basic example");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-warning");var el9=dom.createTextNode("Warning");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-warning dropdown-toggle dropdown-toggle-split");dom.setAttribute(el8,"data-toggle","dropdown");dom.setAttribute(el8,"aria-haspopup","true");dom.setAttribute(el8,"aria-expanded","false");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n");dom.appendChild(el7,el8);var el8=dom.createComment(" DROPDOWN OVERFLOW MAX-HEIGHT DIV INSIDE START ");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","dropdown-menu");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Scroll dropdown");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Another action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Something else here");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Another action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Something else here");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Another action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Something else here");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Another action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Something else here");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Another action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Something else here");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Another action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Something else here");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n");dom.appendChild(el7,el8);var el8=dom.createComment(" DROPDOWN OVERFLOW MAX-HEIGHT DIV INSIDE STOP ");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("Button sizes");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-info btn-lg");var el8=dom.createTextNode("Large button");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-info");var el8=dom.createTextNode("Default button");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-info btn-sm");var el8=dom.createTextNode("Small button");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-info btn-xs");var el8=dom.createTextNode("XS button");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-4");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("Button block");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-secondary btn-lg btn-block");var el8=dom.createTextNode("Block level button");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("Button group justified");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");dom.setAttribute(el6,"class","btn-group btn-group-justified");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-angle-left");dom.appendChild(el7,el8);var el8=dom.createTextNode("Left");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createTextNode("Middle");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createTextNode("Right");dom.appendChild(el7,el8);var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-right fa-angle-right");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("Button toolbar");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","btn-group");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-secondary");var el9=dom.createTextNode("1");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","btn-group");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"type","button");dom.setAttribute(el8,"class","btn btn-secondary");var el9=dom.createTextNode("2");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","btn-group");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("button");dom.setAttribute(el9,"type","button");dom.setAttribute(el9,"class","btn btn-secondary dropdown-toggle");dom.setAttribute(el9,"data-toggle","dropdown");dom.setAttribute(el9,"aria-haspopup","true");dom.setAttribute(el9,"aria-expanded","false");var el10=dom.createTextNode("Dropdown");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","dropdown-menu");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item active");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Active item");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Something else here");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","dropdown-divider");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Separated link");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","btn-group dropup");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("button");dom.setAttribute(el9,"type","button");dom.setAttribute(el9,"class","btn btn-secondary dropdown-toggle");dom.setAttribute(el9,"data-toggle","dropdown");dom.setAttribute(el9,"aria-haspopup","true");dom.setAttribute(el9,"aria-expanded","false");var el10=dom.createTextNode("Dropup");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","dropdown-menu");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Another action");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Something else here");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","dropdown-divider");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("a");dom.setAttribute(el10,"class","dropdown-item");dom.setAttribute(el10,"href","#");var el11=dom.createTextNode("Separated link");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h5");var el7=dom.createTextNode("Button group vertical");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");dom.setAttribute(el6,"class","btn-group-vertical");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createTextNode("Button");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("button");dom.setAttribute(el7,"type","button");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createTextNode("Button");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" BUTTONS STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" NAVIGATION START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","forms");var el5=dom.createTextNode("Navigation");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-lg-6");var el6=dom.createTextNode("\n\n");dom.appendChild(el5,el6);var el6=dom.createComment(" NAV TABS STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Tabs");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","m-b-1");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","nav nav-tabs");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link active");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Active");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link disabled");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Disabled");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" NAV TABS STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n");dom.appendChild(el5,el6);var el6=dom.createComment(" NAV PILLS START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Pills");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","m-b-1");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","nav nav-pills");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link active");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Active");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link disabled");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Disabled");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" NAV PILLS STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n");dom.appendChild(el5,el6);var el6=dom.createComment(" NAV PILLS STACKED START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Pills Stacked");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","m-b-1");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","nav nav-pills nav-stacked");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link active");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Active");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Link");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","nav-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","nav-link disabled");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("Disabled");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" NAV PILLS STACKED STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-lg-6");var el6=dom.createTextNode("\n\n");dom.appendChild(el5,el6);var el6=dom.createComment(" BREADCRUMB START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Breadcrumb");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("nav");dom.setAttribute(el6,"class","breadcrumb");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"class","breadcrumb-item");dom.setAttribute(el7,"href","#");var el8=dom.createTextNode("Start");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"class","breadcrumb-item");dom.setAttribute(el7,"href","#");var el8=dom.createTextNode("Library");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"class","breadcrumb-item");dom.setAttribute(el7,"href","#");var el8=dom.createTextNode("Data");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","breadcrumb-item active");var el8=dom.createTextNode("Sweco");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" BREADCRUMB STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Pagination");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" PAGINATION LG START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("nav");dom.setAttribute(el6,"aria-label","...");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","pagination pagination-lg");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item disabled");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");dom.setAttribute(el9,"tabindex","-1");dom.setAttribute(el9,"aria-label","Previous");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"aria-hidden","true");dom.setAttribute(el10,"class","fa fa-angle-left");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"class","sr-only");var el11=dom.createTextNode("Previous");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item active");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("1 ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"class","sr-only");var el11=dom.createTextNode("(current)");dom.appendChild(el10,el11);dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item");var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("2");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item");var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("3");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");dom.setAttribute(el9,"aria-label","Next");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"aria-hidden","true");dom.setAttribute(el10,"class","fa fa-angle-right");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"class","sr-only");var el11=dom.createTextNode("Next");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" PAGINATION LG STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n");dom.appendChild(el5,el6);var el6=dom.createComment(" PAGINATION START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("nav");dom.setAttribute(el6,"aria-label","...");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","pagination");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item disabled");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");dom.setAttribute(el9,"tabindex","-1");dom.setAttribute(el9,"aria-label","Previous");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"aria-hidden","true");dom.setAttribute(el10,"class","fa fa-angle-left");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"class","sr-only");var el11=dom.createTextNode("Previous");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item active");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("1 ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"class","sr-only");var el11=dom.createTextNode("(current)");dom.appendChild(el10,el11);dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item");var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("2");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item");var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("3");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");dom.setAttribute(el9,"aria-label","Next");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"aria-hidden","true");dom.setAttribute(el10,"class","fa fa-angle-right");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"class","sr-only");var el11=dom.createTextNode("Next");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" PAGINATION STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n");dom.appendChild(el5,el6);var el6=dom.createComment(" PAGINATION SM START ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("nav");dom.setAttribute(el6,"aria-label","...");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("ul");dom.setAttribute(el7,"class","pagination pagination-sm");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item disabled");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");dom.setAttribute(el9,"tabindex","-1");dom.setAttribute(el9,"aria-label","Previous");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"aria-hidden","true");dom.setAttribute(el10,"class","fa fa-angle-left");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"class","sr-only");var el11=dom.createTextNode("Previous");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item active");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("1 ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"class","sr-only");var el11=dom.createTextNode("(current)");dom.appendChild(el10,el11);dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item");var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("2");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item");var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");var el10=dom.createTextNode("3");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("li");dom.setAttribute(el8,"class","page-item");var el9=dom.createTextNode("\n                  ");dom.appendChild(el8,el9);var el9=dom.createElement("a");dom.setAttribute(el9,"class","page-link");dom.setAttribute(el9,"href","#");dom.setAttribute(el9,"aria-label","Next");var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"aria-hidden","true");dom.setAttribute(el10,"class","fa fa-angle-right");dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                    ");dom.appendChild(el9,el10);var el10=dom.createElement("span");dom.setAttribute(el10,"class","sr-only");var el11=dom.createTextNode("Next");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                  ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment(" PAGINATION SM STOP ");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" NAVIGATION STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" LIST GROUP START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","list-group");var el5=dom.createTextNode("List group");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-4");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","list-group");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item");var el8=dom.createTextNode("Cras justo odio");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item active");var el8=dom.createTextNode("Dapibus ac facilisis in");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item");var el8=dom.createTextNode("Morbi leo risus");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item");var el8=dom.createTextNode("Porta ac consectetur ac");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item");var el8=dom.createTextNode("Eget risus varius blandit");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item disabled");var el8=dom.createTextNode("Vestibulum at eros");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-4");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","list-group");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item list-group-item-action active");var el8=dom.createTextNode("Cras justo odio ");dom.appendChild(el7,el8);var el8=dom.createElement("span");dom.setAttribute(el8,"class","tag tag-warning tag-pill pull-xs-right");var el9=dom.createTextNode("14");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item list-group-item-action");var el8=dom.createTextNode("Dapibus ac facilisis in ");dom.appendChild(el7,el8);var el8=dom.createElement("span");dom.setAttribute(el8,"class","tag tag-warning tag-pill pull-xs-right");var el9=dom.createTextNode("3");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item list-group-item-action");var el8=dom.createTextNode("Morbi leo risus ");dom.appendChild(el7,el8);var el8=dom.createElement("span");dom.setAttribute(el8,"class","tag tag-warning tag-pill pull-xs-right");var el9=dom.createTextNode("1");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item list-group-item-action");var el8=dom.createTextNode("Porta ac consectetur ac");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item list-group-item-action");var el8=dom.createTextNode("Eget risus varius blandit");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item list-group-item-action disabled");var el8=dom.createTextNode("Vestibulum at eros");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-4");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","list-group");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item list-group-item-action");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("h5");dom.setAttribute(el8,"class","list-group-item-heading");var el9=dom.createTextNode("List group item heading");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("p");dom.setAttribute(el8,"class","list-group-item-text");var el9=dom.createTextNode("Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item list-group-item-action active");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("h5");dom.setAttribute(el8,"class","list-group-item-heading");var el9=dom.createTextNode("List group item heading");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("p");dom.setAttribute(el8,"class","list-group-item-text");var el9=dom.createTextNode("Donec id elit non mi porta gravida at eget metus.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","list-group-item list-group-item-action");var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("h5");dom.setAttribute(el8,"class","list-group-item-heading");var el9=dom.createTextNode("List group item heading");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                ");dom.appendChild(el7,el8);var el8=dom.createElement("p");dom.setAttribute(el8,"class","list-group-item-text");var el9=dom.createTextNode("Maecenas sed diam eget risus varius blandit. Vestibulum at eros.");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n              ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" LIST GROUP STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" WELL START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","well");var el5=dom.createTextNode("Well");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","well well-secondary");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("h4");var el8=dom.createTextNode("Well secondary");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");var el8=dom.createTextNode("Look, I'm in a well secondary, with a ");dom.appendChild(el7,el8);var el8=dom.createElement("a");dom.setAttribute(el8,"href","#");var el9=dom.createTextNode("link");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode(". Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-md-6");var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","well well-info");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("h4");var el8=dom.createTextNode("Well info");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");var el8=dom.createTextNode("Look, I'm in a well info, with a ");dom.appendChild(el7,el8);var el8=dom.createElement("a");dom.setAttribute(el8,"href","#");var el9=dom.createTextNode("link");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode(". Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" WELL STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","card");var el5=dom.createTextNode("Card");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("p");var el5=dom.createTextNode("A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. Read more about ");dom.appendChild(el4,el5);var el5=dom.createElement("a");dom.setAttribute(el5,"href","http://v4-alpha.getbootstrap.com/components/card/");dom.setAttribute(el5,"target","_blank");var el6=dom.createTextNode("cards");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode(".");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n");dom.appendChild(el2,el3);var el3=dom.createComment(" ROW FLEX START ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","row row-flex");var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","col-xs-12 col-sm-6 col-md-6 col-lg-3");var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment(" CARD START ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","card");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-img-block");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("img");dom.setAttribute(el7,"src","/img/sweco-demo.jpg");dom.setAttribute(el7,"alt","");dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-block");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("h4");dom.setAttribute(el7,"class","card-title");var el8=dom.createTextNode("Card default");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");dom.setAttribute(el7,"class","card-text");var el8=dom.createTextNode("Some quick example text to build on the card title and make up the bulk of the card's content.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-footer");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-rocket");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Do stuff");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createTextNode("Go somewhere");dom.appendChild(el7,el8);var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-angle-right");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment(" CARD STOP ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","col-xs-12 col-sm-6 col-md-6 col-lg-3");var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment(" CARD START ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","card");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-img-block");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("img");dom.setAttribute(el7,"src","/img/sweco-demo.jpg");dom.setAttribute(el7,"alt","");dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-block");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("h4");dom.setAttribute(el7,"class","card-title");var el8=dom.createTextNode("Card default");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");dom.setAttribute(el7,"class","card-text");var el8=dom.createTextNode("Some quick example text to build on the card title and make up the bulk of the card's content.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-footer");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createTextNode("Go somewhere");dom.appendChild(el7,el8);var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-angle-right");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment(" CARD STOP ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","col-xs-12 col-sm-6 col-md-6 col-lg-3");var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment(" CARD START ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","card card-info");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-img-block");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("img");dom.setAttribute(el7,"src","/img/sweco-demo.jpg");dom.setAttribute(el7,"alt","");dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-block");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("h4");dom.setAttribute(el7,"class","card-title");var el8=dom.createTextNode("Card info");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");dom.setAttribute(el7,"class","card-text");var el8=dom.createTextNode("Some quick example text to build on the card title and make up the bulk of the card's content.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-footer");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createTextNode("Go somewhere");dom.appendChild(el7,el8);var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-angle-right");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment(" CARD STOP ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","col-xs-12 col-sm-6 col-md-6 col-lg-3");var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment(" CARD START ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","card card-info");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-img-block");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("img");dom.setAttribute(el7,"src","/img/sweco-demo.jpg");dom.setAttribute(el7,"alt","");dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-block");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("h4");dom.setAttribute(el7,"class","card-title");var el8=dom.createTextNode("Card info");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");dom.setAttribute(el7,"class","card-text");var el8=dom.createTextNode("Some quick example text to build on the card title and make up the bulk of the card's content.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","card-footer");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","#");dom.setAttribute(el7,"class","btn btn-secondary");var el8=dom.createTextNode("Go somewhere");dom.appendChild(el7,el8);var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-angle-right");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment(" CARD STOP ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n");dom.appendChild(el2,el3);var el3=dom.createComment(" ROW FLEX STOP ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n");dom.appendChild(el2,el3);var el3=dom.createComment(" TODO: GRID START ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n");dom.appendChild(el2,el3);var el3=dom.createComment(" TODO: FONT AWESOME ICONS START ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n");dom.appendChild(el2,el3);var el3=dom.createComment(" TODO: MODALS START ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n");dom.appendChild(el2,el3);var el3=dom.createComment(" TODO: POPOVERS START ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n");dom.appendChild(el2,el3);var el3=dom.createComment(" TODO: TOOLTIP START ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n");dom.appendChild(el2,el3);var el3=dom.createComment(" TODO: CONTACT CARD START ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" DOWNLOAD START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","download");var el5=dom.createTextNode("Download options");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-xs-12");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Download precompiled code");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("Quickly add Sweco digital guidelines to your project.");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","download");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");dom.setAttribute(el7,"class","m-b-0");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-download");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createElement("a");dom.setAttribute(el8,"href","https://github.com/sweco/sweco-digital-guidelines/archive/master.zip");dom.setAttribute(el8,"aria-label","Download latest distributed release as zip-archive sweco/sweco-digital-guidelines to your computer and use it.");dom.setAttribute(el8,"download","Sweco Digital Guidelines zip-archive");var el9=dom.createTextNode("Download Sweco digital guidelines");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("What's included in the distributed precompiled folder");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createElement("figure");dom.setAttribute(el6,"class","html");var el7=dom.createElement("pre");var el8=dom.createElement("code");var el9=dom.createTextNode("\n  dist/\n  ├── css/\n  │   ├── sweco-bootstrap.css\n  │   └── sweco-bootstrap.min.css\n  ├── scripts/\n  │   ├── sweco-bootstrap.js\n  │   └── sweco-bootstrap.min.js\n  ├── fonts/\n  │   ├── SwecoSans-Regular.*\n  │   ├── SwecoSans-Medium.*\n  │   ├── SwecoSans-Bold.*\n  │   ├── fontawesome-webfont.*\n  └── img/\n      ├── apple-touch-icon.png\n      ├── favicon-*.png\n      ├── mstile-*.png\n      ├── logotype.svg\n      ├── logotype-black.svg\n      └── sweco-front.png\n\n");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");dom.setAttribute(el6,"id","download-source");var el7=dom.createTextNode("Source code download, clone or fork");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("For more advanced usage. The source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScripts and more. ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","https://github.com/sweco/sweco-digital-guidelines/blob/master/README.md");dom.setAttribute(el7,"target","_blank");var el8=dom.createTextNode("Read more about running and develop Sweco digital guidelines as an Ember.js application.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","download");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-github");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createElement("a");dom.setAttribute(el8,"href","https://github.com/sweco/sweco-digital-guidelines/fork");dom.setAttribute(el8,"target","_blank");dom.setAttribute(el8,"aria-label","Fork sweco/sweco-digital-guidelines on GitHub.");var el9=dom.createTextNode("Fork the repository on GitHub");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-github");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Clone the repository: ");dom.appendChild(el7,el8);var el8=dom.createElement("code");var el9=dom.createTextNode("git clone git://github.com/sweco/sweco-digital-guidelines.git");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("p");dom.setAttribute(el7,"class","m-b-0");var el8=dom.createElement("i");dom.setAttribute(el8,"class","fa fa-terminal");dom.setAttribute(el8,"aria-hidden","true");dom.appendChild(el7,el8);var el8=dom.createTextNode("Install with Bower: ");dom.appendChild(el7,el8);var el8=dom.createElement("code");var el9=dom.createTextNode("bower install sweco-digital-guidelines");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Using Sass");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("Requires a Sass compiler, ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","https://github.com/postcss/autoprefixer");dom.setAttribute(el7,"target","_blank");var el8=dom.createTextNode("Autoprefixer");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(", ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","https://github.com/luisrudge/postcss-flexbugs-fixes");dom.setAttribute(el7,"target","_blank");var el8=dom.createTextNode("Postcss-flexbugs-fixes");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" (included in the package).");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("Your application Scss file should look something like this:");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createElement("figure");dom.setAttribute(el6,"class","html");var el7=dom.createElement("pre");var el8=dom.createElement("code");var el9=dom.createTextNode("\n  // Bootstrap mixins\n  @import \"bootstrap/scss/_mixins\";\n\n  // Your application variables\n  @import \"variables\";\n\n  // Your application custom SCSS\n  @import \"application\";\n\n  // Sweco digital guidelines\n  @import \"sweco-digital-guidelines/scss/sweco-bootstrap\";\n\n");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" DOWNLOAD STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n      ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","well");var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" STARTER TEMPLATE START ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("h2");dom.setAttribute(el4,"id","starter-template");var el5=dom.createTextNode("Starter template");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("hr");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","row");var el5=dom.createTextNode("\n          ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","col-xs-12");var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("Be sure to have your pages set up with the latest design and development standards. That means:");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("ul");var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("Using an HTML5 doctype");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("Forcing Internet Explorer to use its latest rendering mode");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n              ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createTextNode("And, utilizing the viewport meta tag.");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n            ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("Put it all together and your pages should look like this:");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n");dom.appendChild(el5,el6);var el6=dom.createElement("figure");dom.setAttribute(el6,"class","html");var el7=dom.createElement("pre");var el8=dom.createElement("code");var el9=dom.createTextNode("\n  <!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n  <!-- META START -->\n      <meta charset=\"utf-8\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n      <meta http-equiv=\"Content-Language\" content=\"sv\">\n      <meta http-equiv=\"cleartype\" content=\"on\">\n      <meta http-equiv=\"imagetoolbar\" content=\"no\">\n  <!-- APPLICATION NAME START -->\n      <title>Sweco - Your-Application-Name</title>\n      <meta name=\"Application-name\" content=\"Sweco - Your-Application-Name\">\n  <!-- APPLICATION NAME STOP -->\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\">\n      <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n      <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n      <meta name=\"msapplication-TileColor\" content=\"#4d535a\">\n      <meta name=\"msapplication-TileImage\" content=\"/img/mstile-144x144.png\">\n  <!-- META STOP -->\n  <!-- ICO START -->\n      <link rel=\"shortcut icon\" href=\"/img/favicon.ico\">\n      <link rel=\"apple-touch-icon\" href=\"/img/apple-touch-icon.png\">\n      <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/img/favicon-16x16.png\">\n      <link rel=\"icon\" type=\"image/png\" sizes=\"48x48\" href=\"/img/favicon-48x48.png\">\n      <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"/img/favicon-96x96.png\">\n      <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"/img/favicon-192x192.png\">\n  <!-- ICO STOP -->\n  <!-- CSS START -->\n      <link rel=\"stylesheet\" href=\"css/sweco-bootstrap.min.css\">\n      <link rel=\"stylesheet\" href=\"css/Your-Application-Styles.css\">\n  <!-- CSS STOP -->\n  <!-- SCRIPT START -->\n      <script src=\"scripts/sweco-bootstrap.min.js\"></script>\n      <script src=\"scripts/Your-Application-Scripts.js\"></script>\n  <!-- SCRIPT STOP -->\n    </head>\n    <body>\n  <!-- PAGE START -->\n      <div id=\"page\">\n  <!-- CONTENT START -->\n        <section class=\"container\" id=\"content\">\n          <h1>Hello, world!</h1>\n        </section>\n  <!-- CONTENT STOP -->\n      </div>\n  <!-- PAGE STOP -->\n    </body>\n  </html>\n\n");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("h4");var el7=dom.createTextNode("Building HTML with Bootstrap to get complete Sweco styles");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("It´s important to follow the Bootstrap 4 HTML and class structure to get the complete Sweco styles. Read the Bootstrap documentation about ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","http://v4-alpha.getbootstrap.com/layout/overview/");dom.setAttribute(el7,"target","_blank");var el8=dom.createTextNode("layout");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(", ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","http://v4-alpha.getbootstrap.com/content/reboot/");dom.setAttribute(el7,"target","_blank");var el8=dom.createTextNode("content");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" and ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","http://v4-alpha.getbootstrap.com/components/alerts/");dom.setAttribute(el7,"target","_blank");var el8=dom.createTextNode("components");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(". Also take advantage of using Bootstraps ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","http://v4-alpha.getbootstrap.com/layout/responsive-utilities/");dom.setAttribute(el7,"target","_blank");var el8=dom.createTextNode("responsive utilities");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" and ");dom.appendChild(el6,el7);var el7=dom.createElement("a");dom.setAttribute(el7,"href","http://v4-alpha.getbootstrap.com/components/utilities/");dom.setAttribute(el7,"target","_blank");var el8=dom.createTextNode("utility classes");dom.appendChild(el7,el8);dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n            ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode("If your application is using the Sweco navbars, navbar-north and navbar-south add classes to body. For navbar-north add ");dom.appendChild(el6,el7);var el7=dom.createElement("code");var el8=dom.createTextNode("<body class=\"navbarNorth\">");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" or ");dom.appendChild(el6,el7);var el7=dom.createElement("code");var el8=dom.createTextNode("<body class=\"navbarNorth navbarSouth\">");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" for both.");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n          ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n        ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n");dom.appendChild(el3,el4);var el4=dom.createComment(" STARTER TEMPLATE STOP ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n      ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n    ");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n");dom.appendChild(el1,el2);var el2=dom.createComment(" CONTENT STOP ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n\n  ");dom.appendChild(el1,el2);dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);var el1=dom.createComment(" PAGE STOP ");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment,contextualElement){var element0=dom.childAt(fragment,[2]);var element1=dom.childAt(element0,[9,1,1,1,1,1,5]);if(this.cachedFragment){dom.repairClonedNode(dom.childAt(element0,[32,15,9,1,3,1,35,3,1,1]),[],true);}if(this.cachedFragment){dom.repairClonedNode(dom.childAt(element0,[32,15,9,1,3,1,37,3,1,1]),[],true);}if(this.cachedFragment){dom.repairClonedNode(dom.childAt(element0,[32,15,9,3,9,1,9,1,1]),[],true);}if(this.cachedFragment){dom.repairClonedNode(dom.childAt(element0,[32,15,9,3,9,1,9,3,1]),[],true);}if(this.cachedFragment){dom.repairClonedNode(dom.childAt(element0,[32,15,9,3,9,1,9,5,1]),[],true);}var morphs=new Array(5);morphs[0] = dom.createMorphAt(element0,3,3);morphs[1] = dom.createElementMorph(element1);morphs[2] = dom.createMorphAt(element0,15,15);morphs[3] = dom.createMorphAt(element0,21,21);morphs[4] = dom.createMorphAt(element0,26,26);return morphs;},statements:[["inline","partial",["partials/navbar"],[],["loc",[null,[5,4],[5,33]]],0,0],["element","action",["frontPage"],[],["loc",[null,[17,60],[17,82]]],0,0],["inline","partial",["partials/navbar-south"],[],["loc",[null,[27,4],[27,39]]],0,0],["block","if",[["get","isModalVisible",["loc",[null,[31,10],[31,24]]],0,0,0,0]],[],0,null,["loc",[null,[31,4],[33,11]]]],["content","outlet",["loc",[null,[37,4],[37,14]]],0,0,0,0]],locals:[],templates:[child0]};})());});
define("sweco-bootstrap/templates/partials/navbar-south", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "sweco-bootstrap/templates/partials/navbar-south.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "navbar navbar-fixed-bottom navbar-south fade in");
        dom.setAttribute(el1, "role", "navigation");
        dom.setAttribute(el1, "id", "navbarSouth");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" NAV START ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "text-xs-center");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav d-inline-block m-x-auto");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "nav-item active");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "nav-link");
        dom.setAttribute(el6, "href", "https://github.com/sweco/sweco-digital-guidelines");
        dom.setAttribute(el6, "target", "_blank");
        dom.setAttribute(el6, "aria-label", "Clone sweco/sweco-digital-guidelines to your computer and use it in GitHub Desktop.");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-github fa-lg");
        dom.setAttribute(el7, "aria-hidden", "true");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "hidden-sm-down");
        var el8 = dom.createTextNode("Sweco Digital Guidelines on ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("GitHub");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "nav-item");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "nav-link");
        dom.setAttribute(el6, "href", "https://github.com/sweco/sweco-digital-guidelines/archive/master.zip");
        dom.setAttribute(el6, "aria-label", "Download latest distributed release as zip-archive sweco/sweco-digital-guidelines to your computer and use it.");
        dom.setAttribute(el6, "download", "Sweco Digital Guidelines zip-archive");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-download fa-lg");
        dom.setAttribute(el7, "aria-hidden", "true");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("Download");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" NAV STOP ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("sweco-bootstrap/templates/partials/navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "sweco-bootstrap/templates/partials/navbar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "navbar navbar-fixed-top navbar-north");
        dom.setAttribute(el1, "role", "navigation");
        dom.setAttribute(el1, "id", "navbarNorth");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" LOGOTYPE START ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-lg-3 col-md-3 col-sm-12 col-xs-12");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "./");
        dom.setAttribute(el5, "class", "logotype");
        dom.setAttribute(el5, "role", "banner");
        var el6 = dom.createTextNode("SWECO");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" LOGOTYPE STOP ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-lg-6 col-md-6 col-sm-12 col-xs-12");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" SEARCH START ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" SEARCH STOP ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-lg-3 col-md-3");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" NAV START ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "nav navbar-nav nav-top-right");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "nav-item active");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "class", "nav-link");
        dom.setAttribute(el7, "href", "./");
        var el8 = dom.createTextNode("Start");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "nav-item");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "class", "nav-link");
        dom.setAttribute(el7, "href", "javascript:;");
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "hidden-lg-down");
        var el9 = dom.createTextNode("Sweco Digital ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("Guidelines");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" NAV STOP ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" PROGRESS START ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" PROGRESS STOP ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [3, 1]);
        var element3 = dom.childAt(element1, [9, 3]);
        var element4 = dom.childAt(element3, [1, 1]);
        var element5 = dom.childAt(element3, [3, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [7]), 3, 3);
        morphs[2] = dom.createElementMorph(element4);
        morphs[3] = dom.createElementMorph(element5);
        morphs[4] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["element", "action", ["start"], [], ["loc", [null, [6, 40], [6, 58]]], 0, 0], ["inline", "sweco-search", [], ["value", ["subexpr", "@mut", [["get", "query", ["loc", [null, [11, 31], [11, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "search", "search", "clear", "clear"], ["loc", [null, [11, 10], [11, 68]]], 0, 0], ["element", "action", ["start"], [], ["loc", [null, [18, 44], [18, 62]]], 0, 0], ["element", "action", ["frontPage"], [], ["loc", [null, [21, 54], [21, 76]]], 0, 0], ["inline", "progress-js", [], ["isLoading", ["subexpr", "@mut", [["get", "isLoading", ["loc", [null, [29, 28], [29, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [29, 4], [29, 39]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("sweco-bootstrap/transitions", ["exports"], function (exports) {
  exports["default"] = function () {};
});
define('sweco-bootstrap/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('sweco-bootstrap/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('sweco-bootstrap/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('sweco-bootstrap/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('sweco-bootstrap/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('sweco-bootstrap/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('sweco-bootstrap/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('sweco-bootstrap/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('sweco-bootstrap/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('sweco-bootstrap/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('sweco-bootstrap/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('sweco-bootstrap/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('sweco-bootstrap/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('sweco-bootstrap/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('sweco-bootstrap/config/environment', ['ember'], function(Ember) {
  var prefix = 'sweco-bootstrap';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("sweco-bootstrap/app")["default"].create({"name":"sweco-bootstrap","version":"1.0.0+1c8fedab"});
}

/* jshint ignore:end */
//# sourceMappingURL=sweco-bootstrap.map