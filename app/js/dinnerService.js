// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($cookieStore, $resource) {
  
  var numberOfGuest = 2;


  this.setNumberOfGuests = function(num) {
    // set the cookies
    $cookieStore.put("numberOfGuest", num);
    numberOfGuest = num;
  }

  this.getNumberOfGuests = function() {
    // return numberOfGuest;
    return $cookieStore.get("numberOfGuest");
  }

  this.DishSearch = $resource('http://api.bigoven.com/recipes', {pg:1, rpp:12, api_key:'H9n1zb6es492fj87OxDtZM9s5sb29rW3'});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id', {api_key:'H9n1zb6es492fj87OxDtZM9s5sb29rW3'});


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