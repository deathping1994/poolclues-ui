'use strict';

angular.module('pooApp').controller('addphoneCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

	//window.localStorage['phone']=$scope.phone;
	
	//$scope.url="http://188.166.249.229:8080//addphone/";
	
	
	$scope.addphone=function(){

		$scope.url=baseurl+window.localStorage['email_id']+"/addphone/"+$scope.phone;
		$scope.data={"authtoken":window.localStorage['authtoken']};
		console.log($scope.phone);
		console.log(window.localStorage['authtoken']);
		$http.post($scope.url,$scope.data).then(function successCallback(response){

			console.log(response.status);
			$scope.status=response.status;
			//alert("You've successfully been logged out");
			
			$location.path('/list');
			console.log("No. added successfully");
			
		},
		function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			$scope.response=response.data.error;
			//alert($scope.status);
});
};
});

	
