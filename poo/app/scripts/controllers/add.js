'use strict';

angular.module('pooApp').controller('addCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.contributors=[];
$scope.amounts=[];
$scope.invs=[];
var i;
//$scope.done=[];
//$scope.amount=2000;
//$scope.amount=0;

	$scope.add=function(){
		$scope.amounts.push($scope.amt);
		$scope.invs.push($scope.invitee);

			//, "amount": $scope.amount});
		
		//$scope.contributors.push({"email_id":$scope.invitee,"amount":$scope.amt});
		//$scope.amount.push({"amount":$scope.amt});
		//$scope.done.push({"email_id":$scope.invitee,"amount":$scope.amt})
		$scope.invitee='';
		$scope.amt='';
		//$scope.msg='';
		
	};
	$scope.remove=function(index){
	$scope.contributors.splice(index,1);
	$scope.amounts.splice(index,1);
	$scope.invs.splice(index,1);
};

$scope.send1=function(){
	for(i=0;i<$scope.invs.length;i++)
	{
		$scope.contributors.push({"email_id":$scope.invs[i], "amount":$scope.amounts[i]});
	}

	$scope.url=baseurl+'pool/'+window.localStorage['pool_id']+'/contributor/add';
	console.log(window.localStorage['pool_id']);
	$scope.data={
				"contributors": $scope.contributors,
				"authtoken": window.localStorage['authtoken']
				//"msg": $scope.msg
			};
	console.log($scope.data);

			$http.post($scope.url,$scope.data).then(function successCallback(response){
				console.log($scope.url);
				console.log($scope.data);
			console.log(response);
			//$scope.status=response.status;
			//$scope.data=response.data;
			//alert("contributors sent");

			$location.path('/details');
		},

		function errorCallback(response){
			// console.log($scope.url);
			console.log($scope.data);
			console.log(response);
			//$scope.status=response.status;
			//$scope.data=response.data;
}
);
};
});
		