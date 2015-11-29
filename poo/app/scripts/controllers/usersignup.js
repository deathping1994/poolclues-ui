'use strict';
angular.module('pooApp').controller('usersCtrl', function($location, $scope, $http, localStorageService){ //put $http & alert
//var a=$scope.password;
	//var e=$scope.phone;
	//var c=a.split('');
	//var d=e.split('');
	//var i, count=0;

	/*for(i=0;i<a.length;i++)
	{
	    if(c[i]==='&'||c[i]==='%'||c[i]==='-'||c[i]==='_'||c[i]==='#'||c[i]==='@'||c[i]===1||c[i]===2||c[i]===3||c[i]===4||c[i]===5||c[i]===6||c[i]===7||c[i]===8||c[i]===9)
	 	count++;
	}*/
$scope.first_name="";
$scope.middle_name="";
$scope.last_name="";
$scope.email="";
$scope.password="";
$scope.house="";
$scope.street="";
$scope.city="";
$scope.state="";
$scope.country="";
$scope.phone="";

$scope.submit=function(){
	$scope.url=baseurl+"register";
	console.log($scope.url);
	$scope.data= {
			"first_name": $scope.first_name,
			"middle_name": $scope.middle_name,
			"last_name": $scope.last_name,
			'email_id': $scope.email,
			"password": $scope.password,
			"house_no": $scope.house,
			"street": $scope.street,
			"city": $scope.city,
			"state": $scope.state,
			"country": $scope.country,
			"phone": $scope.phone,
			"user_img": $scope.user_img
		};
	console.log($scope.data);
	$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log(response);
			$scope.status=response.status;
			//window.localStorage['first_name'] = $scope.first_name;
			//<a href='#/profile'></a>
			//$scope.print="You have successfully registered!"
			$location.path('/userlogin');
			
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;

			//alert($scope.status);
});
	//$location.path('/profile');
	};	
	
}); /*.directive('validPasswordC', function () {
    return{
    	//controller: 'usersCtrl',
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue !== scope.form1.password.$viewValue;
                ctrl.$setValidity('noMatch', !noMatch);
            });
        }
    };
});*/
	//alert(count);
	/*if(angular.isNumber($scope.phone))
		{	
			alert("Please enter valid phone no.");}
	else*/

	/*if(d[i]!==1||d[i]!==2||d[i]!==3||d[i]!==4||d[i]!==5||d[i]!==6||d[i]!==7||d[i]!==8||d[i]!==9||d[i]!==0||e.length<8)
	{
		alert('Enter valid phone number');
	}

	 else */	 
	/* if(a.length<8)
	{
		//alert(c[1]);
		window.alert('Password Length too short');
	}

	else	
	if(count<1)
{
	window.alert('Atleast a special character and a numeric needed');
}

	else
{
	$location.path('/profile');
	window.alert('You have successfully signed up');
}	*/

