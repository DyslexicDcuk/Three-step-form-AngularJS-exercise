'use strict';

describe('Controller: RegistrationCtrl', function () {

  // load the controller's module
  beforeEach(module('exerciseApp'));

  var $controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe('car options', function() {
    var $scope, controller;
    beforeEach(function() {
      $scope = {};
      controller = $controller('RegistrationCtrl', { $scope: $scope });
    });

    it('should return lenght of carMakeOptions saved in CarDB', function () {
      expect($scope.carMakeOptions.length).toBe(3);
    });

    it('should change carModelOptions depending on carMake seleciton', function() {
      $scope.formData.carMake = {'value':'ALFA'};
      $scope.onCarMakeChange();
      expect($scope.carModelOptions.length).toBe(2);

      $scope.formData.carMake = {'value':'HONDA'};
      $scope.onCarMakeChange();
      expect($scope.carModelOptions.length).toBe(3);

      $scope.formData.carMake = {'value':'CITROEN'};
      $scope.onCarMakeChange();
      expect($scope.carModelOptions.length).toBe(4);

      $scope.formData.carMake = {'value':'banana'};
      $scope.onCarMakeChange();
      expect($scope.carModelOptions).toBe(null);
    })
  });

  describe('setting form state and validity', function() {
    var $scope, controller;
    beforeEach(function() {
      $scope = {};
      controller = $controller('RegistrationCtrl', { $scope: $scope });
    });

    it('should change form state', function() {
      $scope.formData = { 'firstName': 'Damir', 'lastName': 'Šehić' };
      $scope.saveFormState('personal', false);
      expect(JSON.parse(localStorage.getItem('userCache'))).toEqual({'firstName': 'Damir', 'lastName': 'Šehić','lastInvalidStep':'registration.personal'});
      
      $scope.formData = { 'firstName': 'Damir', 'lastName': 'Šehić', 'email':'dsehic@gmail.com' };
      $scope.saveFormState('personal', true);
      expect(JSON.parse(localStorage.getItem('userCache'))).toEqual({'firstName': 'Damir', 'lastName': 'Šehić','email':'dsehic@gmail.com','lastInvalidStep':'registration.car'});
    });

    it('should change state validity in localstorage', function () {
      $scope.formData = {};

      $scope.saveFormState('personal', false);
      expect(JSON.parse(localStorage.getItem('userCache'))).toEqual({'lastInvalidStep':'registration.personal'});
    
      $scope.saveFormState('personal', true);
      $scope.saveFormState('car', true);
      expect(JSON.parse(localStorage.getItem('userCache'))).toEqual({'lastInvalidStep':'registration.payment'});
    
      $scope.saveFormState('personal', true);
      $scope.saveFormState('car', false);
      expect(JSON.parse(localStorage.getItem('userCache'))).toEqual({'lastInvalidStep':'registration.car'});
    });
});
