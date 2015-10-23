app.controller("ListController", ['$scope', '$log', '$http', function ($scope, $log, $http) {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria"
        };
        var response = $http(config);

        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });

    }]);

app.controller("DetailController", ['$scope', '$routeParams', '$log', '$http', function ($scope, $routeParams, $log, $http) {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria/" + $routeParams.idEntidadBancaria
        };
        var response = $http(config);

        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });

    }]);


