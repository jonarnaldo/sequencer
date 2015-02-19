(function () {
  'use strict';
  //
  
  angular
  .module('app.free')
  .controller('FreeController', FreeController);

  FreeController.$inject = ['FreeFactory', 'MapFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$interval', '$http'];

  function FreeController(FreeFactory, MapFactory, $scope, $rootScope, $stateParams, $q, $timeout, $interval, $http){
    var vm = this;
    vm.seqArray = [];

    // for testing - adds 'beep' to each unit
    vm.click = function(object, rowIndex, columnIndex) {
      console.log('clicked!', rowIndex, columnIndex);
      FreeFactory.findUnit(vm.seqArray, rowIndex, columnIndex, function(object) {
        object.sound = "sound";
      });
      FreeFactory.play();
    }


    vm.playSequence = function() {
      // goes through sequenceArray rows and invoke cycleColumns simultaneously
      // for each row...
      for (var i = 0; i < vm.seqArray.length; i++) {
        console.log(vm.seqArray[i]);
      }
    }   

    function init() {
      FreeFactory.createSeqArray(vm.seqArray, 3, 3);
      console.log(vm.seqArray);
    }

    init();
  }
})();
    

