(function() {
angular
  .module('app.core')
  .controller('homeController', homeController);

  homeController.$inject = ['$location','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function homeController($location, $scope, $rootScope, $stateParams, $q, $timeout, $http) {
    var vm = this;

  }

}).call(this);
    

