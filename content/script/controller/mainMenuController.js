
define(['angular', 'app'], function (angular, app){

	return 
		app.controller('MainMenuController', ['$scope', 'MainMenuService', function(scope, menuService){
			console.log('Main Menu Controller is working');
			var promise = menuService.getMenu();

			promise.then(function(data){
				scope.menus = data.data;
			})
		}]);
});