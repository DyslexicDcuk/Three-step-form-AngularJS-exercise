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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .state('registration', {
        url: '/registration',
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl'
      })
        .state('registration.personal', {
          url: '/personal',
          templateUrl: 'views/registration-partials/personal.html'
        })
        .state('registration.car', {
          url: '/car',
          templateUrl: 'views/registration-partials/car.html'
        })
        .state('registration.payment', {
          url: '/payment',
          templateUrl: 'views/registration-partials/payment.html'
        })
        .state('registration.thanks', {
          url: '/thanks',
          templateUrl: 'views/registration-partials/thanks.html'
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
