;(function() {
angular
  .module('app.core')
  .controller('navController', navController);

  navController.$inject = ['$location']

  function navController ($location) {
    var vm = this;
  }

}).call(this);