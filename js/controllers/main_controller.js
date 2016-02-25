app.controller('mainController', ['$scope','$http', function($scope, $http){
  console.log('youve reached the controller wahoo');
//have to define $scope and $http first, THEN also pass through your function. You have to say what they are first before they are used in a function.
$scope.showme = true;
$scope.movieData;

$scope.findMovies = function(movie){

  $http.get('http://www.omdbapi.com/?s=' + movie.movieTitle)
  .then(function(response){
    $scope.movieResults = [];
    $scope.movieData = response.data.Search;
    response.data.Search.forEach(function(results){
      $scope.movieResults.push(results)
    });
    console.log($scope.movieResults);
  })
}
}]);
