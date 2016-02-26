app.controller('movieController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

    $http.get('http://www.omdbapi.com/?i='+ $routeParams.imdbID).then(function(response){

      $scope.movie = response.data;
      // click a movie poster
      // movie imdbID gets put inside our http request so the browser knows which movie to display
      // display that movie on our movie.html page.

    })
  }])
