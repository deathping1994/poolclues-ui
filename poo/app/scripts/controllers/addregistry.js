'use strict';

angular.module('pooApp').controller('addregistryCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.invites=[];
//$scope.amounts=[];
//$scope.done=[];
//$scope.amount=2000;
//$scope.amount=0;

	$scope.addregistry=function(){
		$scope.invites.push({"email_id":$scope.invitee});
		//$scope.amounts.push({"amount":$scope.amt});
		
			//, "amount": $scope.amount});
		
		//$scope.contributors.push({"email_id":$scope.invitee,"amount":$scope.amt});
		//$scope.amount.push({"amount":$scope.amt});
		//$scope.done.push({"email_id":$scope.invitee,"amount":$scope.amt})
		$scope.invitee='';
		
	};
	$scope.remove=function(index){
	$scope.invites.splice(index,1);
	};

$scope.send1=function(){
	$scope.url=baseurl+'registry/'+window.localStorage['registry_id']+'/invite';

	$scope.data={
				"invites": $scope.invites,
				"authtoken": window.localStorage['authtoken'],
				//"msg": $scope.msg
			};

			$http.post($scope.url,$scope.data).then(function successCallback(response){
				console.log($scope.url);
				console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
			//alert("contributors sent");

			$location.path('/list');
		},

		function errorCallback(response){
			console.log($scope.url);
			console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
}
);
};
});
		