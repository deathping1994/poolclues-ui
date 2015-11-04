'use strict';

// angular.module('pooApp').controller('ModalInstanceCtrl', function($scope, $modalInstance, x){
// 	$scope.x=x;
// })

angular.module('pooApp').controller('walletCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert
	
$scope.wallethistory=function(){
		
		$scope.url="http://188.166.249.229:8080/"+window.localStorage['email_id']+"/wallet/history";
		$scope.transactionlist=[];
		$scope.data={"authtoken":window.localStorage['authtoken']};


	$http.post($scope.url, $scope.data).then(function successCallback(response){
			console.log(response);
			if(response.data.transactions==="")
			{
				$scope.show="You have no money in your wallet";
			}
			else
			{
				$scope.transactionlist=response.data.transactions;
				//$scope.event_id=response.data.event_list.event_id;
			}

		//window.localStorage['event_id'] = response.data.event_list.event_id;

			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
			//alert($scope.status);
});

};

$scope.walletadd=function(){
		
		$scope.url="http://188.166.249.229:8080/"+window.localStorage['email_id']+"/wallet/add";
		$scope.data={"authtoken":window.localStorage['authtoken'],
			"amount":$scope.amount
			};


	$http.post($scope.url, $scope.data).then(function successCallback(response){
			console.log(response);
			$scope.status=response.status;
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
			//alert($scope.status);
});

};
});