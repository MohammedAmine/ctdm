angular.module('citadium', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html',
      controller: 'HomeCtrl'
    });
    $urlRouterProvider.otherwise('/');
})

.run(function ($ionicPlatform) { 
  $ionicPlatform.ready(function() {
    
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar) {
	      StatusBar.styleDefault();
	    }
  });
})

.controller('NavbarCtrl', function($scope) {
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
});