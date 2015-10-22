var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/entidadbancaria/list', {
            templateUrl: "findall.html",
            controller: "FindAllController"
        });
        
        $routeProvider.when('/entidadbancaria/view/:idEntidadBancaria', {
            templateUrl: "get.html",
            controller: "GetController"
        });

        $routeProvider.otherwise({
            redirectTo: '/entidadbancaria/list'
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

    }]);

app.controller("GetController", ['$scope', '$routeParams', '$log', '$http', function ($scope, $routeParams, $log, $http) {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria/" + $routeParams.idEntidadBancaria
        };
        var response = $http(config);

        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });

    }]);
