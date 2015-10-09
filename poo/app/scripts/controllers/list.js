'use strict';

angular.module('pooApp').controller('listCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert
	
$scope.list=function(){
		//$scope.data=window.localStorage['authtoken'];

		$scope.url="http://188.166.249.229:8080/"+window.localStorage['email_id']+"/event/list";
		$scope.eventlist=[];
		$scope.data1={"authtoken":window.localStorage['authtoken']};

	$http.get($scope.url, $scope.data1).then(function successCallback(response){
			console.log(response);
			$scope.eventlist=response.data.event_list;

			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//alert($scope.status);

/*	$http.post($scope.url).success(function(response) {
		//$scope.stuff=data;
		//console.log($scope.stuff);
	}).error(function () {
		
		//console.log(response.status);
			//$scope.status=response.status;
		});*/
			
			//alert($scope.status);
});
	//$location.path='/';
};

$scope.showdetail = function(data)
      { 
        $scope.description=data.description;
        $scope.event_id    =data.event_id;
        $scope.event_name   =data.event_name;
        $scope.target_amount  =data.target_amount;
        $scope.target_date   =data.target_date;

      };

});
