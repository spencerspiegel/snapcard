'use strict'

var app = angular.module('myApp' , ['ngRoute' , 'myApp.controllers']);

app.config(['$routeProvider' , function ($routeProvider){
	$routeProvider.when('/' , {
		templateUrl: 'partials/index',
		controller: 'mainControl'
	}).otherwise({redirectTo: '/'})
}]);
