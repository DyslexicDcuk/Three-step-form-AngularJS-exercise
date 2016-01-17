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

    $scope.formData = Storage.formState.get();
    $state.go($scope.formData.lastInvalidStep);

    $scope.saveFormState = function(formName, isValid) {
      Storage.formState.set($scope.formData, formName, isValid);
    };

    $scope.nextStep = function(isValid, location) {
      if (isValid) {
        if (location === 'personal') {
          $state.go('registration.car');
        } else if (location === 'car') {
          $state.go('registration.payment');
        } else if (location === 'payment') {
          delete $scope.formData.lastInvalidStep;
          Storage.users.add($scope.formData);
          Storage.formState.delete();
          $scope.formData = {};
          $state.go('registration.thanks');
        }
      }
    };

    $scope.checkValidity = function(stateName) {
      return Storage.getStateValidity(stateName);
    };

  }]);
