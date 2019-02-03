const app = angular.module("myApp", []);

app.controller("myController", function($scope, $http){
   $scope.coffees = [];
   $http.get('./coffee.json').then(function(data){
      $scope.coffees = data.data;
   })
});