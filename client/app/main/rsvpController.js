(function() {
angular
  .module('app.core')
  .controller('rsvpController', rsvpController);

  rsvpController.$inject = ['$location','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function rsvpController($location, $scope, $rootScope, $stateParams, $q, $timeout, $http) {
    var vm = this;
    vm.pageClass = 'page-rsvp';

  }

}).call(this);
    

