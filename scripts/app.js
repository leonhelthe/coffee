const app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
   $routeProvider
   .when('/', {
      templateUrl: 'views/home.html',
      controller: 'myCtrl'
   })
   .when('/menu', {
      templateUrl: 'views/menu.html'
   })
   .otherwise({
      redirectTo: '/'
   })
}]);

app.controller('myCtrl', ['$scope', '$http', function($scope, $http){
   $http.get('coffee.json').then(function(response){
      $scope.coffees = response.data;
   });
}]);