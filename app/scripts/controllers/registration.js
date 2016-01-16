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
    $scope.personalSubmitted = true;
    $scope.submitForm = function() {
      // check to make sure the form is completely valid
      if ($scope.userForm.$valid) {
        window.alert('our form is amazing');
      }
    };
    
    $scope.nextStep = function(isValid, location) {
      console.log(isValid, location);
      if (location === 'personal') {
        if (isValid) $state.go('registration.car');
      } else if (location === 'car') {
        if (isValid) $state.go('registration.payment');
      } else if (location === 'payment') {
        if (isValid) $state.go('registration.thanks');
      }
    };

  }]);
