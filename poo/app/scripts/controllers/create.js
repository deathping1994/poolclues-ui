'use strict';

angular.module('pooApp').controller('createCtrl', function($scope, $location){ //put $http & $routeParams
$scope.click=function(){
	if($scope.choose==='p')
{$location.path('/pool');}
else if($scope.choose==='r')
{$location.path('/registry');}

};
});