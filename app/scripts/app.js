'use strict';
/**
 * @ngdoc overview
 * @name exerciseApp
 * @description
 * # exerciseApp
 *
 * Main module of the application.
 */
angular
  .module('exerciseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/index',
        templateUrl: 'views/main.html'
      })
      .state('registration', {
        url: '/registration',
        templateUrl: 'views/registration.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
      });
      
    $urlRouterProvider
      .when('', '/index')
      .when('/', '/index')
      .otherwise('404', '/404');
  });
