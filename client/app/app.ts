'use strict';

angular.module('buildAStoryApp', [
  'buildAStoryApp.auth',
  'buildAStoryApp.admin',
  'buildAStoryApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
