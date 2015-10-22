var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
 
  $routeProvider.when('/entidadbancaria/list', {
    templateUrl: "findall.html",
    controller: "FindAllController"
  });  
 
}]);

app.controller("FindAllController", ['$scope', '$log', '$http', function ($scope, $log, $http) {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria"
        };
        var response = $http(config);

        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });

        $scope.borrar = function (idEntidadBancaria) {
            var config = {
                method: "DELETE",
                url: "/banco_api/api/entidadbancaria/" + idEntidadBancaria
            };
            var response = $http(config);

            response.success(function (data, status, headers, config) {
                $scope.entidadBancaria = data;
            });
        };

    }]);


