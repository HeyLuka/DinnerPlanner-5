dinnerPlannerApp.controller('PrintCtrl', function ($scope, Dinner){
	
	$scope.numberOfGuests = Dinner.getNumberOfGuests();


  	$scope.getNumberOfGuests = function() {
  		return Dinner.getNumberOfGuests();
  	}

  	var menu = Dinner.getMenu();
  	$scope.menuDishList = [];

  	$scope.update = function(){
  		menu = Dinner.getMenu();
  		$scope.menuDishList = [];
  		for(var key in menu){
  			(function(key){
  				Dinner.Dish.get({id: menu[key]}, function(data){
  					var ImageURL = data.ImageURL;
  					var Description = data.Description;
  					var Instrctions = data.Instrctions;
  					$scope.menuDishList.push({"ImageURL": ImageURL, "Description": Description, "Instrctions": Instrctions})

  				})

  			})(key);
  		}
  	}
  	$scope.update();
})