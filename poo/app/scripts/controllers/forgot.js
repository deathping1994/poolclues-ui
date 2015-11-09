'use strict';

angular.module('pooApp').controller('forgotCtrl', function($scope, $location, $http, localStorageService){
$scope.forgot=function(){
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

	$scope.url=baseurl+"forgotpassword/"+$scope.mail;
	
	
	$http.post($scope.url).then(function successCallback(response){
		    console.log(response);
			$scope.status=response.status;
			
			alert(response.success)
			//$location.path('/profile');
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