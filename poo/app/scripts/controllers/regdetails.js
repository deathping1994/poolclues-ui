'use strict';

angular.module('pooApp').controller('regdetailsCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.messages=[];
$scope.comments=[];	
$scope.contri=[];
$scope.edit1=true;
$scope.edit2=true;
$scope.edit3=true;
$scope.edit4=true;

$scope.regpost=function(){
		$scope.messages.push($scope.msg);
		$scope.msg='';
		
	};

$scope.regcomment=function(){
		$scope.comments.push($scope.cmnt);
		$scope.cmnt='';
		
	};
		
$scope.regshare=function(){
	cc();
};

$scope.regdetails=function(){
		//$scope.data=window.localStorage['authtoken'];
		//var $index=0;
		$scope.url=baseurl+"registry/"+window.localStorage['registry_id'];
		$scope.data={"authtoken":window.localStorage['authtoken']};
		//$scope.poollist=[];
		//$scope.data1={"authtoken":window.localStorage['authtoken']};
		console.log($scope.data);
		console.log("url="+$scope.url);
	$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log(response);
			
			$scope.registry_name=response.data.registry_name;
			$scope.registry_id=response.data.registry_id;
			$scope.registry_description=response.data.registry_description;
			$scope.target_date=response.data.target_date;
			$scope.giftbucket=response.data.giftbucket;
			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//alert($scope.status);
});
	//$location.path='/';
};

$scope.regdelete=function(){
	$scope.urldel=baseurl+window.localStorage['email_id']+"/registry/"+window.localStorage['registry_id']+"/delete";
	$scope.datadel={"authtoken":window.localStorage['authtoken']};
	console.log($scope.datadel);
	$http.post($scope.urldel,$scope.datadel).then(function successCallback(response){
			console.log(response);
			
			//alert("You've successfully been logged out");
			$location.path('/profile');
		},
		function errorCallback(response){
			console.log(response);
			//$scope.status=response.status;
			//alert($scope.status);
});

};

$scope.regedita=function(){
	$scope.edit1=!$scope.edit1;
};
$scope.regeditb=function(){
	$scope.edit2=!$scope.edit2;
};
$scope.regeditc=function(){
	$scope.edit3=!$scope.edit3;
};
$scope.regeditd=function(){
	$scope.edit4=!$scope.edit4;
};

$scope.regchange=function(){
	$scope.urledit=baseurl+window.localStorage['email_id']+"/registry/"+window.localStorage['registry_id']+"/update";
	console.log($scope.urledit);
	$scope.dataed={
		"registry_name":$scope.edname,
		"target_date":$scope.eddate,
		"description":$scope.eddes,
		"searchable":$scope.edpb,
		"authtoken":window.localStorage['authtoken']
	};
	$http.post($scope.urledit,$scope.dataed).then(function successCallback(response){
			console.log(response);
			
			//alert("You've successfully been logged out");
			//$location.path('/profile');
		},
		function errorCallback(response){
			console.log(response);
			//$scope.status=response.status;
			//alert($scope.status);
});

};

// https://www.facebook.com/dialog/feed?
//   app_id=145634995501895
//   &display=popup&caption=An%20example%20caption 
//   &link=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F
//   &redirect_uri=https://developers.facebook.com/tools/explorer
});