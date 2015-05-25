/*global require*/
'use strict';

require.config({
    baseUrl: 'content/script',
    paths: {
        'angular'                  : '../../bower_components/angular/angular.min',
        'ngRoute'                  : '../../bower_components/angular-route/angular-route.min',
        'navServices'              : 'services/navServices',
        'controller'               : 'controller',
        'aboutController'          : 'controller/aboutController',
        'professionController'     : 'controller/professionController',
        'contactController'        : 'controller/contactController',
        'workController'           : 'controller/workController'
    },
   
    shim:{
        angular:{
            exports: 'angular'
        },
        ngRoute: {
            exports: 'ngRoute',
            deps: ['angular']
        },
        navServices: {
            deps:   ['angular']
        },
        controller: {
            deps: ['aboutController', 'professionController', 'contactController', 'workController']
        }
    }   
});

require(
    [
    // Dependencies from lib
        'angular', 
        'ngRoute',
    // Angular directives/controllers/services
        'app',
        'commonRoute',
        //'controller/mainMenuController',
        //'services/navServices',
        'controller/homeController',
        //'services/navServices'
    ], 
    function (angular) {
        var AppRoot = angular.element(document.getElementById('ng-app'));
        AppRoot.attr('ng-controller','AppController');
        angular.bootstrap(document, ['app']);
    }
);