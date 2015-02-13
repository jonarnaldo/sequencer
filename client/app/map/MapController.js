(function () {
  'use strict';
  
  angular
  .module('app.map')
  .controller('MapController', MapController);

  MapController.$inject = ['FreeFactory', 'MapFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function MapController(FreeFactory, MapFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    $scope.map = { center: { latitude: 37.774929, longitude: -122.419416 }, zoom: 12, bounds: {}    };
    var vm = this;
    vm.markers = [];

    // $scope.$watch(function() {
    //   return MapFactory.map.markers;
    // }, function (newValue, oldValue) {
    //   if (typeof newValue !== 'undefined') {
    //     vm.markers = MapFactory.map.markers;
    //   }
    // })

    $scope.$on('markers-complete', function(event, args) {
      vm.markers = MapFactory.map.markers;
    })

    vm.events = {
      'mouseover': function(Marker, eventName, model, args) {
        console.log(model.options.labelContent.name);
      }
    }
  }
})();
    

