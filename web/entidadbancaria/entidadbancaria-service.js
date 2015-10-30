EntidadBancariaService.$inject = ['$http'];

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
    };

    this.delete = function (idEntidadBancaria) {
        var config = {
            method: "DELETE",
            url: "/banco_api/api/entidadbancaria/" + idEntidadBancaria
        };
        return $http(config);
    };
    
    this.getDefault = function() {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria/defaultvalue"
        };
        return $http(config);
    };

    this.insert = function (entidadBancaria) {
        var config = {
            method: "POST",
            url: "/banco_api/api/entidadbancaria",
            data: entidadBancaria
        };
        return $http(config);
    };
}

app.service("entidadBancariaService", EntidadBancariaService);




