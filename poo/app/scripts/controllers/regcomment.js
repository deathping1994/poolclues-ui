'use strict';

angular.module('pooApp').controller('regcommentCtrl', function($scope, $location, $route, $http, localStorageService){ //put $http & alert
$scope.cmnts=[];
	$scope.commentdisplay=function(){
		$scope.url=baseurl+window.localStorage['registry_id']+"/post/"+window.localStorage['regpost_id'];
		$scope.data={"authtoken":window.localStorage['authtoken']};
		console.log($scope.url);
		$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log(response);
			$scope.author=response.data.author;
			$scope.content=response.data.content;
			$scope.post_id=response.data.post_id;
			$scope.cmnts=response.data.comments;
			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//alert($scope.status);
});
	};

	$scope.reloadRoute = function() {
   $route.reload();
};

	$scope.postcomment=function(){
		$scope.data1={
			"authtoken":window.localStorage['authtoken'],
			"content":$scope.cmnt
		};
		console.log($scope.url1);
		$scope.url1=baseurl+window.localStorage['registry_id']+"/"+window.localStorage['regpost_id']+"/comment";
		$http.post($scope.url1,$scope.data1).then(function successCallback(response){
			console.log(response);
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//alert($scope.status);
});

	};

$scope.reloadRoute = function(){
   $route.reload();
};

});