(function() {

  angular
  .module('app.free')
  .factory('FreeFactory', FreeFactory);

  function FreeFactory($http, $q, $timeout){

    var services = {
      getFree: getFree
    }

    return services;

    function getFree(type, cb) {
      console.log('getting data...');
      $http.get('/' + type).success(function(data, status, headers, config) {
        console.log('data received', type);
        cb(data)
      }).error(function (data, status, headers, config) {
        console.log('Error! ', status);
      })
    }

    
  }
})();



