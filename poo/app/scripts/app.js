'use strict';

/**
 * @ngdoc overview
 * @name pooApp
 * @description
 * # pooApp
 *
 * Main module of the application.
 */
angular
  .module('pooApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    //'angular-loading-bar',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'welcomeCtrl'
      })
      /*.service('dataService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
 });
      .config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});*/
      /*.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'*/
      
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      /*.when('/secondpg', {
        templateUrl: 'views/secondpg.html',
        controller: 'SecCtrl'
      })*/
      .when('/userlogin', {
        templateUrl: 'views/userlogin.html',
        controller: 'userlCtrl'
      })
      .when('/usersignup', {
        templateUrl: 'views/usersignup.html',
        controller: 'usersCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        //controller: 'profCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'createCtrl'
      })
      .when('/pool', {
        templateUrl: 'views/pool.html',
        controller: 'poolCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'logoutCtrl'
      })
      .when('/addphone', {
        templateUrl: 'views/addphone.html',
        controller: 'addphoneCtrl'
      })
      .when('/check', {
        templateUrl: 'views/check.html',
        controller: 'checkCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'listCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        //controller: 'listCtrl'
      })
      .when('/verify', {
        templateUrl: 'views/verify.html',
        controller: 'verifyCtrl'
      })
      .when('/forgot', {
        templateUrl: 'views/forgot.html',
        controller: 'forgotCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
