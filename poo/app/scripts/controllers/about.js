'use strict';

/**
 * @ngdoc function
 * @name pooApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooApp
 */
angular.module('pooApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
