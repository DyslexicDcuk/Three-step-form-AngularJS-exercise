'use strict';
/**
 * @ngdoc function
 * @name exerciseApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the exerciseApp
 */
angular.module('exerciseApp')
  .controller('RegistrationCtrl', ['$scope', '$state', 'Storage', function($scope, $state, Storage) {
   
    $scope.formData = {};

    var bla = function() {
      Storage.users.add({
        'firstName':'Name',
        'lastName':'Surname',
        'email':'a@b.com',
        'carMake':'Honda',
        'carModel':'Civic',
        'carYear':'2015',
        'cardNumber':'291291299129129',
        'cardExpiration':'10/17'
      });
    };

    bla();

    $scope.nextStep = function(isValid, location) {
      if (isValid) {
        if (location === 'personal') {
          $state.go('registration.car');
        } else if (location === 'car') {
          $state.go('registration.payment');
        } else if (location === 'payment') {
          $state.go('registration.thanks');
        }
      }
    };

  }]);
