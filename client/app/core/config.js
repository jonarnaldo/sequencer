;(function () {
'use strict'

angular
  .module('app.core')
  .config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $stateProvider

    .state('main', {
      views: {
        'nav@': {
          templateUrl: '/app/main/nav.html',
          controller: 'navController as vm'
        }
      }
    })

    .state('home', {
      url: '/',
      templateUrl: '/app/main/home.html',
      controller: 'homeController as vm'
    })

    .state('rsvp', {
      url: '/rsvp',
      templateUrl: '/app/main/rsvp.html',
      controller: 'rsvpController as vm'
    })    

    .state('ourStory', {
      url: '/ourStory',
      templateUrl: '/app/main/ourStory.html',
      controller: 'ourStoryController as vm'
    })    

    .state('events', {
      url: '/events',
      templateUrl: '/app/main/events.html',
      controller: 'eventsController as vm'
    })    

    .state('accomodations', {
      url: '/accomodations',
      templateUrl: '/app/main/accomodations.html',
      controller: 'accomodationsController as vm'
    })    

    .state('registry', {
      url: '/registry',
      templateUrl: '/app/main/registry.html',
      controller: 'registryController as vm'
    })

    $locationProvider.html5Mode(true);


    $urlRouterProvider.otherwise('/');

  }
}).call(this)