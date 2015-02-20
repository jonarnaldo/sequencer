(function () {
  'use strict';
  //
  
  angular
  .module('app.free')
  .controller('FreeController', FreeController);

  FreeController.$inject = ['FreeFactory', '$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$interval', '$http'];

  function FreeController(FreeFactory, $scope, $rootScope, $stateParams, $q, $timeout, $interval, $http){
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
                if (object.sound === 'kick') {
                  FreeFactory.play('kick');
                }  
                
                if (object.sound === 'snare') {
                  FreeFactory.play('snare');
                } 

                if (object.sound === 'high_hat') {
                  FreeFactory.play('high_hat');
                }
              }
            });
          });
        }
      }, time * vm.seqArray[0].length);
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

    vm.clearSequence = function() {
      FreeFactory.createSeqArray(vm.seqArray, 3, 8);
    }

    function init() {
      FreeFactory.createSeqArray(vm.seqArray, 3, 8);
      console.log(vm.seqArray);
    }

    init();
  }
})();
    

