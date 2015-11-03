'use strict';

angular.module('pooApp').controller('addmemberCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.invites=[];

	$scope.addmember1=function(){
		$scope.invites.push({"email_id":$scope.invitee});
		$scope.invitee='';
		
	};
	$scope.remove=function(index){
	$scope.invites.splice(index,1);
};

$scope.send=function(){
	$scope.url='http://188.166.249.229:8080/'+window.localStorage['event_id']+"/invite";

	$scope.data={
		"authtoken": window.localStorage['authtoken'],
				"invites": $scope.invites
			};

			$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
			alert("invites sent");

			$location.path('/list');
		},

		function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
}
);
};
});
		