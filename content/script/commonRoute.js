define(['angular', 'app', 'controller'], function (angular, app) {

	return app.config(['$routeProvider', '$locationProvider', function (routeProvider, locationProvider, controller) {

		routeProvider
			.when('/', {
				templateUrl 	:  'partials/home.html', 
				controller 		:  'HomeController'
			})
			.when('/home', {
				templateUrl 	:  'partials/home.html',
				controller 		:  'HomeController'
			})
			.when('/about', {
				templateUrl 	: 	'partials/about.html',
				controller 		: 	'AboutController'
			})
			.when('/work', {
				templateUrl 	: 	'partials/work.html',
				controller 		: 	'WorkController'
			})
			.when('/profession', {
				templateUrl 	: 	'partials/profession.html',
				controller 		: 	'ProfessionController'
			})
			.when('/contact', {
				templateUrl 	: 	'partials/contact.html',
				controller 		: 	'ContactController'
			})
			.otherwise({redirectTo: '/'});
	}]);
	
});
