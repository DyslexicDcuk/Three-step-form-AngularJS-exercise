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
 
      cache: {
        get: function() {
          return JSON.parse(window.localStorage.getItem('userCache'));
        },
        set: function(formData) {
          window.localStorage.setItem('userCache', JSON.stringify(formData));
          return;
        },
        delete: function() {
          window.localStorage.removeItem('userCache');
          return;
        }
      }
    };
  });
