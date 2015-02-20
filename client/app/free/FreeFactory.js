(function() {

  angular
  .module('app.free')
  .factory('FreeFactory', FreeFactory);

  function FreeFactory($http, $q, $timeout){

    var services = {
      play: play,
      createSeqArray: createSeqArray,
      cycleColumns: cycleColumns,
      findUnit: findUnit,
      timeout: timeout
    }

    ion.sound({
      sounds: [
        {
          name: "test",
          volume: 0.5,
          preload: false
        }
      ],
      volume: 0.5,
      path: "sounds/",
      preload: true
    });

    function play () {
      console.log('playing test');
      ion.sound.play("test");
    }

    function createSeqArray(array, rows, columns) {
      //create rows
      for (var i = 0; i < rows; i++) {
        array.push([]);
        for (var j = 0; j < columns; j++) {
          array[i].push({});
        }
      }
    }

    function findUnit(array, r, c, cb) {
      cb(array[r][c]);
    }

    // cycles through a single row's columns
    function cycleColumns(row, cb) {
      for (var i = 0; i < row.length; i++) {
        cb(row, row[i], i)
      }
    } 

    function timeout(object, index, time, cb) {
      $timeout(function() {
        cb(object);
      }, index * time);
    }

    return services;
  
  }
})();



