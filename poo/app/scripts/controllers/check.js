'use strict';

angular.module('pooApp').controller('checkCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert
	
$scope.check=function(){
		//$scope.data=window.localStorage['authtoken'];

		$scope.url="http://188.166.249.229:8080/event/";


	$http.post($scope.url).then(function successCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			$scope.data.event_id=response.data.event_id;
			$scope.data.event_description=response.data.event_description;
			$scope.data.event_name=response.data.event_name;
			$scope.data.target_amount=response.data.target_amount;
			$scope.data.target_date=response.data.target_date;
			//alert("You've successfully been logged out");
			$location.path('/');
		},
		function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//alert($scope.status);

/*	$http.post($scope.url).success(function(response) {
		//$scope.stuff=data;
		//console.log($scope.stuff);
	}).error(function () {
		
		//console.log(response.status);
			//$scope.status=response.status;
		});*/
			
			//alert($scope.status);
});
	//$location.path='/';
};

});
