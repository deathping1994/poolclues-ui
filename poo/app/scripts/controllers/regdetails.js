'use strict';

angular.module('pooApp').controller('regdetailsCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert

$scope.messages=[];
$scope.comments=[];	
$scope.contri=[];
$scope.edit1=true;
$scope.edit2=true;
$scope.edit3=true;
$scope.edit4=true;

$scope.post=function(){
		$scope.messages.push($scope.msg);
		$scope.msg='';
		
	};

$scope.comment=function(){
		$scope.comments.push($scope.cmnt);
		$scope.cmnt='';
		
	};

$scope.rem1=function(index){
	$scope.messages.splice(index,1);
};
$scope.rem2=function(index){
	$scope.comments.splice(index,1);
};
		
$scope.share=function (){
	cc();
};

$scope.details=function(){
		//$scope.data=window.localStorage['authtoken'];
		//var $index=0;
		$scope.url=baseurl+"registry_id/"+window.localStorage['registry_id'];
		$scope.data={"authtoken":window.localStorage['authtoken']};
		//$scope.poollist=[];
		//$scope.data1={"authtoken":window.localStorage['authtoken']};
		console.log($scope.data);
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

$scope.delete=function(){
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

$scope.edita=function(){
	$scope.edit1=!$scope.edit1;
};
$scope.editb=function(){
	$scope.edit2=!$scope.edit2;
};
$scope.editc=function(){
	$scope.edit3=!$scope.edit3;
};
$scope.editd=function(){
	$scope.edit4=!$scope.edit4;
};

$scope.change=function(){
	$scope.urledit=baseurl+window.localStorage['email_id']+"/registry/"+window.localStorage['registry_id']+"/update";
	$scope.dataed={
		"registry_name":$scope.edname,
		"target_date":$scope.eddate,
		"registry_description":$scope.eddes,
		"searchable":$scope.edpb,
		"authtoken":window.localStorage['authtoken']
	};
	$http.post($scope.urledit,$scope.dataed).then(function successCallback(response){
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

// https://www.facebook.com/dialog/feed?
//   app_id=145634995501895
//   &display=popup&caption=An%20example%20caption 
//   &link=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F
//   &redirect_uri=https://developers.facebook.com/tools/explorer
});