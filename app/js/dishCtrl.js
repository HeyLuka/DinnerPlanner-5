// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  $scope.numberOfGuests = Dinner.getNumberOfGuests();
  //$scope.pending = 2;

  $scope.dishID = $routeParams.dishId;

  $scope.getNumberOfGuests = function() {
  	return Dinner.getNumberOfGuests();
  }
  $scope.dishPrice = 0;
  $scope.search = function(id){
  	$scope.status = "Searching...";
  	Dinner.Dish.get({id: id}, function(data){
  		$scope.dish = data;
      var ingredients = data.Ingredients;
        //var dishPrice = 0;

        for(var ing_key in ingredients){
          $scope.dishPrice += ingredients[ing_key].Quantity;
        }
        $scope.$parent.pending = fixNumber($scope.dishPrice);
        //$scope.$parent.totalMenuPrice = fixNumber($scope.$parent.totalMenuPrice + $scope.$parent.pending);
  		$scope.status = "Showing detailed information of this dish";
  	}, function(data){
  		$scope.status = "There was an error";
  	});
  }

  $scope.search($routeParams.dishId);


  var fixNumber = function(number){
    var numberString = number.toString();
    var decimalIndex=numberString.indexOf('.');
    if((decimalIndex == '-1') || (numberString.substring(decimalIndex+1,numberString.length).length < 5)){
      return number;
    }else{
      return parseFloat(number.toFixed(2));
    }
  }

  	// Dinner.Dish.get({id: $routeParams.dishId}, function(data){
  	// 	$scope.dish = data.Results;
  	// 	console.log(data);
  	// 	$scope.status = "Showing detailed information of this dish";
  	// }, function(data){
  	// 	$scope.status = "There was an error";
  	// });


  
});