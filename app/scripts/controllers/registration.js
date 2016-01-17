'use strict';
/**
 * @ngdoc function
 * @name exerciseApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the exerciseApp
 */
angular.module('exerciseApp')
  .controller('RegistrationCtrl', ['$scope', '$state', 'Storage', 'CarDB', 
    function($scope, $state, Storage, CarDB) {

    $scope.formData = Storage.formState.get();
    $state.go($scope.formData.lastInvalidStep);

    $scope.carMakeOptions = CarDB.getMake();

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
          $state.go('thanks');
        }
      }
    };

    $scope.checkValidity = function(stateName) {
      return Storage.getStateValidity(stateName);
    };

    $scope.onCarMakeChange = function() {
      $scope.carModelOptions = CarDB.getModels($scope.formData.carMake.value);
    };
    if(typeof $scope.formData.carMake !== 'undefined') $scope.onCarMakeChange();

  }]);
