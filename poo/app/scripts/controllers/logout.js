'use strict';

angular.module('pooApp').controller('logoutCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert
	
$scope.logout=function(){
		$scope.data={"authtoken":window.localStorage['authtoken']};

		$scope.url="http://188.166.249.229:8080/logout/"+window.localStorage['email_id'];
		console.log($scope.data);
		$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			window.localStorage['authtoken']="";
			//window.localStorage['event_id']="";
			window.localStorage['email_id']="";
			//$scope.print("You've been successfully logged off");
			//alert("You've successfully been logged out");
			$location.path('/');
			console.log(response.data.success);
			//console.log(window.localStorage['email_id']);
			
			//console.log(window.localStorage['authtoken']);

		},
		function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			$scope.response=response.data.error;
			//alert($scope.status);
});
};	//$location.path='/';
});
