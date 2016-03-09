// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($cookieStore, $resource) {
  
  var numberOfGuest = 1;
  var menu = [167511, 164277, 444701];

  this.getMenu = function(){
    return menu;
  }

  this.addDishToMenu = function(id){
    for(var key in menu){
      if(menu[key] == id){
        return;
      }
    }
    menu.push(id);
  }

  this.removeDishFromMenu = function(id){
    for(var key in menu){
      if(menu[key] == id){
        menu.splice(key,1);
        break;
      }
    }
  }


  this.setNumberOfGuests = function(num) {
    // set the cookies
    $cookieStore.put("numberOfGuest", num);
    numberOfGuest = num;
  }

  this.getNumberOfGuests = function() {
    // return numberOfGuest;
    if($cookieStore.get("numberOfGuest")){
      return $cookieStore.get("numberOfGuest");
    }else{
      return numberOfGuest;
    }
  }
  //10000 per hour key:
  //var api_key = "sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox";
  //500 per hour key:
  var api_key = "0OV23011kU7B3VVVgxTTTIfdNXeTI3us";
  //var api_key = "66J8l00npnHHZcCNLRhxkfW1OHxbojy4";
  //var api_key = "XKEdN82lQn8x6Y5jm3K1ZX8L895WUoXN";
  //var api_key = "3stL5NVP4s6ZkmK5gt4dci8a4zOQRpD4";
  //var api_key = "8vtk7KykflO5IzB96kb0mpot0sU40096";
  //var api_key = "1hg3g4Dkwr6pSt22n00EfS01rz568IR6";
  //var api_key = "r02x0R09O76JMCMc4nuM0PJXawUHpBUL";
  //var api_key = "H9n1zb6es492fj87OxDtZM9s5sb29rW3";
  //var api_key = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";


  this.DishSearch = $resource('http://api.bigoven.com/recipes', {pg:1, rpp:12, api_key: api_key});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id', {api_key: api_key});




  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});