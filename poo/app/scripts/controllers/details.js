'use strict';

angular.module('pooApp').controller('detailsCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert
	
$scope.details=function(){
		//$scope.data=window.localStorage['authtoken'];
		//var $index=0;
		$scope.url="http://188.166.249.229:8080/"+window.localStorage['email_id']+"/event/list";
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