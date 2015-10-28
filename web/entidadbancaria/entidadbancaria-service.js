function EntidadBancariaService($http) {

    this.findAll = function () {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria"
        };
        return $http(config);
    };

    this.get = function (idEntidadBancaria) {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria/" + idEntidadBancaria
        };
        return $http(config);
    }

    this.delete = function (idEntidadBancaria) {
        var config = {
            method: "DELETE",
            url: "/banco_api/api/entidadbancaria/" + idEntidadBancaria
        };
        return $http(config);
    };
}

app.service("entidadBancariaService", EntidadBancariaService);




