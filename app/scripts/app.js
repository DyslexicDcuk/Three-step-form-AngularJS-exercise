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
    'ui.mask',
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
      
      .state('thanks', {
        url: '/thanks',
        templateUrl: 'views/thanks.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
      });

    $urlRouterProvider
      .when('', '/index')
      .when('/', '/index')
      .otherwise('404', '/404');
  })
  .run(function($rootScope, $state, $location, Storage) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      var nextName = next.name.split('.')[1]; 
      if(nextName === 'car' && Storage.getStateValidity(nextName)) {
        event.preventDefault();
        $location.replace(); //clear last history route
        $state.go('registration.personal');
      } else if (nextName === 'payment' && Storage.getStateValidity(nextName)) {
        event.preventDefault();
        $location.replace(); //clear last history route
        if(!Storage.getStateValidity('car')) {
          $state.go('registration.car');
        } else {
          $state.go('registration.personal');
        }
      }      
    });
  });
