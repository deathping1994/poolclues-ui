'use strict';

angular.module('pooApp').controller('poolCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.contributors=[];
$scope.contributor=[];
$scope.products=[];
$scope.amounts=[];
$scope.pids=[];
$scope.prid=[];
$scope.am=[];
var count=0, i,j;


	$scope.addmember=function(){
		//var b=$scope.amt.length;
		//console.log(b);
		if ($scope.choose==='e') {
			$scope.contributor.push($scope.invitee);
			//$scope.contributors.push({"email_id":$scope.invitee,"amount":$scope.target_amount/(count+1)});
		for(i=0;i<count+1;i++)
		{
			$scope.amounts[i]=$scope.target_amount/(count+2);
		}
		//$scope.amounts.push($scope.target_amount/(count+1));
		
		/*for(j=0;j<count+1;j++)
		{
			$scope.contributors.push({"email_id":$scope.contributor[j], "amount":$scope.amounts[j]});
		}*/

		count++;
			//$scope.amounts.push({"amount":$scope.target_amount});
			//$scope.contributors.push({"email_id":$scope.invitee,"amount":$scope.target_amount});
		}
		else if ($scope.choose==='u'){
		$scope.contributors.push({"email_id":$scope.invitee,"amount":$scope.amt});
		$scope.amounts.push($scope.amt);
		$scope.contributor.push($scope.invitee);
		}

		$scope.invitee='';
		$scope.amt='';

	};
	$scope.remove=function(index){
	$scope.contributors.splice(index,1);
	$scope.contributor.splice(index,1);
	$scope.amounts.splice(index,1);
	for(i=0;i<$scope.contributor.length;i++)
		{
			$scope.amounts[i]=$scope.target_amount/($scope.contributor.length+1);
		}
	count--;
};
		//$scope.invitees.push({email_id:''});
	$scope.check=function(){
		$scope.data2={"authtoken": window.localStorage['authtoken']};

		if($scope.choose ==='v')
			{	$scope.products='';
				$scope.print="You will get a voucher worth the target amount."}

		else if ($scope.choose ==='g') 
			{
				$scope.print='';
				$scope.url1=baseurl+'products/list';

				$http.post($scope.url1,$scope.data2).then(function successCallback(response){
					$scope.products=response.data.products;
			//console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
			//alert("You have successfully created an pool!");

			//$location.path('/profile');
		},

		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
		}
		);
			}
	};

	/*$scope.getval=function(){
		return $scope.x.id;
	};*/

	$scope.push=function(x){
		$scope.m="BASKET";
		$scope.pids.push(x.id);
		$scope.prid.push("id"+x.id);
		$scope.pid='';
	};

	$scope.rem3=function(index){
	$scope.pids.splice(index,1);
};

	/*$scope.test=function(){
		console.log("pids="+$scope.pids);
		console.log("prid="+$scope.prid);
	}*/
/*$scope.test1=function(){
	for(j=0;j<$scope.contributor.length;j++)
		{
			$scope.contributors.push({"email_id":$scope.contributor[j], "amount":$scope.amounts[j]});
		}
		console.log($scope.contributors);

}*/

		$scope.send=function(){
			
			$scope.checkboxvalue="false";
			//window.localStorage['pool_id'] = "";
				//alert("hi");
		//$scope.target_date=new Date();
		$scope.url=baseurl+'pool/create';		
		for(j=0;j<$scope.contributor.length;j++)
		{
			$scope.contributors.push({"email_id":$scope.contributor[j], "amount":$scope.amounts[j]});
		}
		
		$scope.data={
				"authtoken": window.localStorage['authtoken'],
				"email_id": window.localStorage['email_id'], 
				"target_date": $scope.target_date,
				"pool_name": $scope.pool_name,
				"target_amount": $scope.target_amount,
				"description": $scope.pool_description,
				"msg": $scope.msg,
				"public": $scope.checkboxvalue,
				"contributors": $scope.contributors
			};
/*$scope.data1={
				"authtoken": window.localStorage['authtoken'],
				"email_id": window.localStorage['email_id'], 
				"target_date": $scope.target_date,
				"pool_name": $scope.pool_name,
				"target_amount": $scope.target_amount,
				"description": $scope.pool_description,
				"msg": $scope.msg,
				"public": $scope.checkboxvalue
				
			};
$scope.data2={
				"authtoken": window.localStorage['authtoken'],
				"email_id": window.localStorage['email_id'], 
				"target_date": $scope.target_date,
				"pool_name": $scope.pool_name,
				"target_amount": $scope.target_amount,
				"description": $scope.pool_description,
				"msg": $scope.msg,
				"public": $scope.checkboxvalue,
				"products": $scope.prid
				
			};*/
$scope.data3={
				"authtoken": window.localStorage['authtoken'],
				"email_id": window.localStorage['email_id'], 
				"target_date": $scope.target_date,
				"pool_name": $scope.pool_name,
				"target_amount": $scope.target_amount,
				"description": $scope.pool_description,
				"msg": $scope.msg,
				"public": $scope.checkboxvalue,
				"products": $scope.prid,
				"contributors": $scope.contributors				
			};			

			// console.log($scope.data);

	if($scope.pids.length==0)
	{
		if($scope.contributors.length==0)
		{ $scope.n="You must have atleast one invite.";
		/*$http.post($scope.url,$scope.data1).then(function successCallback(response){
			console.log($scope.data1);
			console.log(response);
			$scope.status=response.status;
			//window.localStorage['pool_id'] = response.data.pool_id;

			//$scope.data=response.data;
			alert("You have successfully created an pool!");

			$location.path('/profile');*/
		}

		/*function errorCallback(response){
		function errorCallback(response){
			console.log($scope.data1);
>>>>>>> Stashed changes
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
}
);*/
		else
		{
		$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			//window.localStorage['pool_id'] = response.data.pool_id;

			//$scope.data=response.data;
			alert("You have successfully created an pool!");

			$location.path('/profile');
		},

		function errorCallback(response){
			console.log($scope.data2);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
}
);
	}
}
	else {
		if($scope.contributors.length==0)
	{
		$scope.n="You must have atleast one invite.";
		/*$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
			alert("You have successfully created an pool!");

			$location.path('/list');
		},

		function errorCallback(response){
			console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
			//$scope.data=response.data;
}
);*/
	}
	else{
		$http.post($scope.url,$scope.data3).then(function successCallback(response){
			console.log($scope.data3);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
			alert("You have successfully created an pool!");

			$location.path('/profile');
		},

		function errorCallback(response){
			console.log($scope.data3);
			console.log(response);
			$scope.status=response.status;
			//$scope.data=response.data;
}
);
	}

	//}

	 };
	 };
	});

			//$scope.url1='http://188.166.249.229:8080/pool/create';
			/*$scope.data1={
				"authtoken": window.localStorage['authtoken'],

				"contributors": $scope.contributors
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
    


	

