(function () {
    angular
        .module('WAM')
        .controller('profileController',profileController);

    function profileController($location, $routeParams, userService ) {

        var model = this;
        var userId = $routeParams["userId"];

        model.user = angular.copy(userService.findUserById(userId));

        model.update = update;

        function update(user) {
            userService.updateUser(model.user._id, user);
            $location.url("/user/" + model.user._id);

        }


    }

})();
