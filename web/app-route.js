app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.otherwise({
            templateUrl: "main.html",
            controller: "MainController"
        });

    }]);


