'use strict';

/**
 * @ngdoc function
 * @name pooApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pooApp
 */
// angular.module('pooApp').controller('welcomeCtrl', function($scope, $location){ //put $http & alert
    
// $scope.dropdownlist=function(){
//        $scope.visible="true";
//   $http.post($scope.url).success(function(response) {
//         //$scope.stuff=data;
//         //console.log($scope.stuff);
//     }).error(function () {
        
//         //console.log(response.status);
//             //$scope.status=response.status;
//         });
            
//             //alert($scope.status);
// };
//     //$location.path='/';
// });

angular.module('pooApp').controller('welcomeCtrl', function ($scope, $log) {
  /*$scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];*/

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});