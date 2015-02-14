(function () {
  'use strict';
  //
  
  angular
  .module('app.free')
  .controller('FreeController', FreeController);

  FreeController.$inject = ['FreeFactory', 'MapFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function FreeController(FreeFactory, MapFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    var vm = this;
    vm.free = [];

    vm.select = function(obj) {
      var single = MapFactory.createMarker(obj,1);
      $rootScope.$broadcast('single', single);
    }

    vm.deselect = function() {
      $rootScope.$broadcast('showAll');
    }


    // creates list and markers
    function init() {
      FreeFactory.getFree('places',function(places){
        angular.forEach(places, function(place,index) {
          vm.free.push(place); 
          MapFactory.map.markers.push(MapFactory.createMarker(place, index));        
        })
        FreeFactory.getFree('events', function(events) {
          angular.forEach(events, function(event,index) {
            vm.free.push(event);
            MapFactory.map.markers.push(MapFactory.createMarker(event, index));              
          })          
          console.log('done');
          $rootScope.$broadcast('markers-complete', MapFactory.map.markers);
        })
      })
    }

    init(); 
  }
})();
    

