'use strict';
/**
 * @ngdoc function
 * @name exerciseApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the exerciseApp
 */
angular.module('exerciseApp')
  .controller('RegistrationCtrl', ['$scope', '$state', function($scope, $state) {
    
    $scope.formData = {};

    $scope.submitForm = function() {
      // check to make sure the form is completely valid
      if ($scope.userForm.$valid) {
        window.alert('our form is amazing');
      }
    };

    $scope.nextStep = function(isValid, location) {
      if(isValid) {
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
