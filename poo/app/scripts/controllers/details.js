'use strict';

angular.module('pooApp').controller('detailsCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.messages=[];
$scope.comments=[];	

$scope.post=function(){
		$scope.messages.push($scope.msg);
		$scope.msg='';
		
	};

$scope.comment=function(){
		$scope.comments.push($scope.cmnt);
		$scope.cmnt='';
		
	};

$scope.rem1=function(index){
	$scope.messages.splice(index,1);
};
$scope.rem2=function(index){
	$scope.comments.splice(index,1);
};
		
$scope.details=function(){
		//$scope.data=window.localStorage['authtoken'];
		//var $index=0;
		$scope.url=baseurl+"pool/"+window.localStorage['pool_id'];
		$scope.data={"authtoken":window.localStorage['authtoken']};
		//$scope.poollist=[];
		//$scope.data1={"authtoken":window.localStorage['authtoken']};
		console.log($scope.data);
	$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log(response);
			
			$scope.pool_name=response.data.pool_name;
			$scope.pool_id=response.data.pool_id;
			$scope.pool_description=response.data.pool_description;
			$scope.target_amount=response.data.target_amount;
			$scope.target_date=response.data.target_date;

			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//alert($scope.status);
});
	//$location.path='/';
};
});