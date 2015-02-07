//where our scope object is changable by me
var app = angular.module('myApp');//referencing our already created module, so don't need array

//chain controller onto app
app.controller('MainController', function($scope) {
	//$scope.test = 'This is a test';
	$scope.users = [];
	$scope.addUser = function() {
		console.log($scope.newUser);
		$scope.users.push($scope.newUser);
		$scope.newUser = {};//will blank out the inputs so new user can be inputed
	}
});