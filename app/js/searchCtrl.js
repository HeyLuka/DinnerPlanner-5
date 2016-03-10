// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope, $cookieStore, Dinner) {

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.

  // $scope.formerQuery = $cookieStore.get("formerQuery");

  var getFormerQuery = function(){
  	if($cookieStore.get("formerQuery")){
  		// $scope.formerQuery = $cookieStore.get("formerQuery");
  		return $cookieStore.get("formerQuery");
  	}
  	else{
  		// $scope.formerQuery = "";
  		return " "
  	}
  }

  $scope.formerQuery = getFormerQuery();
  $scope.query = getFormerQuery();

	$scope.search = function(query){
		$cookieStore.put("formerQuery", query);
		$scope.status = "Searching...";
		Dinner.DishSearch.get({title_kw: query},function(data){
			$scope.dishes = data.Results;
	  		$scope.status = "Showing " + data.Results.length + " results";
	  	},function(data){
	  		$scope.status = "There was an error";
	  	});
	}

	$scope.search($scope.formerQuery);

	// $scope.search($scope.getFormerQuery());

});