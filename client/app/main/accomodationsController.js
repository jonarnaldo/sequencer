;(function() {
angular
  .module('app.core')
  .controller('accomodationsController', accomodationsController);

  accomodationsController.$inject = ['$location']

  function accomodationsController ($location) {
    var vm = this;
  }

}).call(this);