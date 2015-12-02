'use strict';

angular.module('pooApp').controller('poolCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.contributors=[];
$scope.contributor=[];
$scope.products=[];
$scope.amounts=[];
$scope.pids=[];
$scope.prid=[];
$scope.am=[];
var count=0, cnt=0, i,j;

//$scope.fill=true;


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
			//$scope.fill=!$scope.fill;
		//$scope.contributors.push({"email_id":$scope.invitee,"amount":$scope.amt});
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
		//$scope.data2={"authtoken": window.localStorage['authtoken']};

		if($scope.choose ==='v')
			{	$scope.products='';
				$scope.print="You will get a voucher worth the target amount."}
	};

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

	/*$scope.getval=function(){
		return $scope.x.id;
	};*/

	$scope.push=function(x){
		$scope.m="BASKET";
		$scope.pids.push(x._source.Brand);
		$scope.prid.push("id"+x._id);
		$scope.pid='';
		//cnt=cnt+x._source.Price;
	};

	$scope.rem3=function(index){
	$scope.pids.splice(index,1);
	$scope.prid.splice(index,1);
};

	/*$scope.test=function(){
		console.log("pids="+$scope.pids);
		console.log("prid="+$scope.prid);
	}*/
$scope.test1=function(){
	console.log($scope.contributor.length);
	for(j=0;j<$scope.contributor.length;j++)
		{
			$scope.contributors.push({"email_id":$scope.contributor[j], "amount":$scope.amounts[j]});
		}
		if($scope.choose==='e')
		{$scope.contributors.push({"email_id":window.localStorage['email_id'], "amount":$scope.target_amount/($scope.contributor.length+1)});
		}
		else if ($scope.choose==='u')
			{
				$scope.contributors.push({"email_id":window.localStorage['email_id'], "amount":$scope.mycontri});
			}		
		console.log($scope.contributors);

};

/*$scope.checkamt=function(){
	if(cnt>$scope.target_amount)
		{
			$scope.n="Price of products must not exceed the target amount";
			return true;
		}
		else if (cnt<$scope.target_amount) {
			$scope.n="NOTE: Target amount is not reached. You may still proceed.";
			return false;
		}
};*/

		$scope.send=function(){
			
			$scope.checkboxvalue="false";
			if(cnt>$scope.target_amount)
		{
			$scope.n='';
			$scope.n="Price of products must not exceed the target amount";
			//return true;
		}
		else if (cnt<$scope.target_amount) {
			$scope.n='';
			$scope.n="NOTE: Target amount is not reached. You may still proceed.";
			//return false;
		}
			//window.localStorage['pool_id'] = "";
				//alert("hi");
		//$scope.target_date=new Date();
		$scope.url=baseurl+'pool/create';		
		for(j=0;j<$scope.contributor.length;j++)
		{
			$scope.contributors.push({"email_id":$scope.contributor[j], "amount":$scope.amounts[j]});
		}
		if($scope.choose==='e')
		{$scope.contributors.push({"email_id":window.localStorage['email_id'], "amount":$scope.target_amount/($scope.contributor.length+1)});
		}
		else if ($scope.choose==='u')
			{
				$scope.contributors.push({"email_id":window.localStorage['email_id'], "amount":$scope.mycontri});
			}
		$scope.data={
				"authtoken": window.localStorage['authtoken'],
				"email_id": window.localStorage['email_id'], 
				"target_date": $scope.target_date,
				"pool_name": $scope.pool_name,
				"target_amount": $scope.target_amount,
				"description": $scope.pool_description,
				"msg": $scope.msg,
				"searchable": $scope.checkboxvalue,
				"contributors": $scope.contributors,
				"pool_img": $scope.pool_img
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
				"contributors": $scope.contributors,
				"pool_img": $scope.pool_img				
			};			

			// console.log($scope.data);
console.log(window.localStorage['email_id']);
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
		{console.log($scope.data);
		$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log($scope.data);
			console.log(response);
			$scope.status=response.status;
			console.log(window.localStorage['email_id']);
			//window.localStorage['pool_id'] = response.data.pool_id;

			//$scope.data=response.data;
			// alert("You have successfully created an pool!");

			$location.path('/profile');
		},

		function errorCallback(response){
			console.log($scope.data2);
			console.log(response);
			$scope.status=response.status;
			console.log($scope.email_id);
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
		console.log($scope.data3);
		$http.post($scope.url,$scope.data3).then(function successCallback(response){
			console.log($scope.data3);
			console.log(response);
			$scope.status=response.status;
			console.log($scope.email_id);
			//$scope.data=response.data;
			// alert("You have successfully created a pool!");

			$location.path('/profile');
		},

		function errorCallback(response){
			console.log($scope.data3);
			console.log(response);
			$scope.status=response.status;
			console.log($scope.email_id);
			//$scope.data=response.data;
}
);
	}

	//}

	 };
	 };
	});

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
    


	

