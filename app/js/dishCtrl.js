// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  $scope.search = function(id){
  	$scope.status = "Searching...";
  	Dinner.Dish.get({id: id}, function(data){
  		$scope.dish = data.Results;
  		console.log(data);
  		console.log(data.Message);
  		$scope.status = "Showing detailed information of this dish";
  	}, function(data){
  		$scope.status = "There was an error";
  	});
  }

  	Dinner.Dish.get(function(data){
  		$scope.dish = data.Results;
  		console.log(data);
  		console.log(data.Message);
  		$scope.status = "Showing detailed information of this dish";
  	}, function(data){
  		$scope.status = "There was an error";
  	});


  
});