define(['angular', 'app'], function(angular, app){
	
		angular.module('app').controller('AboutController', function($scope){
			$scope.name = "I am from about controller";
			console.log('AboutController is working');
		});
		return angular;
});