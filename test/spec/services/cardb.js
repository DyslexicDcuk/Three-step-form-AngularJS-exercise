'use strict';

describe('Service: CarDB', function () {

  // load the service's module
  beforeEach(module('exerciseApp'));

  // instantiate service
  var CarDB;
  beforeEach(inject(function (_CarDB_) {
    CarDB = _CarDB_;
  }));

  it('should do something', function () {
    expect(!!CarDB).toBe(true);
  });

});
