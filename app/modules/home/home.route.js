(function() {
  'use strict';

  /**
   * @ngdoc route
   * @name applicationApp.route:home
   * @function
   * @description
   * # home
   * Route in the applicationApp.
   */
  angular.module('applicationApp')
    /* @ngInject */
    .config(function ($stateProvider) {

      var Home = {
        name: 'home',
        url: '/',
        templateUrl: 'modules/home/home.template.html',
        controller: 'Home',
        controllerAs: 'home'
      };

      $stateProvider.state(Home);
    });
})();
