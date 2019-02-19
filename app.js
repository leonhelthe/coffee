const app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', '$http', function($scope, $http){
   $http.get('coffee.json').then(function(response){
      $scope.coffee = response.data;
   });
}]);