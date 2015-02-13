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

    uiGmapGoogleMapApi.then(function(maps) {
      console.log('ready')
      $scope.$on('markers-complete', function(event, args) {
        vm.markers = MapFactory.map.markers;
      })

      vm.getWindow = function () {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
      }

      vm.events = [
        {
          'click': function(marker, eventName, model, args) {
            console.log('mouse over');
          }
        }
      ];

    });
  }
})();
    

