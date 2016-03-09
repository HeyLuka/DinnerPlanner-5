// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

  // $scope.dishes = Dinner.DishSearch.get({title_kw:query});
  var menu = Dinner.getMenu();

  $scope.addDishToMenu = function(id){
    Dinner.addDishToMenu(id);
  }
  
  $scope.removeDishFromMenu = function(id){
    Dinner.removeDishFromMenu(id);
  }

  $scope.totalMenuPrice = 0;
  $scope.menuTitlePriceList = [];
  for(var key in menu){
    (function(key){
      Dinner.Dish.get({id: menu[key]}, function(data){
        var title = data.Title;
        var ingredients = data.Ingredients;
        var dishPrice = 0;

        for(var ing_key in ingredients){
          dishPrice += ingredients[ing_key].Quantity;
        }

        $scope.menuTitlePriceList[key] = ({"title":title, "dishPrice":fixNumber(dishPrice)})
        //alert($scope.menuTitlePriceList[key]);
        $scope.totalMenuPrice = fixNumber($scope.totalMenuPrice + dishPrice);
      })
    })(key);
  }

  $scope.pending = 0;

  var fixNumber = function(number){
    var numberString = number.toString();
    var decimalIndex=numberString.indexOf('.');
    if((decimalIndex == '-1') || (numberString.substring(decimalIndex+1,numberString.length).length < 5)){
      return number;
    }else{
      return parseFloat(number.toFixed(2));
    }
  }

  //alert(1);
  //alert(2);

  



});