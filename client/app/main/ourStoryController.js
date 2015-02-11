;(function() {
angular
  .module('app.core')
  .controller('ourStoryController', ourStoryController);

  ourStoryController.$inject = ['$location']

  function ourStoryController ($location) {
    var vm = this;
  }

}).call(this);