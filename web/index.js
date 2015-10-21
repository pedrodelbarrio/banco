var app = angular.module("app", []);

app.controller("IndexController", ['$scope', '$log', '$http', function ($scope, $log, $http) {
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
