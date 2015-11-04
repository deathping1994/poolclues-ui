'use strict';

// angular.module('pooApp').controller('ModalInstanceCtrl', function($scope, $modalInstance, x){
// 	$scope.x=x;
// })

angular.module('pooApp').controller('listCtrl', function($scope, $location, $http, localStorageService){ //put $http & alert
	
$scope.list=function(){
		//$scope.data=window.localStorage['authtoken'];
		//var $count=0;
		$scope.visibility=true;
		$scope.visibility1=true;
		$scope.url="http://188.166.249.229:8080/"+window.localStorage['email_id']+"/event/list/created";
		$scope.eventlist=[];
		$scope.data1={"authtoken":window.localStorage['authtoken']};


	$http.post($scope.url, $scope.data1).then(function successCallback(response){
			console.log(response);
			if(response.data.event_list==="")
			{
				$scope.show="You have no events. Create a new one.";
			}
			else
			{$scope.eventlist=response.data.event_list;
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
	//$location.path='/';
};

$scope.create=function(){
	$location.path('/create');
};

$scope.pay=function(x){
	$scope.data2={"authtoken":window.localStorage['authtoken']};

	$scope.url1="http://188.166.249.229:8080/"+window.localStorage['email_id']+"/pay/"+x.event_id;

	$http.post($scope.url1, $scope.data2).then(function successCallback(response){
			console.log(response);
		//window.localStorage['event_id'] = response.data.event_list.event_id;

			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
});
};

$scope.addmember1=function(x){
	window.localStorage['event_id'] = x.event_id;
	
};

$scope.listevents=function(){
		$scope.url="http://188.166.249.229:8080/"+window.localStorage['email_id']+"/event/list/all";
		$scope.eventlist=[];
		$scope.data1={"authtoken":window.localStorage['authtoken']};
		$scope.visibility=false;
		$scope.hideornot="ng-hide";
		$scope.visibility1=false;
		$scope.hideornot1="ng-hide";

	$http.post($scope.url, $scope.data1).then(function successCallback(response){
			console.log($scope.visibility);
			console.log($scope.hideornot);
			console.log(response);
			if(response.data.event_list==="")
			{
				$scope.show="You have no events. Create a new one.";
			}
			else
			{
				$scope.eventlist=response.data.event_list;
			}

		//window.localStorage['event_id'] = response.data.event_list.event_id;

			//alert("You've successfully been logged out");
			//$location.path('/');
		},
		function errorCallback(response){
			console.log(response);
			$scope.status=response.status;
			$scope.response=response.data.error;
});
	//$location.path='/';
};

$scope.listeventsinvited=function(){
		$scope.url="http://188.166.249.229:8080/"+window.localStorage['email_id']+"/event/list/invited";
		$scope.eventlist=[];
		$scope.data1={"authtoken":window.localStorage['authtoken']};
		$scope.visibility=false;
		$scope.hideornot="ng-hide";
		$scope.visibility1=true;
		$scope.hideornot1="";

		$http.post($scope.url, $scope.data1).then(function successCallback(response){
			console.log($scope.visibility);
			console.log($scope.hideornot);
			console.log(response);
			if(response.data.event_list==="")
			{
				$scope.show="You have no events. Create a new one.";
			}
			else
			{
				$scope.eventlist=response.data.event_list;
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
	//$location.path='/';
};
// $scope.open=function(){
// 	$scope.modalInstance=$modal.open({
// 		resolve: {
// 			xIndex: function(){
// 				return $scope.eventlist.indexOf(x)
// 			},
// 			eventlist: function(){
// 				return $scope.eventlist
// 			}
// 		}
// 	})

// var ModalInstanceCtrl=function($scope, $scope.modalInstance, x, xIndex){
// 	$scope.eventlist=eventlist;
// 	$scope.selected={
// 		x: $scope.eventlist[xIndex]
// 	};
// }	
// };
// $scope.click = function() {
// 	var modalInstance=$modal.open({
// 		templateUrl: '/list',
// 		controller: "ModalInstanceCtrl",

// 		resolve: {
// 			x: function()
// 			{
// 				return $scope.x;
// 			}
// 		}
// 	})
//   //$scope.showModal = true;
// };
/*$scope.showdetail = function(data)
      { 
        $scope.description=data.description;
        $scope.event_id    =data.event_id;
        $scope.event_name   =data.event_name;
        $scope.target_amount  =data.target_amount;
        $scope.target_date   =data.target_date;

      };*/

});
