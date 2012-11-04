define([
  // Libraries.
  "modernizr",
  "jquery",
  "lodash",
  "backbone",
  "dot",

  // Plugins.
  "plugins/backbone.analytics"
],

function(Modernizr, $, _, Backbone, Dot) {

  // Provide a global location to place configuration settings and module
  // creation.
  var app = {
    // The root path to run the application.
    root: "/"
  };

  // Localize or create a new JavaScript Template object.
  var JST = window.JST = window.JST || {};
  
  // Mix Backbone.Events, modules, and layout management into the app object.
  return _.extend(app, {
  	// Create a custom object with a nested Views object.
  	module: function(additionalProps) {
  		return _.extend({ Views: {} }, additionalProps);
  	}
  }, Backbone.Events);

});
