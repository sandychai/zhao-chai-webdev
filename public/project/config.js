(function () {
    angular
        .module("Project")
        .config(configuration);


    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl:"home.html",
                controller:"movieController",
                controllerAs:"model"

            })
            .when("/movie", {
                templateUrl:"movie.html",
                controller:"movieController",
                controllerAs:"model"
            })
            .when("/movie/:imdbID", {
                templateUrl:"detail.html",
                controller:"detailController",
                controllerAs:"model"
            })
            .when("/login", {
                templateUrl:"views/user/templates/login.view.client.html",
                //controller:"loginController",
                //controllerAs:"model"
            })
            .when('/register', {
                templateUrl:'views/user/templates/register.view.client.html',
                //controller:"registerController",
                //controllerAs:"model"
            })
            .when('/user/:userId', {
                templateUrl:'views/user/templates/profile.view.client.html',
                //controller:"profileController",
                //controllerAs:"model"
            })
    }
})();