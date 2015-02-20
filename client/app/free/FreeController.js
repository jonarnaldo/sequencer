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
      console.log(vm.seqArray);
    }

    vm.playSequence = function(time) {
      // goes through sequenceArray rows and invoke cycleColumns simultaneously
      // for each row...
      console.log(vm.seqArray);
      for (var i = 0; i < vm.seqArray.length; i++) {
        FreeFactory.cycleColumns(vm.seqArray[i], function(array, object, index) {
          FreeFactory.timeout(object, index, time, function() {
            console.log(object);
            if (object.hasOwnProperty('sound')) {
              FreeFactory.play();
            }
          })
        })

      }
    }   

    function init() {
      FreeFactory.createSeqArray(vm.seqArray, 3, 3);
    }

    init();
  }
})();
    

