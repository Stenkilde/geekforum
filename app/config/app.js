(function() {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name applicationApp
	 * @description
	 * # applicationApp
	 *
	 * Main module of the application.
	 */
	angular
		.module('applicationApp', [
		
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngRoute',
    'ui.router',
    'config',
    'core.exception',
    'core.logger',
    'angular-loading-bar',
    'cgBusy',
    'angulartics',
    'angulartics.google.analytics',
    'hj.gsapifyRouter',
    'mm.foundation'
  
	]);
})();
