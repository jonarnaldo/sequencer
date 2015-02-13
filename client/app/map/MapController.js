(function () {
  'use strict';
  
  angular
  .module('app.map')
  .controller('MapController', MapController);

  MapController.$inject = ['FreeFactory', 'MapFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function MapController(FreeFactory, MapFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    $scope.map = { center: { latitude: 37.774929, longitude: -122.419416 }, zoom: 12, bounds: {}    };
    var vm = this;
    vm.markers = null;

    $scope.$watch(function() {
      // console.log(MapFactory.map.markers);
      return MapFactory.map.markers;
    }, function (newValue, oldValue) {
      vm.markers = MapFactory.map.markers;
    })

    vm.events = {
      'click': function(Marker, eventName, model, args) {
        console.log(model);
      }
    }
  }
})();
    

