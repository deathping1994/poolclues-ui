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
angular
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
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'welcomeCtrl'
      })
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
        controller: 'listCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'createCtrl'
      })
      .when('/pool', {
        templateUrl: 'views/pool.html',
        controller: 'poolCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'logoutCtrl'
      })
      .when('/addphone', {
        templateUrl: 'views/addphone.html',
        controller: 'addphoneCtrl'
      })
      .when('/check', {
        templateUrl: 'views/check.html',
        controller: 'checkCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'listCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        //controller: 'listCtrl'
      })
      .when('/verify', {
        templateUrl: 'views/verify.html',
        controller: 'verifyCtrl'
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
        controller: 'detailsCtrl'
      })
      .when('/changepassword', {
        templateUrl: 'views/changepassword.html',
        controller: 'changepasswordCtrl'
      })
      .when('/wallet', {
        templateUrl: 'views/wallet.html',
        controller: 'walletCtrl'
        })
      .when('/registry', {
        templateUrl: 'views/registry.html',
        controller: 'registryCtrl'
      })
      .when('/addregistry', {
        templateUrl: 'views/addregistry.html',
        controller: 'addregistryCtrl'
      })
      .when('/regdetails', {
        templateUrl: 'views/regdetails.html',
        controller: 'regdetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
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
      var authresponse=response.authResponse.accessToken;
      
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
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
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }


var cc=function(){
  FB.ui({
  method: 'share',
  href: 'https://developers.facebook.com/docs/',
  caption: 'An example caption',
}, function(response){});
};