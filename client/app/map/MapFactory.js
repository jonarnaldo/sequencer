(function() {

  angular
  .module('app.map')
  .factory('MapFactory', MapFactory);

  function MapFactory($http, $q, $timeout){
    var places, events, things;
    var map = {
      markers: []
    };

    var services = {
      createMarker: createMarker,
      map: map
    }
    
    return services;

    function createMarker(obj, id) {
      var marker = {
        latitude: obj.location.lat,
        longitude: obj.location.lng,
        id: id,
        show: false,
        title: obj.name,
        type: obj.type,
        link: obj.href,
        draggable: true
      }
      marker.getWindow = function () {
        console.log('clicked');
        marker.show = true;
      }
      return marker;
    }
  }
})();



