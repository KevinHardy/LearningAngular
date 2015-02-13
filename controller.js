//where our scope object is changable by me
var app = angular.module('myApp');//referencing our already created module, so don't need array

//chain controller onto app
//note that this controller is being reloaded every time I reload the page, so inputed user data is not saved, need services like databases for that, will learn later
app.controller('MainController', function($scope) {
	//$scope.test = 'This is a test';
	$scope.users = [];
	$scope.addUser = function() {
		console.log($scope.newUser);
		$scope.users.push($scope.newUser);
		$scope.newUser = {};//will blank out the inputs so new user can be inputed
	}

	$scope.deleteUser = function(index) {
		console.log(index);
		$scope.users.splice(index, 1);//want to cut out 1 user? use splice at index, and remove 1 item
	}
});