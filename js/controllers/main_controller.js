app.controller('mainController', ['$scope','$http', function($scope, $http){
//have to define $scope and $http first, THEN also pass through your function. You have to say what they are first before they are used in a function.
  $http.get('http://www.omdbapi.com/?t=hi&y=2000&plot=short&r=json').then(function(data){
      $scope.movieData = data.data;
  });


}]);
