(function() {
angular
  .module('app.core')
  .controller('eventsController', eventsController);

  eventsController.$inject = ['$location','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function eventsController($location, $scope, $rootScope, $stateParams, $q, $timeout, $http) {
    var vm = this;
    vm.events = [];

    var addresses = [
      {
        name: 'Cinnabar Hills',
        address: '5111 San Felipe Road, San Jose, CA 95135',
        contact: '(408) 223-1770',
        url: 'https://www.google.com/maps/place/Cinnabar+Hills+Golf+Club/@37.169371,-121.751488,17z/data=!3m1!4b1!4m2!3m1!1s0x808e25b33f5a6939:0x1278219d99934af2'
      },
      {
        name: 'St.Francis of Assisi',
        address: '23600 McKean Rd San Jose, CA 95141',
        contact: '(408) 323-5200',
        url: 'https://www.google.com/maps/place/St+Francis+of+Assisi/@37.293953,-121.767537,17z/data=!3m1!4b1!4m2!3m1!1s0x808e2dcc7cef3917:0x7f82c881f88e9723'
      }
    ];

    angular.forEach(addresses, function (address, index) {
      $timeout(function () {
        vm.events.push(address);
      }, (index + 1) * 300);
    })
  }

}).call(this);
    

