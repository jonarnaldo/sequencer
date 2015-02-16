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

    vm.createSeqArray = function(rows, columns) {
      //create rows
      for (var i = 0; i < rows; i++) {
        vm.seqArray.push([]);
        for (var j = 0; j < columns; j++) {
          vm.seqArray[i].push({});
        }
      }
      console.log(vm.seqArray);
    }


    function timeout(object, index, time) {
      $timeout(function() {
        console.log(object);
      }, (index + 1) * time);
    }

    // cycles through a single row's columns
    vm.cycleColumns = function(row) {
      var row = vm.seqArray[row];
      for (var i = 0; i < row.length; ++i) {
        timeout(row[i], i, 2000);
      }
    }

    // cycles through entire array
    vm.cycleSeqArray = function(cb) {
      angular.forEach(vm.seqArray, function(row, rowIndex) {
        angular.forEach(row, function(col, colIndex) {
          cb(rowIndex, colIndex, col);
        })
      })
    }

    // for testing - adds 'beep' to each unit
    vm.beep = function(object, rIndex, cIndex) {
      vm.cycleSeqArray(function(rowIndex, colIndex, col) {
        if (rowIndex === rIndex && colIndex === cIndex) { col.beep = object; }
      })
      console.log(vm.seqArray)
    }

    vm.playSequence = function() {
      // goes through sequenceArray rows and fired cycleColumns simultaneously
      // for each row... 
      vm.cycleColumns(0);
    }

    vm.init = function() {
      vm.createSeqArray(3,3);
    }

    vm.init();
  }
})();
    

