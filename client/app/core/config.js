;(function () {
'use strict'

angular
  .module('app.core')
  .config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $stateProvider

    .state('freeStuff', {
      url:'/',
      views: {
        'list': {
          templateUrl:'app/free/free.html',
          controller:'FreeController as vm'
        },
        'map': {
          templateUrl:'app/map/map.html',
          controller:'FreeController as vm' 
        },
        'header': {
          templateUrl:'app/header/header.html'
        }
      }
    })

    $locationProvider.html5Mode(true);


    $urlRouterProvider.otherwise('/');

  }
}).call(this)