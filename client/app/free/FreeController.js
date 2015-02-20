(function () {
  'use strict';
  //
  
  angular
  .module('app.free')
  .controller('FreeController', FreeController);

  FreeController.$inject = ['FreeFactory', 'MapFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$interval', '$http'];

  function FreeController(FreeFactory, MapFactory, $scope, $rootScope, $stateParams, $q, $timeout, $interval, $http){
    var vm = this;
    var interval = undefined;
    vm.seqArray = [];

    // for testing - adds 'beep' to each unit
    vm.click = function(string, rowIndex, columnIndex) {
      console.log('clicked!', rowIndex, columnIndex);
      FreeFactory.findUnit(vm.seqArray, rowIndex, columnIndex, function(object) {
        object.sound = string;
      });
      FreeFactory.play(string);
      console.log(vm.seqArray);
    };

    vm.playSequence = function(time) {
      // goes through sequenceArray rows and invoke cycleColumns simultaneously
      // for each row...
      console.log(vm.seqArray);
      interval = $interval(function() {
        for (var i = 0; i < vm.seqArray.length; i++) {
          FreeFactory.cycleColumns(vm.seqArray[i], function(array, object, index) {
            FreeFactory.timeout(object, index, time, function() {
              if (object.sound) {
              console.log(object);
                if (object.sound === 'door_bell') {
                  FreeFactory.play('door_bell');
                } else if (object.sound === 'test') {
                  FreeFactory.play('test');
                }
              }
            });
          });
        }
      }, 4000);
    }; 

    vm.stopSequence = function() {
      if (interval !== undefined) {
        $interval.cancel(interval);
        interval = undefined;
        console.log('sequence stopped!');
      } else {
        console.log('nothing to stop!');
      }
    };

    function init() {
      FreeFactory.createSeqArray(vm.seqArray, 3, 3);
    }

    init();
  }
})();
    

