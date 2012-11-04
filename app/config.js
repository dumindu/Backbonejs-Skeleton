/*require.js configuration*/

require.config({
	
	// Initialize the application with the main application file.
	deps: ["main"],
	
	//Libraries
	paths: {
		plugins: "../assets/js/plugins",
		
		modernizr: "../assets/js/libs/modernizr-2.6.1.min",
		jquery: "../assets/js/libs/jquery-1.8.2.min",
		lodash: "../assets/js/libs/lodash-0.9.0.min",
		backbone: "../assets/js/libs/backbone-0.9.2.min",
		dot: "../assets/js/libs/doT.min"
	},
	
	//Configure the dependencies
	shim: {
		
		backbone: {
			deps: ["lodash", "jquery"],
			exports: "Backbone"
		},
		
		"plugins/backbone.analytics": ["backbone"]
		
	}
	
});