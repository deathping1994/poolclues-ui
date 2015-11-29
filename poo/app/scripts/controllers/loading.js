'use strict';

angular.module('pooApp').controller('loadingCtrl', function($scope, $location, $http, localStorageService){
	$scope.fblogin=function(){
	$scope.url=baseurl+"fblogin";

	$scope.data={
				   "fbtoken":window.localStorage['authresponse'],
				   "first_name": window.localStorage['first_name'],
		           "middle_name":"",
		           "last_name": window.localStorage['last_name'],
		           "email_id":window.localStorage['email_id'],
		           "password":"",  
		           "house_no":"",
		           "street":"",
		           "city":"",
		           "state":"",
		           "country":"",
		           "phone":"",     
		           "user_img":window.localStorage['img'],
		           "fbtoken":window.localStorage['authresponse']
		        };
		        console.log(fbflag);
		        console.log($scope.data);
	if(fbflag == 1){
	$http.post($scope.url,$scope.data).then(function successCallback(response){
		    console.log(response.status);
			$scope.status=response.status;
			window.localStorage['authtoken'] = response.data.authtoken;
			console.log(window.localStorage['authtoken']);
			console.log(response.data.authtoken);
			$location.path('/profile');
			//alert("You are successfully logged off");
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
	});
	}
	
	};
});	