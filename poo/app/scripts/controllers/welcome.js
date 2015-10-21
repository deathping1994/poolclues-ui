'use strict';

/**
 * @ngdoc function
 * @name pooApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pooApp
 */
angular.module('pooApp').controller('welcomeCtrl', function($scope, $location){ //put $http & alert
    
$scope.dropdownlist=function(){
       $scope.visible="true";
/*  $http.post($scope.url).success(function(response) {
        //$scope.stuff=data;
        //console.log($scope.stuff);
    }).error(function () {
        
        //console.log(response.status);
            //$scope.status=response.status;
        });*/
            
            //alert($scope.status);
};
    //$location.path='/';
});