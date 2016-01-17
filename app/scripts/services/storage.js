'use strict';
/**
 * @ngdoc service
 * @name exerciseApp.storage
 * @description
 * # storage
 * Factory in the exerciseApp.
 */
angular.module('exerciseApp')
  .factory('Storage', function() {
    
    var stateValidity = {};
    var lastInvalidStep = function() {
      if (!stateValidity.personal) return 'registration.personal';
      else if (!stateValidity.car) return 'registration.car';
      else return 'registration.payment';
    };

    return {
      users: {
        get: function() {
          return JSON.parse(window.localStorage.getItem('users'));
        },
        add: function(user) {
          var users = JSON.parse(window.localStorage.getItem('users')) || [];
          users.push(user);
          window.localStorage.setItem('users', JSON.stringify(users));
          return;
        }
      },
      
      formState: {
        get: function() {
          stateValidity = JSON.parse(window.localStorage.getItem('stateValidity')) || 
          {
            'personal': false,
            'car': false,
            'payment': false
          };

          return JSON.parse(window.localStorage.getItem('userCache')) || {
            'lastInvalidStep': 'registration.personal'
          };
        },
        set: function(formData, formName, isValid) {
          stateValidity[formName] = isValid;
          formData.lastInvalidStep = lastInvalidStep();
          window.localStorage.setItem('stateValidity', JSON.stringify(stateValidity));
          window.localStorage.setItem('userCache', JSON.stringify(formData));
          return;
        },
        delete: function() {
          window.localStorage.removeItem('stateValidity');
          window.localStorage.removeItem('userCache');
          return;
        }
      },

      getStateValidity: function(stateName) {
        if(stateName === 'car') return !stateValidity.personal;
        else if(stateName === 'payment') return !(stateValidity.personal && stateValidity.car);
        else return false;
        return stateValidity;
      }
    };
  });
