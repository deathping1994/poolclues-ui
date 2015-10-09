'use strict';

angular.module('pooApp').controller('poolCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.invitees=[];
	$scope.addmember=function(){
		$scope.url1='http://188.166.249.229:8080/event/create';
		$scope.invitees.push({email_id:''});

			/*$scope.invitee={
								"first_name": $scope.first_name,
								"middle_name": $scope.middle_name.
								"last_name": $scope.last_name,
								"email_id": $scope.email_id,
								"amount": $scope.amount

			}
			$scope.invitees.push($scope.invitee);*/
			//console.log($scope.invitees);

			$http.post($scope.url1,$scope.invitees).then(function successCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
		},

		function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
});
/*var data={ 'invitees': $scope.invitees};

$http.post($scope.url1,$scope.invitees).then(function successCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
		},

		function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
});*/
			$location.path('/create');


	};

	       /* $scope.checkDateValidity = function(){
        var date,
            isValid,
            taskDate;
        taskDate = $scope.target_date;
        date = new Date(taskDate);
        isValid = !isNaN(date);
        if(isValid) {
            $scope.addButtonState.isOk = true;
            $scope.dateStatus.class = '';
        }
        else{
            $scope.addButtonState.isOk = false;
            $scope.dateStatus.class = 'has-error';
        }
    };*/
    $scope.checkboxvalue="false";

	$scope.button=function() {
			//alert("hi");
		//$scope.target_date=new Date();
		$scope.url='http://188.166.249.229:8080/event/create';
		
		
		$scope.data={
				"authtoken": window.localStorage['authtoken'],
				"email_id": window.localStorage['email_id'], 
				"target_date": $scope.target_date,
				"event_name": $scope.event_name,
				"target_amount": $scope.target_amount,
				"description": $scope.event_description,
				"public": $scope.checkboxvalue
			};
			console.log($scope.data);

		$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
			alert("You have successfully created an event!")

			$location.path('/profile');
		},

		function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
});


	
};
});