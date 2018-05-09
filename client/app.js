var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'movieController',
		templateUrl: 'views/home.html'
	})
    .when('/movies/details', {
		controller:'movieController',
		templateUrl: 'views/movie.html'
	})
	.when('/movies', {
		controller:'movieController',
		templateUrl: 'views/movie.html'
	})
	.when('/movies/details/:id',{
		controller:'movieController',
		templateUrl: 'views/details.html'
	})
	.when('/movies/add',{
		controller:'movieController',
		templateUrl: 'views/add.html'
	})
	.when('/movies/edit/:id',{
		controller:'movieController',
		templateUrl: 'views/edit.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});