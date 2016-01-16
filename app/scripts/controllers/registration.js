'use strict';
/**
 * @ngdoc function
 * @name exerciseApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the exerciseApp
 */
angular.module('exerciseApp')
  .controller('RegistrationCtrl', ['$scope', function($scope) {

    $scope.formData = {};

    $scope.processForm = function() {
      window.alert('wee!');
    };

  }]);
