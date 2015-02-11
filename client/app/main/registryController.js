;(function() {
angular
  .module('app.core')
  .controller('registryController', registryController);

  registryController.$inject = ['$location']

  function registryController ($location) {
    var vm = this;
  }

}).call(this);