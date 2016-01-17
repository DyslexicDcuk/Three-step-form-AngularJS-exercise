'use strict';

/**
 * @ngdoc service
 * @name exerciseApp.CarDB
 * @description
 * # CarDB
 * Factory in the exerciseApp.
 */

angular.module('exerciseApp')
  .factory('CarDB', function () {
    
 
    var make = [{'value':'ALFA', 'title':'Alfa Romeo'},
                {'value':'HONDA', 'title':'Honda'},
                {'value':'CITROEN', 'title':'Citroen'}];

    var models = [{'value':'ALFA', 'models':[{'value':'ALFA164','title':'164'},{'value':'ALFA8C','title':'8C Competizione'}]},
                  {'value':'HONDA', 'models':[{'value':'HONDAACCORD','title':'Accord'},{'value':'HONDACIVIC','title':'Civic'},{'value':'HONDACRZ','title':'CR-Z'}]},
                  {'value':'CITROEN', 'models':[{'value':'CITROENC2','title':'C2'},{'value':'CITROENC4','title':'C4'},{'value':'CITROENC5','title':'C5'}]}];
    
    return {
      getMake: function () {
        return make;
      },

      getModels: function(make) {
        for(var i=0; i<models.length;i++) {
          if(models[i].value === make) return models[i].models;
        }
        return null;
      }
    };

  });
