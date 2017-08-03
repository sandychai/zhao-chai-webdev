(function () {
    angular
        .module('WAM')
        .controller('registerController',registerController);

    function registerController($location, userService) {

        var model = this;



        model.register = register;

        function register(username, password, password2) {

            if(password !== password2){
                model.error = "password must match";
                return;
            }

            var found = null;//userService.findUserByUsername(username);

            if(found !== null){
                model.error = "username is not available";
            } else{
                var user = {
                    username:username,
                    password:password,

                };
                //model.message = user;
                userService
                    .createUser(user)
                    .then(function (user) {
                        $location.url("/user/" + user._id);
                    })

            }

        }
    }

})();
