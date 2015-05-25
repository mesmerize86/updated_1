define(['angular', 'app'], function(angular, app){

		return app.service('MainMenuService', ['$http', '$q', function(http, q){

			console.log('navservices is loading');
			
			var deffered = q.defer();

			http.get('JSON/nav.json').then(function(data){
				deffered.resolve(data);
			});

			this.getMenu = function(){
				return deffered.promise;
			};
		}]);
});