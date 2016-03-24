'use strict';

angular.module('buildAStoryApp.auth', [
  'buildAStoryApp.constants',
  'buildAStoryApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
