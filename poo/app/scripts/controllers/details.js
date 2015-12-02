'use strict';

angular.module('pooApp').controller('detailsCtrl', function($scope, $location, $route, $http, localStorageService){ //put $http & alert

$scope.messages=[];
$scope.comments=[];	
$scope.contri=[];
$scope.edit1=true;
$scope.edit2=true;
$scope.edit3=true;
$scope.edit4=true;
$scope.edit5=true;

$scope.postmsg=function(){
		//$scope.messages.push($scope.msg);
		//$scope.msg='';
		$scope.urlpost=baseurl+window.localStorage['pool_id']+"/post";
		$scope.datapost={
			"authtoken":window.localStorage['authtoken'],
			"content":$scope.msg
		};
		$http.post($scope.urlpost,$scope.datapost).then(function successCallback(response){
			console.log(response);
			$scope.msg='';
			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//alert($scope.status);
});
		
	};

	$scope.send=function(x){
	window.localStorage['post_id'] = x.post_id;
	console.log(window.localStorage['post_id']);
};

$scope.postc=function(){
	$scope.url1=baseurl+window.localStorage['pool_id']+"/post/list";
			$scope.data1={"authtoken":window.localStorage['authtoken']};

	$http.post($scope.url1,$scope.data1).then(function successCallback(response){
				$scope.messages=response.data.posts;
			
			console.log(response);
						
			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			//alert($scope.status);
});		
	
};

$scope.reloadRoute = function() {
   $route.reload();
};

/*$scope.comment=function(x){
		$scope.comments.push($scope.cmnt);
		$scope.cmnt='';

		$scope.url2=baseurl+window.localStorage['pool_id']+"/post/"+x.post_id;
		$scope.data1={"authtoken":window.localStorage['authtoken']};

		$http.post($scope.url2,$scope.data1).then(function successCallback(response){
				//$scope.messages=response.data.posts;
			
			console.log(response);
						
			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			//$scope.status=response.status;
			//alert($scope.status);
});		

		
	};*/
		
$scope.share=function (){
	cc();
};

$scope.details=function(){
		//$scope.data=window.localStorage['authtoken'];
		//var $index=0;
		$scope.url=baseurl+"pool/"+window.localStorage['pool_id'];
		$scope.data={"authtoken":window.localStorage['authtoken']};
		console.log("test");
		//$scope.poollist=[];
		//$scope.data1={"authtoken":window.localStorage['authtoken']};
		console.log($scope.data);
	$http.post($scope.url,$scope.data).then(function successCallback(response){
			console.log(response);
			console.log("test1");
			$scope.pool_name=response.data.pool_name;
			$scope.pool_id=response.data.pool_id;
			$scope.pool_description=response.data.pool_description;
			$scope.target_amount=response.data.target_amount;
			$scope.target_date=response.data.target_date;
			$scope.contri=response.data.contributors;
			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log("test2");
			console.log(response);
			$scope.status=response.status;
			//alert($scope.status);
});
	//$location.path='/';
};

$scope.delete=function(){
	$scope.urldel=baseurl+window.localStorage['email_id']+"/pool/"+window.localStorage['pool_id']+"/delete";
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
$scope.edite=function(){
	$scope.edit5=!$scope.edit5;
};

$scope.change=function(){
	$scope.urledit=baseurl+window.localStorage['email_id']+"/pool/"+window.localStorage['pool_id']+"/update";
	$scope.dataed={
		"pool_name":$scope.edname,
		"target_date":$scope.eddate,
		"target_amount":$scope.edamt,
		"pool_description":$scope.eddes,
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
});
// https://www.facebook.com/dialog/feed?
//   app_id=145634995501895
//   &display=popup&caption=An%20example%20caption 
//   &link=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F
//   &redirect_uri=https://developers.facebook.com/tools/explorer
