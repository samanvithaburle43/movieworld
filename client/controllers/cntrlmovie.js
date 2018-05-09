var myApp = angular.module('myApp');

myApp.controller('movieController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('MovieController loaded...');

	$scope.getmovies = function(){
		$http.get('/api/movies').success(function(response){
			$scope.movies = response;
		});
	}

	$scope.getmovie = function(){
		var id = $routeParams.id;
		$http.get('/api/movies/'+id).success(function(response){
			$scope.movie = response;
		});
	}

	$scope.addmovie = function(){
		console.log($scope.movie);
		$http.post('/api/movies/', $scope.movie).success(function(response){
			window.location.href='#/movies';
		});
	}

	$scope.updatemovie = function(){
		var id = $routeParams.id;
		$http.put('/api/movies/'+id, $scope.movie).success(function(response){
			window.location.href='#/movies';
		});
	}

	$scope.removemovie = function(id){
		$http.delete('/api/movies/'+id).success(function(response){
			window.location.href='#/movies';
		});
	}
}]);