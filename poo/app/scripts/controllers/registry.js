'use strict';

angular.module('pooApp').controller('registryCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.invites=[];
$scope.inv=[];
$scope.products=[];
//$scope.amounts=[];
$scope.pids=[];
$scope.prid=[];
//$scope.done=[];

	$scope.addmember=function(){
		$scope.invites.push({"email_id":$scope.invitee});
		$scope.inv.push({"email_id":$scope.invitee});
		//$scope.invites.push({"email_id":$scope.invitee,"amount":$scope.amt});
		//$scope.amounts.push({"amount":$scope.amt});
		$scope.invitee='';
		//$scope.amt='';
		
	};

	$scope.push=function(x){
		$scope.m="BASKET";
		$scope.pids.push(x._source.Brand);
		$scope.prid.push("id"+x._id);
		$scope.pid='';
		//cnt=cnt+x._source.Price;
	};

	/*$scope.addpid=function(){
		$scope.prod.push($scope.pid);

		$scope.pid='';
		
	};*/

	$scope.remove=function(index){
	$scope.invites.splice(index,1);
	$scope.inv.splice(index,1);
};

$scope.rem3=function(index){
	$scope.pids.splice(index,1);
	$scope.prid.splice(index,1);
	};
		//$scope.invitees.push({email_id:''});
	/*$scope.show1=function(){
		$scope.data2={"authtoken": window.localStorage['authtoken']};
		$scope.url1=baseurl+'products/list';

		$http.post($scope.url1,$scope.data2).then(function successCallback(response){
			$scope.products=response.data.products;
			//console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
			//alert("You have successfully created an event!");

			//$location.path('/profile');
		},

		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
		}
		);
	};*/
$scope.go=function(){
		$scope.data2={"authtoken": window.localStorage['authtoken']};

				$scope.print='';
				$scope.pi=!$scope.pi;
				$scope.url1=baseurl+'products/search?query="'+$scope.search+'"';
				$scope.products='';
				$http.post($scope.url1,$scope.data2).then(function successCallback(response){
					$scope.products=response.data.hits;
			//console.log($scope.data);
			console.log(response);
			console.log($scope.products);
			//console.log(response.data.hits._source);
			//$scope.status=response.status;
			//$scope.data=response.data;
			//alert("You have successfully created an pool!");

			//$location.path('/profile');
		},

		function errorCallback(response){
			console.log(response);
			console.log($scope.products);
			//$scope.status=response.status;
			//$scope.data=response.data;
		}
		);
			
	};

	$scope.check=function(){
		//$scope.data2={"authtoken": window.localStorage['authtoken']};

		if($scope.choose1 ==='v')
			{	$scope.products='';
				$scope.print="You will get a voucher worth the target amount."}
	};
		/*$scope.tick=function(x){
		if($scope.mark ==='true')
			{$scope.pid.push({"products":x.id});
			}*/
 


		$scope.send2=function(){
			
			$scope.checkboxvalue="false";
			//window.localStorage['event_id'] = "";
				//alert("hi");
		//$scope.target_date=new Date();
		$scope.url=baseurl+'registry/create';
		$scope.inv.push({"email_id":window.localStorage['email_id']});		
		
$scope.data={
				"authtoken": window.localStorage['authtoken'],
				"email_id": window.localStorage['email_id'], 
				"target_date": $scope.target_date,
				"registry_name": $scope.registry_name,
				//"target_amount": $scope.target_amount,
				"description": $scope.description,
				"msg": $scope.msg,
				"public": $scope.checkboxvalue,
				"products": $scope.prid,
				"invites": $scope.inv				
			};			

			// console.log($scope.data);
$http.post($scope.url,$scope.data).then(function successCallback(response){
	window.localStorage['registry_id']=response.data.registry_id;
	console.log(window.localStorage['registry_id']);
			console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			//window.localStorage['event_id'] = response.data.event_id;

			//$scope.data=response.data;
			alert("You have successfully created an event!");

			$location.path('/profile');
		},

		function errorCallback(response){
			console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
}
);
	};
	
	});

			//$scope.url1='http://188.166.249.229:8080/event/create';
			/*$scope.data1={
				"authtoken": window.localStorage['authtoken'],

				"invites": $scope.invites
			};
			console.log($scope.data1);
			$http.post($scope.url1,$scope.data1).then(function successCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
			//$scope.print=$scope.email;
			alert("Email sent");

			//$location.path('/profile');
		},

		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
});*/
/*$scope.addTodo=function() {
$scope.todos.push($scope.todo);
$scope.todo=' ';
};
$scope.remove=function(index){
	$scope.todos.splice(index,1);
};
});*/


			/*$scope.invitee={
								"first_name": $scope.first_name,
								"middle_name": $scope.middle_name.
								"last_name": $scope.last_name,
								"email_id": $scope.email_id,
								"amount": $scope.amount

			}
			$scope.invitees.push($scope.invitee);*/
			//console.log($scope.invitees);

			/*$http.post($scope.url1,$scope.invitees).then(function successCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$location.path('/create');
			//$scope.data=response.data;
		},

		function errorCallback(response){
			console.log(response.status);
			$scope.status=response.status;
			//$scope.data=response.data;
});*/


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
    


	

