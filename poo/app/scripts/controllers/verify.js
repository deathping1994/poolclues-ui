'use strict';

angular.module('pooApp').controller('verifyCtrl', function($scope, $location, $http, localStorageService){
$scope.verify=function(){
/*$http({
	method: 'POST',
	url: "http://188.166.249.229:8080/authenticate"
}).then(function successCallback(response) {
	console.log(response.status);
			$scope.status=response.status;
			$location.path='/profile';
},
function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
});
};
});*/

	$scope.url=baseurl+window.localStorage['email_id']+"/verify";
	$scope.data= {
			"authtoken": window.localStorage['authtoken'],
			"verification_code": $scope.verification_code
		};
	
	$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log($scope.data);
		    console.log(response);
			$scope.status=response.status;
			/*window.localStorage['authtoken'] = response.data.authtoken;
			window.localStorage['email_id'] = $scope.text3;
			console.log(window.localStorage['email_id']);
			console.log(window.localStorage['authtoken']);
			console.log(response.data.authtoken);
			alert("You are successfully logged in!")
			$location.path('/profile');
			//alert("You are successfully logged off");*/
		},
		function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			$scope.response=response.data.error;
			//alert("Wrong password");
});
	
	};	
	
//window.location='../../views/secondpg.html';
});