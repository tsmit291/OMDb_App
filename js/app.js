// yo homie only your routes go in here //
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/movies', {
    templateUrl: './partials/home.html',
    controller: 'mainController'
  })
});
