define(['angular', 'app', 'navServices'], function (angular, app, navServices) {

	angular.module('app').controller("HomeController", ['$scope', 'MainMenuService', function ($scope, menuService) {
		console.log('ViewHomeController working');
		var promise = menuService.getMenu();

			promise.then(function(data){
				$scope.menus = data.data;
				$scope.name = 'Kishor';
			});
	}]);

});