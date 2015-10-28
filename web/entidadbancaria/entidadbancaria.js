app.controller("ListController", ['entidadBancariaService', '$scope', '$log', function (entidadBancariaService, $scope, $log) {

        var response = entidadBancariaService.findAll();

        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });

        $scope.borrar = function (idEntidadBancaria) {

            var response = entidadBancariaService.delete(idEntidadBancaria);

            response.success(function (data, status, headers, config) {
                $scope.entidadBancaria = data;
            });
        };

    }]);

app.controller("DetailController", ['entidadBancariaService', '$scope', '$routeParams', '$log', function (entidadBancariaService, $scope, $routeParams, $log) {

        var response = entidadBancariaService.get($routeParams.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });

    }]);


