'use strict';
/**
 * @ngdoc function
 * @name exerciseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exerciseApp
 */
angular.module('exerciseApp')
  .controller('MainCtrl', ['$scope','Storage', function($scope, Storage) {
  
  	$scope.users = Storage.users.get();

  }]);
