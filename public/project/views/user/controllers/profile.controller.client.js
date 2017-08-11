(function () {
    angular
        .module('Project')
        .controller('profileController',profileController);

    function profileController($location, $routeParams, userService) {

        var model = this;
        var userId = $routeParams["userId"];

        //model.user = angular.copy(userService.findUserById(userId));

        userService
            .findUserById(userId)
            .then(renderUser);

        
        function renderUser(user) {
            model.user = user;
        }

        model.update = update;
        model.deleteUser = deleteUser;

        function update(user) {
            userService.updateUser(model.user._id, user)
            //$location.url("/user/" + model.user._id);
            .then(function () {
                model.message = 'user updated successfully'
            });

        }

        function deleteUser(user) {
            userService
                .deleteUser(user._id)
                .then(function () {
                    $location.url('/login');
                });
        }


    }

})();
