
define(['angular'], function (angular) {
    
	
    angular.module('HTML5ModeURLs', ['ngRoute']).config(['$locationProvider', function($location) {
        $location.html5Mode(true);
    }]);
    
	var app = angular.module('app', ['HTML5ModeURLs']);
	
	app.controller("AppController", function($scope){
		console.log("AppController is working");
	});


	return app;

});