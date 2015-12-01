'use strict';

angular.module('pooApp').controller('userlCtrl', function($scope, $location, $http, localStorageService){
$scope.click1=function(){
	$scope.url=baseurl+"authenticate";
	$scope.data= {
			"email_id": $scope.text3,
			"password": $scope.text4
		};
	
	$http.post($scope.url,$scope.data).then(function successCallback(response){
		    console.log(response.status);
			$scope.status=response.status;
			window.localStorage['authtoken'] = response.data.authtoken;
			authtoken=response.data.authtoken;
			window.localStorage['email_id'] = $scope.text3;
			console.log(window.localStorage['email_id']);
			console.log(window.localStorage['authtoken']);
			console.log(response.data.authtoken);
			$location.path('/list');
			//alert("You are successfully logged off");
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
				$scope.response=response.data.error;
		});
	
	};	


	
//window.location='../../views/secondpg.html';
});