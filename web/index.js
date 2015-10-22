var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/entidadbancaria/list', {
            templateUrl: "findall.html",
            controller: "FindAllController"
        });

        $routeProvider.otherwise({
            redirectTo: '/pagina1'
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
