app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/entidadbancaria/list', {
            templateUrl: "entidadbancaria/entidadbancaria-list.html",
            controller: "ListController"
        });
        
        $routeProvider.when('/entidadbancaria/detail/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "DetailController"
        });
        
        $routeProvider.when('/entidadbancaria/new', {
            templateUrl: "entidadbancaria/entidadbancaria-new.html",
            controller: "NewController"
        });

    }]);


