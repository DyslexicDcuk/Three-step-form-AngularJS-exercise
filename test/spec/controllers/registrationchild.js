'use strict';

describe('Controller: RegistrationchildCtrl', function () {

  // load the controller's module
  beforeEach(module('exerciseApp'));

  var RegistrationchildCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationchildCtrl = $controller('RegistrationchildCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistrationchildCtrl.awesomeThings.length).toBe(3);
  });
});
