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
      creatMarker: creatMarker,
      map: map
    }

    return services;

    function creatMarker(obj, id) {
      var marker = {
        latitude: obj.location.lat,
        longitude: obj.location.lng,
        id: id,
        options: {
          animation: 'DROP',
          draggable: true
        },
        events: {
          'click': function(Marker, eventName, model, args) {
            console.log(Marker);
          }
        }

      }

      // marker.options = {
      //   draggable: true,
      //   labelContent: obj,
      //   labelAnchor: '100 0',
      //   labelClass: 'marker-labels',
      //   animation: 'DROP'
      // };
      return marker;
    }

    vm.events = {
      'click': function(Marker, eventName, model, args) {
        console.log(model);
      }
    }
  }
})();



