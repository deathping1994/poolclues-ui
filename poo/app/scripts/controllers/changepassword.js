'use strict';

angular.module('pooApp').controller('changepasswordCtrl', function($scope, $location, $http, localStorageService){
$scope.changepassword=function(){

	$scope.url=baseurl+window.localStorage['email_id']+"/change/password/2";
	$scope.data= {
			"authtoken": window.localStorage['authtoken'],
        	"new_password":$scope.new_password
		};
	console.log($scope.data);
	$http.post($scope.url,$scope.data).then(function successCallback(response){
			
		    console.log(response);
			$scope.status=response.status;
			alert(response.data.success);
			/*window.localStorage['authtoken'] = response.data.authtoken;
			window.localStorage['email_id'] = $scope.text3;
			console.log(window.localStorage['email_id']);
			console.log(window.localStorage['authtoken']);
			console.log(response.data.authtoken);
			alert("You are successfully logged in!")*/
			$location.path('/profile');
			//alert("You are successfully logged off");
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//alert("Wrong password");
});
	
	};	
	
//window.location='../../views/secondpg.html';
});