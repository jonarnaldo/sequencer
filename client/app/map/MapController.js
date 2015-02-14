(function () {
  'use strict';
  
  angular
  .module('app.map')
  .controller('MapController', MapController);

  MapController.$inject = ['uiGmapGoogleMapApi','FreeFactory', 'MapFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function MapController(uiGmapGoogleMapApi, FreeFactory, MapFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    $scope.map = { center: { latitude: 37.774929, longitude: -122.419416 }, zoom: 13, bounds: {}    };
    var vm = this;
    vm.markers = [];

    $scope.windowOptions = {
        visible: false
    };   

    $scope.$on('single', function(event, args) {
      vm.markers = [];
      $timeout(function() {
        vm.markers.push(args);
      },100)
    })

    $scope.$on('showAll', function(event, args) {
      vm.markers = vm.temp;
    })

    uiGmapGoogleMapApi.then(function(maps) {
      console.log('ready')
      $scope.$on('markers-complete', function(event, args) {
        vm.markers = MapFactory.map.markers;
        vm.temp = angular.copy(vm.markers);
      })

      $scope.events = {
        "mouseover": function (marker, eventName, model, args) {
          model.show = true;
        },
        "mouseout": function (marker, eventName, model, args) {
          $timeout(function() {
            model.show = false;
          },2000);
        }
      } 
    });
  }
})();
    

