;(function () {
'use strict'

angular
  .module('app.core')
  .config(config);

  function config(uiGmapGoogleMapApiProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $stateProvider

    .state('freeStuff', {
      url:'/',
      views: {
        'list': {
          templateUrl:'app/free/free.html',
          controller:'FreeController as vm'
        },
        'header': {
          templateUrl:'app/header/header.html'
        }
      }
    })

    $locationProvider.html5Mode(true);


    $urlRouterProvider.otherwise('/');

    uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });

  }
}).call(this)