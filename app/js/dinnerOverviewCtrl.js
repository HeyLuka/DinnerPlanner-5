// DinnerOverview controller which would be used to control the content displayed in the
// dinnerOverview page
dinnerPlannerApp.controller('DinnerOverviewCtrl', function ($scope, Dinner){
	var numberOfGuests = Dinner.getNumberOfGuests();

	$scope.getNumberOfGuests = function(){
		return Dinner.getNumberOfGuests();
	}

	$scope.menuList = [];

	$scope.updateMenu = function(){
		var menu = Dinner.getMenu();
		$scope.menuList = [];
		$scope.totalMenuPrice = 0;
		for (var key in menu){
			(function(key) {
				Dinner.Dish.get({id: menu[key]}, function(data) {
					var title = data.Title;
					var ingredients = data.Ingredients;
					var dishPrice = 0;

					for (var ing_key in ingredients){
						dishPrice += ingredients[ing_key].Quantity;
					}

					$scope.menuList.push({"recipe": data, "dishPrice": fixNumber(dishPrice)})
					$scope.totalMenuPrice = fixNumber($scope.totalMenuPrice + dishPrice);
				})
			})(key)
		}
	}

	$scope.updateMenu();

	var fixNumber = function(number){
		var numberString = number.toString();
		var decimalIndex=numberString.indexOf('.');
		if((decimalIndex == '-1') || (numberString.substring(decimalIndex+1,numberString.length).length < 5)){
			return number;
		}else{
			return parseFloat(number.toFixed(2));
		}
	}
})