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
		$scope.url="http://api.poolclues.anip.xyz:8080/event/"+window.localStorage['event_id'];
		//$scope.eventlist=[];
		//$scope.data1={"authtoken":window.localStorage['authtoken']};

	$http.post($scope.url).then(function successCallback(response){
			console.log(response);
			
			$scope.event_name=response.data.event_name;
			$scope.event_id=response.data.event_id;
			$scope.event_description=response.data.event_description;
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