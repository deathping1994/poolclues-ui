'use strict';

/**
 * @ngdoc overview
 * @name pooApp
 * @description
 * # pooApp
 *
 * Main module of the application.
 */
 var baseurl="http://api.poolclues.anip.xyz:8080/";
var pooApp=angular
  .module('pooApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'ui.bootstrap',
    //'angular-loading-bar',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/welcome.html',
      //   controller: 'welcomeCtrl'
      // })
      /*.service('dataService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
 });
      .config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});*/
      /*.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'*/

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      /*.when('/secondpg', {
        templateUrl: 'views/secondpg.html',
        controller: 'SecCtrl'
      })*/
      .when('/userlogin', {
        templateUrl: 'views/userlogin.html',
        controller: 'userlCtrl'
      })
      .when('/usersignup', {
        templateUrl: 'views/usersignup.html',
        controller: 'usersCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'listCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'createCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/pool', {
        templateUrl: 'views/pool.html',
        controller: 'poolCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'logoutCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/addphone', {
        templateUrl: 'views/addphone.html',
        controller: 'addphoneCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/check', {
        templateUrl: 'views/check.html',
        controller: 'checkCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'listCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
        //controller: 'listCtrl'
      })
      .when('/verify', {
        templateUrl: 'views/verify.html',
        controller: 'verifyCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/forgot', {
        templateUrl: 'views/forgot.html',
        controller: 'forgotCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'addCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'detailsCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/changepassword', {
        templateUrl: 'views/changepassword.html',
        controller: 'changepasswordCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/wallet', {
        templateUrl: 'views/wallet.html',
        controller: 'walletCtrl',
        resolve: {
                  factory: checkRouting
                  }
        })
      .when('/registry', {
        templateUrl: 'views/registry.html',
        controller: 'registryCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/addregistry', {
        templateUrl: 'views/addregistry.html',
        controller: 'addregistryCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/regdetails', {
        templateUrl: 'views/regdetails.html',
        controller: 'regdetailsCtrl',
        resolve: {
                  factory: checkRouting
                  }
      })
      .when('/loading', {
        templateUrl: 'views/loading.html',
        controller: 'loadingCtrl'
      })
      .when('/comment', {
        templateUrl: 'views/comment.html',
        controller: 'commentCtrl'
      })
      .otherwise({
        redirectTo: 'views/userlogin.html'
      });
  });


  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
      window.localStorage['authresponse']=response.authResponse.accessToken;

    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML ='Please log '+'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '516986721799294',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });
  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  var id,fbflag=0;
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
        id=response.id;
        console.log(id);
        permission();
        fbflag=1;
        console.log(fbflag);
        window.location="http://local.host:9000/#/loading";
        // angular.element(document.getElementById('userlCtrl')).scope().myfunction('fblogin(first_name,last_name,email,img)');
    });
    
    
  }

//  var retreive_details=function(){
//   FB.login(function(response) {
//    console.log(response);
//  }, {scope: 'first_name','last_name','link','email'});
// };

var permission=function(){
  FB.api(
    "/"+id+"?fields=first_name,last_name,email",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
        console.log(response);
        window.localStorage['first_name']=response.first_name;
        window.localStorage['last_name']=response.last_name;
        // console.log(response.email);
        // console.log(response.first_name);
        // console.log(response.last_name);
        window.localStorage['email_id']=response.email;
        // console.log(window.localStorage['email_id']);
      }
    }
);

  FB.api(
    "/me/picture",
    function(response){
      if(response && !response.error){
        window.localStorage['img']=response.data.url;
        // console.log(response.data.url);
      }
    });
}

var fblogout=function(){
  FB.logout(function(response) {
        // Person is now logged out
    });
}

var poolpost;
var registrypost;
var cc=function(){
  FB.ui({
  method: 'share',
  href: poolpost,
  caption: 'Pool Created'
}, function(response){});
};

var authtoken;
var checkRouting= function ($q, localStorageService,$location) {
if (window.localStorage['authtoken']!=="") {
return true;
} else {
var deferred = $q.defer();
deferred.reject();
$location.path("/userlogin");
return deferred.promise;
}
};

function init() {
  auth(/* immediate */ true);
}

function auth(immediate) {
  // Visit https://code.google.com/apis/console?api=plus to generate your
  // oauth2 client id and simple api key.
  var config = {
    client_id: '738382529852-eueicrt0krevbk0tu83h1ki9o3huulu4.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/plus.me',
    immediate: immediate
  };
  gapi.client.setApiKey('AIzaSyDX-F8RL6nxmRBzrDi-TygUUDgOWNvbYjQ');
  window.setTimeout(function() {  
    gapi.auth.authorize(config, onAuthResponse);
  }, 1);
}

function onAuthResponse(token) {
  var login = document.getElementById('login');
  if (token) {
    login.style.display = 'none';
    makeRequest();
  } else {
    login.style.display = '';
  }
}

function makeRequest() {
  gapi.client.load('plus', 'v1', function() {
    var request = gapi.client.plus.activities.list({
        'userId': 'me',
        'maxResults': '20',
        'collection': 'public'
    });

    request.execute(function(data) {
      var div = document.getElementById('results');
      for(var i=0; i<data.items.length; i++) {
        var activity = data.items[i];
        div.appendChild(document.createElement('P'));
        div.appendChild(document.createTextNode(activity.object.content));
      }
    });

    var personReq = gapi.client.plus.people.get({'userId': 'me'});
    personReq.execute(function(data) {
      var div = document.getElementById('me');
      div.innerHTML = "<a href='" + data.url + "'>"
            + data.displayName + "</a><div><img src='" + data.image.url + "'></div>";
    });
  });
}


