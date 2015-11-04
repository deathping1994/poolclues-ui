'use strict';

angular.module('pooApp').controller('addCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.invites=[];
$scope.amount=0;

	$scope.add=function(){
		$scope.invites.push({"email_id":$scope.invitee});
		$scope.amount.push({"amount":$scope.amt});
		$scope.done.push({"email_id":$scope.invitee,"amount":$scope.amt})
		$scope.invitee='';
		$scope.amount='';
		
	};
	$scope.remove=function(index){
	$scope.invites.splice(index,1);
};

$scope.send=function(){
	$scope.url='http://188.166.249.229:8080/'+window.localStorage['event_id']+"/invite";

	$scope.data={
				"invites": $scope.done,
				"authtoken": window.localStorage['authtoken']
				
			};

			$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
			alert("invites sent");

			$location.path('/list');
		},

		function errorCallback(response){
			console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
}
);
};
});
		