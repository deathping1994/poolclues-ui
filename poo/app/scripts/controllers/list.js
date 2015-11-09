'use strict';

// angular.module('pooApp').controller('ModalInstanceCtrl', function($scope, $modalInstance, x){
// 	$scope.x=x;
// })

angular.module('pooApp').controller('listCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.sortpool = function(pool) {
var date = new Date(pool.updated_at);
return -date;
};


$scope.list=function(){
		//$scope.data=window.localStorage['authtoken'];
		//var $count=0;
		$scope.visibility=true;
		$scope.visibility1=true;
		$scope.url=baseurl+window.localStorage['email_id']+"/pool/list/created";
		$scope.poollist=[];
		$scope.data1={"authtoken":window.localStorage['authtoken']};


	$http.post($scope.url, $scope.data1).then(function successCallback(response){
			console.log(response);
			if(response.data.pool_list==="")
			{
				$scope.show="You have no pools. Create a new one.";
			}
			else
			{$scope.poollist=response.data.pool_list;
				//$scope.pool_id=response.data.pool_list.pool_id;
			}

		//window.localStorage['pool_id'] = response.data.pool_list.pool_id;

			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
			//alert($scope.status);
});
	//$location.path='/';
};

$scope.create=function(){
	$location.path('/create');
};

$scope.pay=function(x){
	$scope.data2={"authtoken":window.localStorage['authtoken']};

	$scope.url1=baseurl+window.localStorage['email_id']+"/pay/"+x.pool_id;

	$http.post($scope.url1, $scope.data2).then(function successCallback(response){
			console.log(response);
		//window.localStorage['pool_id'] = response.data.pool_list.pool_id;

			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
});
};

$scope.addmember1=function(x){
	window.localStorage['pool_id'] = x.pool_id;
	console.log(window.localStorage['pool_id']);
};

$scope.listpools=function(){
		$scope.url=baseurl+window.localStorage['email_id']+"/pool/list/all";
		$scope.poollist=[];
		$scope.data1={"authtoken":window.localStorage['authtoken']};
		$scope.visibility=false;
		$scope.hideornot="ng-hide";
		$scope.visibility1=false;
		$scope.hideornot1="ng-hide";

	$http.post($scope.url, $scope.data1).then(function successCallback(response){
			console.log($scope.visibility);
			console.log($scope.hideornot);
			console.log(response);
			if(response.data.pool_list==="")
			{
				$scope.show="You have no pools. Create a new one.";
			}
			else
			{
				$scope.poollist=response.data.pool_list;
			}

		//window.localStorage['pool_id'] = response.data.pool_list.pool_id;

			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
});
	//$location.path='/';
};

$scope.listpoolscontributed=function(){
		$scope.url=baseurl+window.localStorage['email_id']+"/pool/list/contributed";
		$scope.poollist=[];
		$scope.data1={"authtoken":window.localStorage['authtoken']};
		$scope.visibility=false;
		$scope.hideornot="ng-hide";
		$scope.visibility1=true;
		$scope.hideornot1="";

		$http.post($scope.url, $scope.data1).then(function successCallback(response){
			console.log($scope.visibility);
			console.log($scope.hideornot);
			console.log(response);
			if(response.data.pool_list==="")
			{
				$scope.show="You have no pools. Create a new one.";
			}
			else
			{
				$scope.poollist=response.data.pool_list;
			}

		//window.localStorage['pool_id'] = response.data.pool_list.pool_id;

			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
			//alert($scope.status);
});
	//$location.path='/';
};
});
