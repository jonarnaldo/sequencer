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
      FreeFactory.getFree('places',function(places){
        angular.forEach(places, function(place,index) {
          console.log('place')
          vm.free.push(place);         
        })

        FreeFactory.getFree('events', function(events) {
          angular.forEach(events, function(event,index) {
            console.log('event')
            vm.free.push(event);      
            angular.forEach(vm.free, function(item, index) {
              vm.markers.push(MapFactory.creatMarker(item, index))                           
            });
          })          
        })
      })
    }

    $timeout(function() {
      init();
    },400);  
  }
})();
    

