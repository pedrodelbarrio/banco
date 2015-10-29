ListController.$inject = ['entidadBancariaService', '$scope', '$log'];

function ListController(entidadBancariaService, $scope, $log) {

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

}

app.controller("ListController", ListController);



DetailController.$inject = ['entidadBancariaService', '$scope', '$routeParams', '$log'];

function DetailController(entidadBancariaService, $scope, $routeParams, $log) {

    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });

}

app.controller("DetailController", DetailController);



NewController.$inject = ['entidadBancariaService', '$scope', '$log'];

function NewController(entidadBancariaService, $scope, $log) {

    var response = entidadBancariaService.getDefault();

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });
}

app.controller("NewController", NewController);


