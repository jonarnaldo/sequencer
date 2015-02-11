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
    vm.markers = [];

    vm.events = {
      'click': function(Marker, eventName, model, args) {
        console.log(Marker);
      }
    }

    vm.markers.options = {
      draggable: true,
      animation: 'DROP'
    }

    $scope.map = { center: { latitude: 37.774929, longitude: -122.419416 }, zoom: 13, bounds: {} };

    function init() {
      FreeFactory.getFree('places').then(function(places){
        vm.free = places;
        return places;
      }).then(function(places) {
        FreeFactory.getFree('events').then(function(events) {
          var tempEvents = events, tempPlaces = places;
          vm.free = events.concat(places);
          // add marker to map
          angular.forEach(vm.free, function (item, index) {
            vm.markers.push(MapFactory.creatMarker(item, index));
          })
          console.log('markers',vm.markers.length, vm.free.length);
          console.log(vm.free);
        })
      })
    }

    init();  
  }
})();
    

